import { Client } from "@notionhq/client";
import { env } from "~/env";

export type Advisor = {
  id: string;
  name: string;
  roles: string[];
  linkedin?: string;
  images: string[];
};

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
  multi_select?: Array<{ name: string }>;
  url?: string;
  files?: Array<{
    file?: { url: string };
    external?: { url: string };
  }>;
};

export async function fetchAdvisors(): Promise<Advisor[]> {
  if (!notion || !env.NOTION_ADVISORS_DATABASE_ID) return [];

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
    .map((page) => mapAdvisor(page))
    .filter((advisor): advisor is Advisor => advisor !== null)
    .filter((advisor) => advisor.roles.some((r) => r.includes("Advisor")));
}

function mapAdvisor(page: NotionPage): Advisor | null {
  try {
    const props = page.properties ?? {};
    const name = props.Name?.title?.[0]?.plain_text ?? "";
    if (!name) return null;

    const roles =
      props.Role?.multi_select?.map((item) => item.name) ??
      (props.Role?.rich_text?.[0]?.plain_text
        ? [props.Role.rich_text[0].plain_text]
        : []);

    const linkedin = props.LinkedIn?.url ?? undefined;

    const imageFiles = props.Image?.files ?? props.Avatar?.files ?? [];
    const images = imageFiles
      .map((file) => file?.file?.url ?? file?.external?.url)
      .filter((url): url is string => Boolean(url));

    if (images.length === 0 && page.icon?.external?.url) {
      images.push(page.icon.external.url);
    }

    return { id: page.id, name, roles, linkedin, images };
  } catch {
    return null;
  }
}
