"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "@/data/sttps";
import { EASE } from "./primitives";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-steel/15 bg-warm">
        <div className="shell flex items-center justify-between py-5">
          <Link href="/" className="flex items-baseline gap-3 text-ink">
            <span className="font-display text-xl font-semibold tracking-[-0.03em]">STTPS</span>
            <span className="label-xs hidden text-muted-foreground sm:inline">The Group</span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={cn(
                    "label-xs transition-colors hover:text-ink",
                    active ? "text-ink" : "text-muted-foreground",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="label-xs group hidden items-center gap-2 border border-steel/35 px-5 py-3 text-ink transition-colors duration-300 hover:bg-ink hover:text-warm md:inline-flex"
            >
              Talk to Us
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="label-xs relative z-[70] text-ink lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-warm px-6 pb-10 pt-28 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease: EASE }}
                >
                  <Link
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="display-lg block text-ink"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="label-xs text-muted-foreground">STTPS — The Group · Sri Lanka</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
