export type BlogContentType =
  | "topic"
  | "heading"
  | "subHeading"
  | "content"
  | "image"
  | "list"
  | "halfSection";

export interface BlogContent {
  type: BlogContentType;
  topic?: string;
  heading?: string;
  subHeading?: string;
  content?: string[];
  image?: string;
  items?: string[];
  halfSection?: BlogContent[];
}

export interface Blog {
  slug: string;
  id: number;
  title: string;
  desc: string;
  featured: boolean;
  image: string;
  category: string[];
  author: string;
  date: string;
  content: BlogContent[];
}
