import type { Metadata } from "next";
import { MODEL_STEPS } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines } from "@/components/site/primitives";

const TITLE = "Companies in Development | STTPS";
const DESCRIPTION =
  "How a new company enters the STTPS ecosystem: a real opportunity, a clear customer need and an operating model that can be built to a serious standard.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/companies/in-development" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/companies/in-development",
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/companies/in-development",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

/*
  No named company in development is listed here, and none should be added
  until one is real and announceable. The page states the criteria and the
  intent instead — the honest version of "coming soon".
*/
export default function CompaniesInDevelopmentPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>Companies in development</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["The Next Category Is", "Already Being Considered."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount" className="mt-10 flex flex-col gap-5">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              STTPS is continually evaluating everyday service categories where better execution can
              create meaningful value.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A company enters the STTPS ecosystem only when the opportunity is real, the customer
              need is clear and the operating model can be built to a serious standard.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <Label>What we are not doing</Label>
            <SplitLines
              lines={["No Businesses for", "the Appearance of Scale."]}
              className="display-lg mt-8"
            />
          </div>
          <Reveal className="flex flex-col gap-5 self-end text-lg leading-relaxed text-muted-foreground">
            <p>We are not interested in adding businesses for the appearance of scale.</p>
            <p className="text-ink">
              We are interested in building companies that belong in the portfolio and have the
              potential to lead their category.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell">
          <Label>The path in</Label>
          <SplitLines
            lines={["Every Company Goes", "Through the Same Stages."]}
            className="display-xl mt-8"
          />
          <div className="mt-12 grid gap-px border border-steel/25 bg-steel/25 md:grid-cols-2">
            {MODEL_STEPS.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.08} className="bg-warm p-10 md:p-14">
                <div className="readout text-3xl font-medium text-steel">{s.no}</div>
                <h2 className="display-lg mt-8">{s.title}</h2>
                <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <ArrowLink href="/how-we-build">How We Build</ArrowLink>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-warm md:py-28">
        <div className="shell">
          <SplitLines
            lines={["Have a Category", "Worth Building?"]}
            className="display-xl text-warm"
          />
          <p className="mt-8 max-w-xl text-lg text-warm/60">
            If you are an operator, founder, investor or partner with a serious opportunity in an
            everyday service category, speak with STTPS.
          </p>
          <div className="mt-10">
            <ArrowLink href="/contact" tone="light">
              Speak to STTPS About an Opportunity
            </ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
