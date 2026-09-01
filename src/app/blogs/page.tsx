import type { Metadata } from "next";
import { CONTACT, MILESTONES } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";

const TITLE = "Blogs | STTPS";
const DESCRIPTION =
  "Notes and updates from STTPS and its operating companies about building service businesses in Sri Lanka properly.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/blogs" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/blogs", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/blogs",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

// Full long-form posts land once Sanity is wired up (phase 3). Until then,
// real dated milestones (MILESTONES in @/data/sttps) render here directly —
// no CMS required to say something happened. Zero milestones falls back to
// an honest empty state rather than faking an empty feed.
export default function BlogsPage() {
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
          <Label>Blogs</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Notes From", "The Group."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {hasMilestones
                ? "Updates and milestones from STTPS and its operating companies. Longer-form posts are on the way."
                : "We're building out this space for updates from STTPS and its companies. Nothing has been published yet, so check back soon."}
            </p>
          </Reveal>
        </div>
      </section>

      {hasMilestones && (
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
      )}

      <section className="bg-charcoal py-16 md:py-24">
        <div className="shell">
          <SplitLines lines={["Want to Hear", "When We Post?"]} className="display-xl" />
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Reach out and we&apos;ll let you know once the first posts are live.
          </p>
          <div className="mt-10">
            <ArrowLink href={`mailto:${CONTACT.email}`}>{CONTACT.email}</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
