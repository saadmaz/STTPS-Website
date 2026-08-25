import type { Metadata } from "next";
import { BOARD_OF_DIRECTORS } from "@/data/sttps";
import { Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";
import { AboutSubNav } from "@/components/site/about-sub-nav";

const TITLE = "Board of Directors — STTPS";
const DESCRIPTION = "The directors providing oversight across STTPS and its operating companies.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about/board" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/about/board", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/about/board",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function BoardOfDirectorsPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>Board of Directors</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Oversight,", "By Six Directors."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The board sets direction and holds the group accountable across every company it
              operates.
            </p>
          </Reveal>
        </div>
      </section>

      <AboutSubNav current="board" />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-3">
          {BOARD_OF_DIRECTORS.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.06} className="bg-warm p-8 md:p-10">
              <UnitTag index={i + 1} />
              <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-warm">
                <span className="font-display text-lg font-semibold tracking-[-0.02em]">
                  {initials(d.name)}
                </span>
              </div>
              <h2 className="display-lg mt-6 text-2xl md:text-3xl">{d.name}</h2>
              <p className="label-xs mt-3 text-muted-foreground">{d.role}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
