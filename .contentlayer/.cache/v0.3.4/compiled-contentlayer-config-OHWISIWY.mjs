// contentlayer.config.ts
import { defineDatabase, makeSource } from "contentlayer-source-notion";
import * as notion from "@notionhq/client";
var client = new notion.Client({
  auth: process.env.NOTION_TOKEN
});
var Member = defineDatabase(() => ({
  name: "Member",
  databaseId: process.env.NOTION_ADVISORS_DATABASE_ID || "1ee64024306a4714af57320fc8ca6834"
}));
var contentlayer_config_default = makeSource({
  client,
  databaseTypes: [Member]
});
export {
  Member,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-OHWISIWY.mjs.map
