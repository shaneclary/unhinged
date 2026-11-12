import type { MetadataRoute } from "next";
import { routes, site } from "@/content/site";
import { topics } from "@/content/learn";
import { glossaryReviewed } from "@/content/glossary";
import { legacyPages } from "@/content/legacy/status";

// Only pages that are ready for search engines: imported pages from the current
// site, and guides Liam has reviewed.
export default function sitemap(): MetadataRoute.Sitemap {
  const reviewed = topics.filter((topic) => topic.reviewed);
  const paths: { path: string; lastModified?: string }[] = [
    ...legacyPages.filter((page) => page.imported).map((page) => ({ path: page.path })),
    ...(reviewed.length > 0 ? [{ path: routes.learn }] : []),
    ...reviewed.map((topic) => ({ path: `${routes.learn}/${topic.slug}`, lastModified: topic.updated })),
    ...(glossaryReviewed ? [{ path: routes.glossary }] : []),
  ];
  return paths.map((entry) => ({
    url: `${site.url}${entry.path === "/" ? "" : entry.path}`,
    ...(entry.lastModified ? { lastModified: entry.lastModified } : {}),
  }));
}
