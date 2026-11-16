import type { Metadata } from "next";
import Link from "next/link";
import { ABOUT_SECTIONS, LAYERS, STORY_TIMELINE } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";
import { LayerStack } from "@/components/site/layer-stack";

const TITLE = "About STTPS: The Operating Group Behind Better Everyday Services";
const DESCRIPTION =
  "STTPS builds and operates focused service companies across Sri Lanka, working side by side with each one on brand, people, operations, technology and growth.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/about", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/about",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

export default function AboutPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>About STTPS</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["The Operating Group Behind", "Better Everyday Services."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount" className="mt-10 flex flex-col gap-5">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              STTPS builds and operates focused service companies across Sri Lanka.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We work in categories that matter to everyday life and build the brands, systems and
              teams required to make those categories perform better.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <Label>Our position</Label>
            <SplitLines
              lines={["We Are an Operating Partner,", "Not a Passive Owner."]}
              className="display-lg mt-8"
            />
          </div>
          <Reveal className="flex flex-col gap-5 self-end text-lg leading-relaxed text-muted-foreground">
            <p>STTPS works side by side with its companies.</p>
            <p>
              We support the functions that create strength across the ecosystem while preserving
              the identity, market focus and entrepreneurial energy of each operating company.
            </p>
            <p className="text-ink">
              Our companies are independent in character and connected in capability.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell">
          <Label>Our story</Label>
          <SplitLines lines={["How the Group", "Took Shape."]} className="display-xl mt-8" />
          <div className="mt-12 border-t border-steel/25">
            {STORY_TIMELINE.map((m, i) => (
              <Reveal
                key={m.period}
                delay={i * 0.06}
                className="grid gap-2 border-b border-steel/25 py-7 sm:grid-cols-[12rem_1fr] sm:gap-8"
              >
                <div className="label-xs text-muted-foreground">{m.period}</div>
                <h2 className="display-md">{m.title}</h2>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <ArrowLink href="/about/heritage">Our Heritage in Full</ArrowLink>
          </div>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Label>What we bring</Label>
            <SplitLines lines={["Capability", "Across the Group."]} className="display-xl mt-8" />
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              The group strengthens each company through better people, better systems, better
              decisions and better access to growth.
            </p>
            <div className="mt-10">
              <ArrowLink href="/capabilities">Group Capabilities</ArrowLink>
            </div>
          </div>
          <LayerStack layers={LAYERS} />
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell">
          <Label>Corporate profile</Label>
          <SplitLines
            lines={["The Formal Detail", "Behind the Group."]}
            className="display-xl mt-8"
          />
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              How STTPS is structured, who runs it and the standards it works to.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_SECTIONS.map((s, i) => (
              <Link
                key={s.slug}
                href={`/about/${s.slug}`}
                className="group bg-warm p-8 transition-colors duration-500 hover:bg-ink hover:text-warm"
              >
                <UnitTag index={i + 1} className="opacity-70 group-hover:opacity-100" />
                <h3 className="display-lg mt-10 text-xl md:text-2xl">{s.label}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-warm/60">
                  {s.dek}
                </p>
                <p className="label-xs mt-6 text-muted-foreground/70 group-hover:text-warm/40">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ArrowLink href="/governance">Our Governance</ArrowLink>
            <ArrowLink href="/how-we-build">How We Build</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
