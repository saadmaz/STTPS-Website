"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ABOUT_SECTIONS } from "@/data/sttps";
import { cn } from "@/lib/utils";

export function AboutHeaderDropdown() {
  const pathname = usePathname();
  const active = pathname === "/about" || pathname.startsWith("/about/");

  return (
    <div className="group relative">
      <Link
        href="/about"
        className={cn(
          "label-xs inline-flex items-center gap-1.5 transition-colors hover:text-ink",
          active ? "text-ink" : "text-muted-foreground",
        )}
      >
        About
        <span
          aria-hidden
          className="translate-y-px text-[9px] opacity-60 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
        >
          ▾
        </span>
      </Link>

      <div className="invisible absolute left-1/2 top-full z-10 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="border border-steel/20 bg-warm shadow-[0_24px_48px_-24px_rgba(0,0,0,0.3)]">
          {ABOUT_SECTIONS.map((s, i) => (
            <Link
              key={s.slug}
              href={`/about/${s.slug}`}
              className="group/item flex items-center gap-3 border-b border-steel/10 px-5 py-3 transition-colors duration-300 last:border-b-0 hover:bg-foreground hover:text-background"
            >
              <span className="readout text-[11px] text-steel group-hover/item:text-background/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="label-xs">{s.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
