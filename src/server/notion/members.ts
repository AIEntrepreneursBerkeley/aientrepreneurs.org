import { Client } from "@notionhq/client";
import { env } from "~/env";
import type { Member } from "~/lib/contentlayer-types";

const notion = env.NOTION_TOKEN ? new Client({ auth: env.NOTION_TOKEN }) : null;

// Type definitions for Notion API responses
type NotionPage = {
  id: string;
  properties: Record<string, NotionProperty>;
  icon?: {
    external?: {
      url: string;
    };
  };
};

type NotionProperty = {
  title?: Array<{ plain_text: string }>;
  rich_text?: Array<{ plain_text: string }>;
  url?: string;
  multi_select?: Array<{ name: string }>;
  files?: Array<{
    file?: { url: string };
    external?: { url: string };
  }>;
};

export async function fetchAllMembers(): Promise<Member[]> {
  if (!notion || !env.NOTION_ADVISORS_DATABASE_ID) return [];

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_ADVISORS_DATABASE_ID,
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
    });

    return (response.results as NotionPage[])
      .map((page) => mapMember(page))
      .filter((member): member is Member => member !== null);
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
}

function mapMember(page: NotionPage): Member | null {
  try {
    const props = page.properties ?? {};
    const name = props.Name?.title?.[0]?.plain_text ?? "";
    if (!name) return null;

    // Handle role as array (multi-select or rich text)
    const roleArray =
      props.Role?.multi_select?.map((item) => item.name) ??
      (props.Role?.rich_text?.[0]?.plain_text
        ? [props.Role.rich_text[0].plain_text]
        : []);

    const linkedin = props.LinkedIn?.url ?? "";

    // Handle image as array
    const imageArray =
      props.Image?.files
        ?.map((file) => file?.file?.url ?? file?.external?.url)
        .filter((url): url is string => Boolean(url)) ?? [];

    // Fallback to page icon if no image files
    if (imageArray.length === 0 && page.icon?.external?.url) {
      imageArray.push(page.icon.external.url);
    }

    return {
      _id: page.id,
      name,
      role: roleArray,
      image: imageArray,
      linkedin,
    };
  } catch (error) {
    console.error("Error mapping member:", error);
    return null;
  }
}
