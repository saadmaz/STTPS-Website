import type { Metadata } from "next";
import { CAREER_TRACKS, CONTACT, OPEN_POSITIONS, WHY_STTPS } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";

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
          <Label>Why STTPS</Label>
          <SplitLines lines={["Why People", "Build Here."]} className="display-xl mt-8" />
          <div className="mt-12 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2">
            {WHY_STTPS.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08} className="bg-warm p-8 md:p-10">
                <UnitTag index={i + 1} />
                <h2 className="display-lg mt-8 text-2xl md:text-3xl">{w.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{w.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell">
          <Label>Open positions</Label>
          <SplitLines lines={["Current", "Openings."]} className="display-xl mt-8" />

          {OPEN_POSITIONS.length > 0 ? (
            <div className="mt-12 border-t border-steel/25">
              {OPEN_POSITIONS.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.06} className="group border-b border-steel/25">
                  <div className="flex flex-col gap-4 py-8 transition-colors duration-500 group-hover:bg-foreground/[0.03] md:flex-row md:items-center md:justify-between md:px-4">
                    <div>
                      <h3 className="display-lg text-2xl md:text-3xl">{p.title}</h3>
                      <p className="label-xs mt-2 text-muted-foreground">
                        {p.track} · {p.location} · {p.type}
                      </p>
                    </div>
                    <ArrowLink
                      href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Application: ${p.title}`)}`}
                    >
                      Apply
                    </ArrowLink>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={0.15} className="mt-12 border border-steel/25 bg-charcoal p-10 md:p-14">
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Nothing open right now that we can point to with a straight face. Send us who you
                are and what you&apos;re good at anyway. We hire people before we hire titles, and
                the right person often creates their own opening.
              </p>
              <div className="mt-8">
                <ArrowLink href={`mailto:${CONTACT.email}`}>{CONTACT.email}</ArrowLink>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell">
          <Label>Where you fit</Label>
          <SplitLines lines={["Every Discipline", "We Need."]} className="display-xl mt-8" />
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
    </main>
  );
}
