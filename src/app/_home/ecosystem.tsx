import Link from "next/link";
import type { CSSProperties } from "react";
import { COMPANIES } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines } from "@/components/site/primitives";

/**
 * Section 06 — the ecosystem at a glance. Each card leads with the area of
 * everyday care it belongs to rather than its specific market, so the four
 * companies read as one portfolio with three focuses.
 */
export function Ecosystem() {
  return (
    <section id="companies" className="border-t border-steel/25 bg-warm py-14 md:py-20">
      <div className="shell">
        <Label>Our ecosystem</Label>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <SplitLines lines={["Four Companies.", "One Direction."]} className="display-xl" />
          <ArrowLink href="/companies">View All Companies</ArrowLink>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            STTPS companies serve different categories, but they are connected by a shared ambition:
            to make important everyday services more dependable, more professional and more
            valuable.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANIES.map((c) => (
            <Link
              key={c.id}
              href={`/companies/${c.id}`}
              style={{ "--brand": c.brand } as CSSProperties}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-ink p-6 text-warm"
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet={c.imageSrcSet}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                />
              </picture>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              <div className="relative">
                <span className="panel-tag text-brand">{c.categoryGroup}</span>
                <div className="display-lg mt-3 text-xl">{c.name}</div>
                <p className="mt-3 text-sm leading-relaxed text-warm/70">{c.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
