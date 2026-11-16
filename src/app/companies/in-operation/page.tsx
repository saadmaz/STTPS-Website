import type { Metadata } from "next";
import Link from "next/link";
import { COMPANIES } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";

const TITLE = "Companies in Operation | STTPS";
const DESCRIPTION =
  "The STTPS companies operating today: Tank Sudda, Team Sudda, STOPWASH and Polish Station, each with real customers, real teams and real accountability.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/companies/in-operation" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/companies/in-operation",
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/companies/in-operation",
  isPartOf: { "@type": "Organization", name: "STTPS" },
  hasPart: COMPANIES.map((c) => ({
    "@type": "Organization",
    name: c.name,
    description: c.category,
  })),
};

export default function CompaniesInOperationPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>Companies in operation</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Operating Today.", "Built for Tomorrow."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount" className="mt-10 flex flex-col gap-5">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              STTPS is building each company in the real world, with real customers, real teams and
              real accountability.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Each company is at a different point in its development. Each is being built with a
              clear category role and a long-term operating ambition.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell">
          <div className="border-t border-steel/25">
            {COMPANIES.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.06} className="group border-b border-steel/25">
                <Link
                  href={`/companies/${c.id}`}
                  className="grid gap-5 py-9 transition-colors duration-500 group-hover:bg-foreground/[0.03] md:grid-cols-[1fr_1.2fr] md:gap-14 md:px-4"
                >
                  <div>
                    <UnitTag index={i + 1} detail={c.categoryGroup} />
                    <h2 className="display-lg mt-6 text-3xl md:text-4xl">{c.name}</h2>
                    <p className="label-xs mt-3 text-muted-foreground">{c.category}</p>
                  </div>
                  <div className="self-center">
                    <p className="max-w-xl font-display text-xl leading-tight tracking-[-0.02em]">
                      {c.headline}
                    </p>
                    <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                    {c.serviceArea && (
                      <p className="panel-tag mt-5 text-muted-foreground/80">{c.serviceArea}</p>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <ArrowLink href="/companies/in-development">Companies in Development</ArrowLink>
            <ArrowLink href="/contact" className="border-transparent">
              Contact an Operating Company
            </ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
