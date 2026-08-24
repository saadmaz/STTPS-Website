import type { Metadata } from "next";
import { lazy, Suspense } from "react";
import Link from "next/link";
import { COMPANIES } from "@/data/sttps";
import { Label, Reveal, SplitLines } from "@/components/site/primitives";

const EcosystemDiagram = lazy(() =>
  import("@/components/site/ecosystem").then((m) => ({ default: m.EcosystemDiagram })),
);

const TITLE = "Companies — Tank Sudda, Team Sudda, Polish Station, STOPWASH";
const DESCRIPTION =
  "The operating companies of STTPS: water tank care, service operations, automotive detailing and everyday car wash — each built as its own brand.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/companies" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/companies", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/companies",
  isPartOf: { "@type": "Organization", name: "STTPS" },
  hasPart: COMPANIES.map((c) => ({
    "@type": "Organization",
    name: c.name,
    description: c.category,
  })),
};

export default function CompaniesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="bg-ink pb-20 pt-40 text-warm md:pb-28 md:pt-52">
        <div className="shell">
          <Label className="text-warm">Our companies</Label>
          <SplitLines
            as="h1"
            lines={["Four Brands.", "One Standard."]}
            className="display-hero mt-8 text-warm"
          />
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-warm/60">
              Every company in the group serves a different world — water, property, vehicles,
              people — and shares the same operating discipline.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink pb-24 text-warm md:pb-32">
        <div className="shell">
          <Suspense fallback={null}>
            <EcosystemDiagram />
          </Suspense>
        </div>
      </section>

      <section className="bg-warm py-20 md:py-28">
        <div className="shell grid gap-px border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANIES.map((c, i) => (
            <Link
              key={c.id}
              href={`/companies/${c.id}`}
              className="group bg-warm p-8 transition-colors duration-500 hover:bg-ink hover:text-warm md:p-10"
            >
              <div className="label-xs opacity-40 group-hover:opacity-60">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="display-lg mt-10 text-2xl md:text-3xl">{c.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground group-hover:text-warm/60">
                {c.category}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
