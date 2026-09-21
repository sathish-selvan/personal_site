import type { ComponentType } from "react";

export type PostMeta = {
  title: string;
  date: string;
  description: string;
};

export type PostModule = {
  default: ComponentType;
  meta: PostMeta;
};

const modules = import.meta.glob<PostModule>("../content/blog/*.mdx", {
  eager: true,
});

export type Post = PostMeta & { slug: string; Component: ComponentType };

export const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split("/").pop()!.replace(/\.mdx$/, "");
    return { slug, Component: mod.default, ...mod.meta };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
