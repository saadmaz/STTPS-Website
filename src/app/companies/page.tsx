import type { Metadata } from "next";
import Link from "next/link";
import { COMPANIES, COMPANIES_BY_CATEGORY } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const TITLE = "Our Companies: Tank Sudda, Team Sudda, STOPWASH, Polish Station";
const DESCRIPTION =
  "The operating companies of STTPS across water and hygiene, property and operations, and vehicle care. Each with its own identity, leadership and service promise.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/companies" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/companies", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/companies",
  isPartOf: { "@type": "Organization", name: "STTPS" },
  hasPart: COMPANIES.map((c) => ({
    "@type": "Organization",
    name: c.name,
    description: c.category,
  })),
};

export default function CompaniesPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-12 pt-32 md:pb-14 md:pt-40">
        <div className="shell">
          <Label>Our companies</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Our Ecosystem,", "Company by Company."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount" className="mt-10 flex flex-col gap-5">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              STTPS builds focused companies around clear customer needs.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Every company has its own identity, leadership and service promise. Every company
              benefits from the same group commitment to standards, capability and long-term growth.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <ArrowLink href="/companies/in-operation">Companies in Operation</ArrowLink>
            <ArrowLink href="/companies/in-development" className="border-transparent">
              Companies in Development
            </ArrowLink>
          </div>
        </div>
      </section>

      {/*
        Grouped by area of everyday care, with equal-sized panels and equal
        copy length inside each group — no company (STOPWASH included,
        despite being the most consumer-recognizable) gets a larger or more
        prominent treatment than the others.
      */}
      <section className="py-14 md:py-20">
        <div className="shell flex flex-col gap-16">
          {COMPANIES_BY_CATEGORY.map(({ group, companies }, gi) => (
            <div key={group}>
              <div className="flex items-baseline justify-between gap-6 border-b border-steel/25 pb-5">
                <h2 className="display-lg text-2xl md:text-3xl">{group}</h2>
                <span className="readout text-sm text-steel">
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              {/* Column count follows the group size — a two-column grid
                  holding one company would render an empty half-panel. */}
              <div
                className={cn(
                  "mt-px grid gap-px bg-steel/25",
                  companies.length > 1 && "sm:grid-cols-2",
                )}
              >
                {companies.map((c, i) => (
                  <Link
                    key={c.id}
                    href={`/companies/${c.id}`}
                    className="group bg-warm p-8 transition-colors duration-500 hover:bg-ink hover:text-warm md:p-10"
                  >
                    <UnitTag index={i + 1} detail={c.category} />
                    <h3 className="display-lg mt-8 text-2xl md:text-3xl">{c.name}</h3>
                    <p className="mt-4 max-w-md leading-relaxed text-muted-foreground group-hover:text-warm/60">
                      {c.description}
                    </p>
                    <p className="label-xs mt-8 text-muted-foreground/70 group-hover:text-warm/40">
                      Explore →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <Label>Portfolio philosophy</Label>
            <SplitLines
              lines={["Independent Brands.", "Shared Strength."]}
              className="display-xl mt-8"
            />
          </div>
          <Reveal className="flex flex-col gap-5 self-end text-lg leading-relaxed text-muted-foreground">
            <p>
              The STTPS model is designed to preserve what makes each company valuable while giving
              it access to group-level capability.
            </p>
            <p>A company should keep its DNA, its customer understanding and its market focus.</p>
            <p>
              The group should make it stronger through better people, better systems, better
              decisions and better access to growth.
            </p>
            <div className="pt-2">
              <ArrowLink href="/capabilities">Group Capabilities</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 text-warm md:py-28">
        <div className="shell">
          <SplitLines
            lines={["Got a Company", "Worth Building?"]}
            className="display-xl text-warm"
          />
          <p className="mt-8 max-w-xl text-lg text-warm/60">
            We partner with operators and founders who want to build service businesses properly.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ArrowLink href="/contact" tone="light">
              Start a Conversation
            </ArrowLink>
            <ArrowLink href="/how-we-build" tone="light" className="border-transparent">
              How We Build
            </ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
