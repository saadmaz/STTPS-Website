import type { Metadata } from "next";
import { CONTACT } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines } from "@/components/site/primitives";

const TITLE = "Blogs — STTPS";
const DESCRIPTION =
  "Notes and updates from STTPS and its operating companies — on building service businesses in Sri Lanka properly.";

export const metadata: Metadata = {
  title: TITLE,
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

// No published posts yet — that lands once Sanity is wired up (phase 3).
// Until then this states that plainly rather than faking an empty feed.
export default function BlogsPage() {
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
              We&apos;re building out this space for updates from STTPS and its companies. Nothing
              published yet — check back soon.
            </p>
          </Reveal>
        </div>
      </section>

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
