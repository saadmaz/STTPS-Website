"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { NAV_LINKS } from "@/data/sttps";
import { EASE, Magnetic } from "./primitives";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-warm/10 bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <div className="shell flex items-center justify-between py-5">
          <Link href="/" className="flex items-baseline gap-3 text-warm">
            <span className="font-display text-xl font-bold tracking-[-0.06em] uppercase">
              STTPS
            </span>
            <span className="label-xs hidden opacity-50 sm:inline">The Group</span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={cn(
                    "label-xs transition-colors hover:text-warm",
                    active ? "text-warm" : "text-warm/60",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Magnetic className="hidden md:inline-block">
              <Link
                href="/contact"
                className="label-xs group inline-flex items-center gap-2 rounded-full border border-warm/25 px-5 py-3 text-warm transition-colors duration-500 hover:bg-warm hover:text-ink"
              >
                Talk to Us
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Magnetic>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="label-xs relative z-[70] text-warm lg:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-ink px-6 pb-10 pt-28 lg:hidden"
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
                    className="display-lg block text-warm"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="label-xs text-warm/50">STTPS — The Group · Sri Lanka</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
