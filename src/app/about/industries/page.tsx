import type { Metadata } from "next";
import { COMPANIES_BY_CATEGORY } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";
import { AboutSubNav } from "@/components/site/about-sub-nav";

const TITLE = "Industries We Operate In | STTPS";
const DESCRIPTION =
  "The everyday-service industries STTPS builds for: water and hygiene, property and operations, and vehicle care.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about/industries" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about/industries",
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/about/industries",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

export default function IndustriesPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>Industries we operate in</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Everyday Services,", "Real Industries."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Each STTPS company is built around a specific, everyday-service market rather than a
              general one. Where a diversified conglomerate spreads one team thin across many
              sectors, we put a dedicated company behind each market instead.
            </p>
          </Reveal>
        </div>
      </section>

      <AboutSubNav current="industries" />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-px border border-steel/25 bg-steel/25 lg:grid-cols-3">
          {COMPANIES_BY_CATEGORY.map(({ group, companies }, i) => (
            <Reveal key={group} delay={i * 0.08} className="bg-warm p-8 md:p-10">
              <UnitTag index={i + 1} />
              <h2 className="display-lg mt-10 text-2xl md:text-3xl">{group}</h2>
              <ul className="mt-8 border-t border-steel/25">
                {companies.map((c) => (
                  <li key={c.id} className="border-b border-steel/20 py-4">
                    <div className="font-display text-lg tracking-[-0.02em]">{c.name}</div>
                    <p className="panel-tag mt-2 text-muted-foreground">{c.category}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.positioning}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-16 md:py-24">
        <div className="shell">
          <SplitLines lines={["See Each Company", "In Its Market."]} className="display-xl" />
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Every industry above is served by a dedicated STTPS company, built specifically for it.
          </p>
          <div className="mt-10">
            <ArrowLink href="/companies">Explore the Companies</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
