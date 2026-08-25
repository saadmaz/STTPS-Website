import type { Metadata } from "next";
import { CAREER_TRACKS, CONTACT } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines } from "@/components/site/primitives";

const TITLE = "Careers at STTPS: Build Service Companies With Us";
const DESCRIPTION =
  "Join STTPS in Sri Lanka. Roles across field teams, operations, creative, technology and leadership as we build and scale service companies.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/careers" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/careers", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/careers",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

// No live job listings feed yet — that lands once Sanity is wired up
// (careers system, phase 3). Until then this shows the department tracks
// and a direct email path rather than an empty "0 open roles" page.
export default function CareersPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>Careers</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Build With Us."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We&apos;re building companies, teams and systems from the ground up. If you care about
              doing work properly, there is room here.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell">
          <Label>Where you fit</Label>
          <div className="mt-12 border-t border-steel/25">
            {CAREER_TRACKS.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06} className="group border-b border-steel/25">
                <div className="flex flex-col gap-3 py-8 transition-colors duration-500 group-hover:bg-foreground/[0.03] md:flex-row md:items-baseline md:justify-between md:px-4">
                  <h2 className="display-lg text-3xl md:text-5xl">{t.title}</h2>
                  <p className="max-w-sm text-muted-foreground">{t.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 md:py-24">
        <div className="shell">
          <SplitLines lines={["No Open Role", "That Fits?"]} className="display-xl" />
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Send us who you are and what you&apos;re good at. We hire people before we hire titles.
          </p>
          <div className="mt-10">
            <ArrowLink href={`mailto:${CONTACT.email}`}>{CONTACT.email}</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
