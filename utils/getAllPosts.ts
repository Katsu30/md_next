import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type Post = {
  slug: string;
  content: string;
  title?: string;
  date?: string;
  thumbnail?: string;
};

export function getPostBySlug(slug: string): Post {
  const filePath = path.join("contents", slug, "index.md");
  const file = fs.readFileSync(filePath);
  const { data, content } = matter(file);

  return {
    slug,
    ...data,
    content,
  };
}

export const getAllPosts = (): Post[] => {
  const slugs = fs.readdirSync("contents");
  const posts = slugs.map((slug) => getPostBySlug(slug));

  return posts as Post[];
};
