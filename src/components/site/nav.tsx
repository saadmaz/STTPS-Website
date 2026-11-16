"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ABOUT_SECTIONS, COMPANIES, NAV_LINKS, SECONDARY_NAV } from "@/data/sttps";
import { EASE } from "./primitives";
import { NavDropdown } from "./nav-dropdown";
import { cn } from "@/lib/utils";

const ABOUT_ITEMS = ABOUT_SECTIONS.map((s) => ({ label: s.label, to: `/about/${s.slug}` }));

const COMPANY_ITEMS = [
  { label: "Companies in Operation", to: "/companies/in-operation" },
  { label: "Companies in Development", to: "/companies/in-development" },
  ...COMPANIES.map((c) => ({ label: c.name, to: `/companies/${c.id}` })),
];

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

          {/*
            Eight primary entries don't fit a comfortable single row until
            xl, so the condensed `short` labels are used here and everything
            below xl uses the full-screen menu instead of a cramped row.
          */}
          <nav className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.filter((l) => l.to !== "/contact").map((l) => {
              if (l.to === "/about") {
                return <NavDropdown key={l.to} label={l.short} href={l.to} items={ABOUT_ITEMS} />;
              }
              if (l.to === "/companies") {
                return <NavDropdown key={l.to} label={l.short} href={l.to} items={COMPANY_ITEMS} />;
              }
              const active = pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={cn(
                    "label-xs transition-colors hover:text-ink",
                    active ? "text-ink" : "text-muted-foreground",
                  )}
                >
                  {l.short}
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
              className="label-xs relative z-[70] text-ink xl:hidden"
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
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-warm px-6 pb-10 pt-28 xl:hidden"
          >
            <nav className="flex flex-col gap-1">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
              >
                <Link href="/" onClick={() => setOpen(false)} className="display-lg block text-ink">
                  Home
                </Link>
              </motion.div>
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.7, ease: EASE }}
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

            <div className="mt-10 border-t border-steel/25 pt-6">
              <div className="label-xs text-muted-foreground opacity-60">More</div>
              <div className="mt-4 flex flex-col gap-3">
                {SECONDARY_NAV.map((l) => (
                  <Link
                    key={l.to}
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="label-xs text-muted-foreground transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="label-xs mt-10 pt-4 text-muted-foreground">
              STTPS · The Group · Sri Lanka
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
