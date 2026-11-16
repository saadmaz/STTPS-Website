import type { MetadataRoute } from "next";
import { ABOUT_SECTIONS, COMPANIES } from "@/data/sttps";

const BASE_URL = "https://sttps.co";

export const dynamic = "force-static";

// Phase 3 extends this with dynamic /news/[slug] and /careers/[slug] entries
// once Sanity is wired up.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/companies",
    "/companies/in-operation",
    "/companies/in-development",
    "/how-we-build",
    "/capabilities",
    "/sustainability",
    "/governance",
    "/news",
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

  const aboutRoutes = ABOUT_SECTIONS.map((s) => ({
    url: `${BASE_URL}/about/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...companyRoutes, ...aboutRoutes];
}
