import type { MetadataRoute } from "next";
import { routes, site } from "@/content/site";

// Staging: keep every crawler out. Live (NEXT_PUBLIC_INDEXABLE=true): let
// search engines and AI crawlers in, and point them at the sitemap.
export default function robots(): MetadataRoute.Robots {
  if (!site.indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", routes.proposed] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
