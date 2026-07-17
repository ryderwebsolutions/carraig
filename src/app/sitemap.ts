import type { MetadataRoute } from "next";
import { business, projects, services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = `https://${business.domain}`;
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/why-us`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/process`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/areas`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/faqs`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
