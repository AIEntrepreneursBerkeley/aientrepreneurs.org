import { Client } from "@notionhq/client";
import { env } from "~/env";

export type Advisor = {
  id: string;
  name: string;
  role?: string;
  linkedinUrl?: string;
  avatarUrl?: string;
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
    filter: {
      and: [],
    },
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
  });

  return (response.results as NotionPage[])
    .map((page) => mapAdvisor(page))
    .filter((advisor): advisor is Advisor => advisor !== null);
}

function mapAdvisor(page: NotionPage): Advisor | null {
  try {
    const props = page.properties ?? {};
    const name = props.Name?.title?.[0]?.plain_text ?? "";
    if (!name) return null;
    const role = props.Role?.rich_text?.[0]?.plain_text ?? undefined;
    const linkedinUrl = props.LinkedIn?.url ?? undefined;
    // For avatar, prefer a Files property named "Avatar" else use the Notion icon
    const file = props.Avatar?.files?.[0];
    const avatarUrl =
      file?.file?.url ??
      file?.external?.url ??
      page.icon?.external?.url ??
      undefined;
    return { id: page.id, name, role, linkedinUrl, avatarUrl };
  } catch {
    return null;
  }
}
