import type { Metadata } from "next";
import { MODEL_STEPS, LAYERS } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines } from "@/components/site/primitives";

const TITLE = "STTPS Ventures — How We Build New Service Companies";
const DESCRIPTION =
  "STTPS builds new service ventures from scratch: identifying real problems, designing the brand and system, hiring the team and scaling what works.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ventures" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/ventures", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/ventures",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

export default function VenturesPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>Ventures</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["New Companies,", "In Progress."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The group is built to keep launching. Every new venture goes through the same four
              stages before it earns a name and a team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell grid gap-px border border-steel/25 bg-steel/25 md:grid-cols-2">
          {MODEL_STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08} className="bg-warm p-10 md:p-14">
              <div className="readout text-3xl font-medium text-steel">{s.no}</div>
              <h2 className="display-lg mt-8">{s.title}</h2>
              <p className="mt-4 max-w-sm text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell">
          <Label>Capabilities we bring</Label>
          <SplitLines lines={["A Company", "In a Box."]} className="display-xl mt-8" />
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-steel/25 pt-8">
            {LAYERS.map((l) => (
              <span
                key={l}
                className="display-lg text-2xl text-graphite transition-colors duration-300 hover:text-foreground md:text-3xl"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-warm md:py-28">
        <div className="shell">
          <SplitLines
            lines={["Got a Venture", "Worth Building?"]}
            className="display-xl text-warm"
          />
          <p className="mt-8 max-w-xl text-lg text-warm/60">
            We partner with operators and founders who want to build service businesses properly.
          </p>
          <div className="mt-10">
            <ArrowLink href="/contact" tone="light">
              Start a Conversation
            </ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
