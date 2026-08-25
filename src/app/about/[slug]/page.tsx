import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ABOUT_CUSTOM_SLUGS, ABOUT_SECTIONS, CONTACT } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines } from "@/components/site/primitives";
import { AboutSubNav } from "@/components/site/about-sub-nav";

const TEMPLATE_SECTIONS = ABOUT_SECTIONS.filter((s) => !ABOUT_CUSTOM_SLUGS.has(s.slug));

export function generateStaticParams() {
  return TEMPLATE_SECTIONS.map((s) => ({ slug: s.slug }));
}

function getSection(slug: string) {
  return TEMPLATE_SECTIONS.find((s) => s.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) return {};

  const title = `${section.label} — STTPS`;
  return {
    title,
    description: section.dek,
    alternates: { canonical: `/about/${section.slug}` },
    openGraph: {
      title,
      description: section.dek,
      url: `/about/${section.slug}`,
      type: "website",
    },
  };
}

// The board, what-we-do and industries entries have real, bespoke pages —
// every other /about section is genuinely not written yet. Rather than
// fabricate governance detail, policy text or awards that haven't been
// supplied, this states that plainly and points to a direct contact instead
// of shipping generic venture-studio boilerplate.
export default async function AboutSectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  const no = String(ABOUT_SECTIONS.findIndex((s) => s.slug === slug) + 1).padStart(2, "0");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `${section.label} — STTPS`,
    description: section.dek,
    url: `/about/${section.slug}`,
    isPartOf: { "@type": "Organization", name: "STTPS" },
  };

  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>{section.label}</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={[section.label]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {section.dek}
            </p>
          </Reveal>
        </div>
      </section>

      <AboutSubNav current={slug} />

      <section className="relative overflow-hidden border-b border-steel/25 py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[4vw] -top-[6vw] select-none font-display text-[38vw] font-bold leading-none tracking-[-0.06em] text-foreground/[0.035]"
        >
          {no}
        </div>
        <div className="shell relative max-w-xl">
          <Label>Status</Label>
          <h2 className="display-xl mt-6">In Preparation.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We&apos;re preparing verified detail for this page. It goes up once it&apos;s ready —
            nothing placeholder ships in the meantime.
          </p>
          <div className="mt-10">
            <ArrowLink href={`mailto:${CONTACT.email}`}>Ask Us Directly</ArrowLink>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="shell">
          <Label>
            {no} — {section.label}
          </Label>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Part of the STTPS corporate profile.{" "}
            <Link href="/about" className="underline underline-offset-4 hover:text-ink">
              See the full index
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
