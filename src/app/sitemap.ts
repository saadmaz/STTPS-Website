import type { MetadataRoute } from "next";
import { COMPANIES } from "@/data/sttps";

const BASE_URL = "https://sttps.co";

export const dynamic = "force-static";

// Phase 3 extends this with dynamic /blog and /careers/[slug] entries once
// Sanity is wired up.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/companies",
    "/ventures",
    "/careers",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const companyRoutes = COMPANIES.map((c) => ({
    url: `${BASE_URL}/companies/${c.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...companyRoutes];
}
