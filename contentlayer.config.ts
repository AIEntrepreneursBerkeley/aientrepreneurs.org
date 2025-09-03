import * as notion from "@notionhq/client";
import { defineDatabase, makeSource } from "contentlayer-source-notion";

const client = new notion.Client({
  auth: process.env.NOTION_TOKEN,
});

export const Member = defineDatabase(() => ({
  name: "Member",
  databaseId:
    process.env.NOTION_ADVISORS_DATABASE_ID ||
    "1ee64024306a4714af57320fc8ca6834",
}));

export default makeSource({
  client,
  databaseTypes: [Member],
});
