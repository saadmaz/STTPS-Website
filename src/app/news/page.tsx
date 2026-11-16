import type { Metadata } from "next";
import { CONTACT, MILESTONES } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";

const TITLE = "News & Insights | STTPS";
const DESCRIPTION =
  "New launches, operating milestones, people, partnerships and category insights from STTPS and the companies it is building.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/news" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/news", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/news",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

// Full long-form posts land once Sanity is wired up (phase 3). Until then,
// real dated milestones (MILESTONES in @/data/sttps) render here directly —
// no CMS required to say something happened. Zero milestones falls back to
// an honest empty state rather than faking a feed.
export default function NewsPage() {
  const hasMilestones = MILESTONES.length > 0;
  const sorted = [...MILESTONES].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>News &amp; insights</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Building in Public,", "With Substance."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount" className="mt-10 flex flex-col gap-5">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              This is where STTPS shares the work behind the companies: new launches, operating
              milestones, people, partnerships, category insights and the decisions shaping the
              group.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              No noise. No empty announcements.{" "}
              <span className="text-ink">
                Only meaningful progress from the companies we are building.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {hasMilestones ? (
        <section className="py-16 md:py-24">
          <div className="shell flex flex-col gap-px border-t border-steel/25">
            {sorted.map((m, i) => (
              <Reveal
                key={m.date + m.title}
                delay={i * 0.06}
                className="grid gap-3 border-b border-steel/25 py-8 sm:grid-cols-[8rem_1fr] sm:gap-8"
              >
                <UnitTag detail={m.date} />
                <div>
                  <h2 className="display-md">{m.title}</h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : (
        <section className="py-16 md:py-24">
          <Reveal className="shell">
            <div className="border border-steel/25 bg-charcoal p-10 md:p-14">
              <Label>Status</Label>
              <h2 className="display-xl mt-6">Nothing Published Yet.</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                The first entries go up when there is real progress to report, not before. Reach out
                and we&apos;ll let you know when they do.
              </p>
            </div>
          </Reveal>
        </section>
      )}

      <section className="border-t border-steel/25 bg-charcoal py-16 md:py-24">
        <div className="shell">
          <SplitLines lines={["Want to Hear", "When We Post?"]} className="display-xl" />
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Reach out and we&apos;ll keep you posted on what the group is building.
          </p>
          <div className="mt-10">
            <ArrowLink href={`mailto:${CONTACT.email}`}>{CONTACT.email}</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
