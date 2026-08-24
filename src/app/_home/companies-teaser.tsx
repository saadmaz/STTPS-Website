import Link from "next/link";
import type { CSSProperties } from "react";
import { COMPANIES } from "@/data/sttps";
import { ArrowLink, Label, SplitLines } from "@/components/site/primitives";

export function CompaniesTeaser() {
  return (
    <section id="companies" className="bg-warm py-28 md:py-40">
      <div className="shell">
        <Label>Our companies</Label>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <SplitLines lines={["The Companies", "We Build."]} className="display-xl" />
          <ArrowLink href="/companies">See All Companies</ArrowLink>
        </div>

        <div className="mt-16 grid gap-px border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANIES.map((c, i) => (
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
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="relative">
                <div className="label-xs text-brand">{String(i + 1).padStart(2, "0")}</div>
                <div className="display-lg mt-2 text-xl">{c.name}</div>
                <div className="label-xs mt-2 text-warm/50">{c.category}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
