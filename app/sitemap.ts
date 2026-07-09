import type { MetadataRoute } from "next";

const BASE = "https://docs.kardashevlabs.org";

const PAGES = [
  { path: "", priority: 1.0 },
  { path: "/quickstart", priority: 0.9 },
  { path: "/installation", priority: 0.8 },
  { path: "/supported-isos", priority: 0.8 },
  { path: "/api-reference", priority: 0.8 },
  { path: "/examples", priority: 0.7 },
  { path: "/comparison", priority: 0.7 },
  { path: "/data-sources", priority: 0.6 },
  { path: "/roadmap", priority: 0.4 },
  { path: "/changelog", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));
}
