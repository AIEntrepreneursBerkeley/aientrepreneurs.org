// Manual type definitions to match Contentlayer structure
export type Member = {
  _id: string;
  name: string;
  role: string[];
  image: string[];
  linkedin: string;
};

// This will be populated by our fetch function
export const allMembers: Member[] = [];
