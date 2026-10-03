import type { MetadataRoute } from "next";
import { locationAreas } from "@/lib/locations-data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/areas-we-cover`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const locationRoutes: MetadataRoute.Sitemap = locationAreas.map((area) => ({
    url: `${SITE_URL}${area.href}`,
    lastModified,
    changeFrequency: "weekly",
    priority: "main" in area && area.main ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...locationRoutes];
}
