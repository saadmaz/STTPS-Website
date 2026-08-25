import type { Metadata } from "next";
import Link from "next/link";
import { COMPANIES } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines } from "@/components/site/primitives";
import { AboutSubNav } from "@/components/site/about-sub-nav";

const TITLE = "What We Do | STTPS";
const DESCRIPTION =
  "STTPS builds, brands and operates service companies: water tank care, service operations, automotive detailing and everyday car wash.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about/what-we-do" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about/what-we-do",
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/about/what-we-do",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

export default function WhatWeDoPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>What we do</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Four Companies.", "One Standard."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Each STTPS company serves a different everyday need, built and run to the same
              operating discipline.
            </p>
          </Reveal>
        </div>
      </section>

      <AboutSubNav current="what-we-do" />

      <section className="py-16 md:py-24">
        <div className="shell">
          <div className="border-t border-steel/25">
            {COMPANIES.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.06} className="group border-b border-steel/25">
                <Link
                  href={`/companies/${c.id}`}
                  className="flex flex-col gap-3 py-8 transition-colors duration-500 group-hover:bg-foreground/[0.03] md:flex-row md:items-baseline md:justify-between md:px-4"
                >
                  <div>
                    <h2 className="display-lg text-3xl md:text-5xl">{c.name}</h2>
                    <p className="label-xs mt-2 text-muted-foreground">{c.category}</p>
                  </div>
                  <p className="max-w-sm text-muted-foreground">{c.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <ArrowLink href="/companies">See All Companies</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
