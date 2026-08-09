import type { MetadataRoute } from "next";
import { GUIDES } from "@/content/guides";
import { SERVICES } from "@/content/services";

const SITE = "https://www.digitalnetworkingagency.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/guides`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE}/pr-for`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const guideRoutes: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${SITE}/guides/${guide.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE}/pr-for/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...guideRoutes, ...serviceRoutes];
}
