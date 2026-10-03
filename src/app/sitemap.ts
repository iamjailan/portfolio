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
    {
      url: new URL("/retro", DATA.url).toString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];


  return [...staticPages];
}
