import type { Metadata } from "next";
import { COMPANIES } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";
import { AboutSubNav } from "@/components/site/about-sub-nav";

const TITLE = "Industries We Operate In | STTPS";
const DESCRIPTION =
  "The everyday-service industries STTPS builds for: water and property care, facilities operations, automotive detailing and vehicle care.";

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
              general one.
            </p>
          </Reveal>
        </div>
      </section>

      <AboutSubNav current="industries" />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08} className="bg-warm p-8 md:p-10">
              <UnitTag index={i + 1} />
              <h2 className="display-lg mt-10 text-2xl md:text-3xl">{c.category}</h2>
              <p className="mt-4 text-sm text-muted-foreground">{c.positioning}</p>
              <p className="label-xs mt-6 text-muted-foreground/70">{c.name}</p>
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
