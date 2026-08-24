import { createFileRoute } from "@tanstack/react-router";
import { CAREER_TRACKS, CONTACT } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines } from "@/components/site/primitives";

const TITLE = "Careers at STTPS — Build Companies With Us";
const DESCRIPTION =
  "Join STTPS in Sri Lanka. Roles across field teams, operations, creative, technology and leadership as we build and scale service companies.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <main className="bg-warm">
      <section className="bg-ink pb-24 pt-40 text-warm md:pb-32 md:pt-52">
        <div className="shell">
          <Label className="text-warm">Careers</Label>
          <SplitLines as="h1" lines={["Build With Us."]} className="display-hero mt-8 text-warm" />
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-warm/60">
              We're building companies, teams and systems from the ground up. If you care about
              doing work properly, there is room here.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="shell">
          <Label>Where you fit</Label>
          <div className="mt-12 border-t border-foreground/10">
            {CAREER_TRACKS.map((t, i) => (
              <Reveal
                key={t.title}
                delay={i * 0.06}
                className="group border-b border-foreground/10"
              >
                <div className="flex flex-col gap-3 py-8 transition-colors duration-500 group-hover:bg-foreground/[0.03] md:flex-row md:items-baseline md:justify-between md:px-4">
                  <h2 className="display-lg text-3xl md:text-5xl">{t.title}</h2>
                  <p className="max-w-sm text-muted-foreground">{t.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-warm md:py-36">
        <div className="shell">
          <SplitLines lines={["No Open Role", "That Fits?"]} className="display-xl text-warm" />
          <p className="mt-8 max-w-xl text-lg text-warm/60">
            Send us who you are and what you're good at. We hire people before we hire titles.
          </p>
          <div className="mt-10">
            <ArrowLink href={`mailto:${CONTACT.email}`} tone="light" cursor="EMAIL">
              {CONTACT.email}
            </ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
