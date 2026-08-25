import Link from "next/link";
import { ABOUT_SECTIONS } from "@/data/sttps";
import { cn } from "@/lib/utils";

export function AboutSubNav({ current }: { current?: string }) {
  return (
    <nav aria-label="About STTPS" className="relative border-b border-steel/15 bg-warm">
      <div className="shell flex gap-8 overflow-x-auto py-5">
        {ABOUT_SECTIONS.map((s, i) => {
          const isActive = s.slug === current;
          return (
            <Link
              key={s.slug}
              href={`/about/${s.slug}`}
              className={cn(
                "label-xs flex shrink-0 items-center gap-2 whitespace-nowrap transition-colors hover:text-ink",
                isActive ? "text-ink" : "text-muted-foreground",
              )}
            >
              <span className="readout text-[11px] text-steel">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.label}
            </Link>
          );
        })}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-warm to-transparent"
      />
    </nav>
  );
}
