import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", DATA.url).toString(),
    host: DATA.url,
  };
}
