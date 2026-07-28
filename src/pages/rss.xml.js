import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../config/site";
import { profile } from "../config/profile";

export async function GET(context) {
  const base = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const posts = (await getCollection("posts", ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
  const title = siteConfig.title || profile.name || profile.nameEn || "个人主页";
  return rss({
    title,
    description: siteConfig.description || profile.bio || "技术笔记与文章",
    site: new URL(base, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `${base}posts/${post.id}/`,
    })),
  });
}
