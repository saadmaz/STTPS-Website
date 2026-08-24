import type { Metadata } from "next";
import Link from "next/link";
import { COMPANIES } from "@/data/sttps";
import { Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";
import { InstrumentStrip } from "@/components/site/instrument-strip";

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
            trigger="mount"
            lines={["Four Brands.", "One Standard."]}
            className="display-hero mt-8 text-warm"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-warm/60">
              Every company in the group serves a different world — water, property, vehicles,
              people — and shares the same operating discipline.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink pb-24 text-warm md:pb-32">
        <div className="shell max-w-xl">
          <InstrumentStrip />
        </div>
      </section>

      {/*
        Equal-sized panels, equal copy length, equal weighting — no company
        (STOPWASH included, despite being the most consumer-recognizable)
        gets a larger or more prominent treatment than the others here.
      */}
      <section className="bg-warm py-20 md:py-28">
        <div className="shell grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANIES.map((c, i) => (
            <Link
              key={c.id}
              href={`/companies/${c.id}`}
              className="group bg-warm p-8 transition-colors duration-500 hover:bg-ink hover:text-warm md:p-10"
            >
              <UnitTag index={i + 1} className="opacity-70 group-hover:opacity-100" />
              <h2 className="display-lg mt-10 text-2xl md:text-3xl">{c.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground group-hover:text-warm/60">
                {c.category}
              </p>
              <p className="label-xs mt-6 text-muted-foreground/70 group-hover:text-warm/40">
                Explore →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
