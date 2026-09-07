import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";
import { allPosts } from "content-collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: DATA.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/blog", DATA.url).toString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = allPosts.map((post) => {
    const slug = post._meta.path.replace(/\.mdx$/, "");

    return {
      url: new URL(`/blog/${slug}`, DATA.url).toString(),
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticPages, ...blogPosts];
}
