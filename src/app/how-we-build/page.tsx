import type { Metadata } from "next";
import { MODEL_STEPS } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines } from "@/components/site/primitives";
import { ModelTimeline } from "@/components/site/model-timeline";

const TITLE = "How We Build | STTPS";
const DESCRIPTION =
  "The STTPS model: identify a real everyday need, build the brand and operating system around it, operate close to the work, then scale without diluting the standard.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/how-we-build" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/how-we-build", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/how-we-build",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

export default function HowWeBuildPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>How we build</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Identify. Build.", "Operate. Scale."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              This is how STTPS turns everyday opportunities into enduring operating companies.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell">
          <Label>The STTPS model</Label>
          <SplitLines lines={["Four Stages,", "In Order."]} className="display-xl mt-8" />
          <div className="mt-12">
            <ModelTimeline />
          </div>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell grid gap-px border border-steel/25 bg-steel/25 md:grid-cols-2">
          {MODEL_STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08} className="bg-warm p-10 md:p-14">
              <div className="readout text-3xl font-medium text-steel">{s.no}</div>
              <h2 className="display-lg mt-8">{s.title}</h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <Label>Our thesis</Label>
            <SplitLines
              lines={["Everyday Services", "Are Serious Business."]}
              className="display-xl mt-8"
            />
          </div>
          <Reveal className="flex flex-col gap-5 self-end text-lg leading-relaxed text-muted-foreground">
            <p>
              The services people depend on every day shape the quality of their homes, properties,
              vehicles and working environments. Yet many of these categories remain fragmented,
              inconsistent and difficult to trust.
            </p>
            <p>
              We combine strong brands, disciplined operations, capable people and practical
              technology to turn essential services into professional, repeatable and scalable
              businesses.
            </p>
            <p>
              We do not build businesses to simply participate in a market. We build them to raise
              the standard of the market around them.
            </p>
            <p className="text-ink">The task may be ordinary. The standard will not be.</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-steel/25 bg-charcoal py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <Label>What STTPS is</Label>
            <SplitLines
              lines={["An Operating Group", "Built Around Execution."]}
              className="display-xl mt-8"
            />
          </div>
          <Reveal className="flex flex-col gap-5 self-end text-lg leading-relaxed text-muted-foreground">
            <p>STTPS is not a passive holding company.</p>
            <p>
              We build, operate and develop companies from the inside. We work alongside our
              businesses across brand, people, operations, technology, marketing, finance and
              customer experience.
            </p>
            <p>
              Each company has its own identity, leadership and customer promise. The group provides
              the capabilities, discipline and long-term direction that allow each one to perform at
              a higher level.
            </p>
            <p className="label-xs pt-2 text-ink">
              Independent brands. Shared strength. One standard of execution.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <div>
            <Label>Next</Label>
            <SplitLines
              lines={["The Capability", "Behind the Model."]}
              className="display-xl mt-8"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <ArrowLink href="/capabilities">Group Capabilities</ArrowLink>
            <ArrowLink href="/companies/in-development" className="border-transparent">
              Companies in Development
            </ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
