import type { MetadataRoute } from "next";
import { business } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = `https://${business.domain}`;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
