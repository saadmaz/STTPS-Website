import type { Metadata } from "next";
import { CSR } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";

const TITLE = "Sustainability & CSR | STTPS";
const DESCRIPTION =
  "STTPS supports communities through the Empower Foundation, investing in education, skills development, community wellbeing and empowerment.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/sustainability" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/sustainability", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/sustainability",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

export default function SustainabilityPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>Sustainability</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Beyond the", "Business."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              One real commitment, not a scattered list of good intentions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <Label>Our commitment</Label>
            <SplitLines lines={[CSR.name]} className="display-xl mt-8" />
          </div>
          <Reveal className="self-end text-lg leading-relaxed text-muted-foreground">
            <p>{CSR.statement}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell">
          <Label>Where we focus</Label>
          <SplitLines lines={["Four Pillars."]} className="display-xl mt-8" />
          <div className="mt-10 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-4">
            {CSR.pillars.map((p, i) => (
              <Reveal
                key={p}
                delay={i * 0.08}
                className="bg-warm p-8 transition-colors duration-500 hover:bg-ink hover:text-warm md:p-10"
              >
                <UnitTag index={i + 1} />
                <h2 className="display-lg mt-10 text-xl md:text-2xl">{p}</h2>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-steel/25 bg-ink py-20 text-warm md:py-28">
        <div className="shell">
          <SplitLines
            lines={["Cleaner Spaces,", "Stronger Communities."]}
            className="display-xl text-warm"
          />
          <p className="mt-8 max-w-xl text-lg text-warm/60">
            Building cleaner spaces, stronger communities and better opportunities for the future.
          </p>
          <div className="mt-10">
            <ArrowLink href="/contact" tone="light">
              Get in Touch
            </ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
