import type { IFrontmatter } from "@/types/IFrontMatter";
import type { MarkdownInstance } from "astro";

export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishDate).valueOf() -
      new Date(a.frontmatter.publishDate).valueOf()
  );
};
