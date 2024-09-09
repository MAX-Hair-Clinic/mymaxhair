import rawData from "@/data/blogs.json";
import { Blog, BlogContent, BlogContentType } from "@/types/blogData";

function validateBlogContentType(type: any): BlogContentType {
  const validTypes: BlogContentType[] = [
    "topic",
    "heading",
    "subHeading",
    "content",
    "image",
    "list",
    "halfSection",
  ];
  if (validTypes.includes(type)) {
    return type;
  }
  throw new Error(`Invalid type for blog content: ${type}`);
}

function transformBlogContent(content: any[]): BlogContent[] {
  return content.map((item) => ({
    ...item,
    type: validateBlogContentType(item.type),
  }));
}

function transformAndValidateBlogData(data: any[]): Blog[] {
  return data.map((item) => ({
    ...item,
    content: transformBlogContent(item.content),
  }));
}

const blogs: Blog[] = transformAndValidateBlogData(rawData as unknown as any[]);

export default blogs;
