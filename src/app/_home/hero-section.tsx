"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { COMPANIES } from "@/data/sttps";
import { ArrowLink, EASE, Label, SplitLines, UnitTag } from "@/components/site/primitives";

export function HeroSection() {
  return (
    <section className="bg-warm text-ink">
      <div className="shell grid gap-14 pb-16 pt-32 md:pb-20 md:pt-40 lg:grid-cols-[1fr_360px] lg:gap-20">
        <div>
          <Label>STTPS — The Group</Label>

          <SplitLines
            as="h1"
            trigger="mount"
            lines={["A Group of Companies,", "Built on Discipline."]}
            className="display-hero mt-6"
            startDelay={0.6}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            We start, build, staff and operate service companies — with the same standard
            applied across every venture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9, ease: EASE }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ArrowLink href="/companies">Our Companies</ArrowLink>
            <ArrowLink href="/about" className="border-transparent">
              About STTPS
            </ArrowLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9, ease: EASE }}
          className="border border-steel/20"
        >
          <div className="border-b border-steel/20 px-6 py-4">
            <span className="label-xs text-muted-foreground">The Companies</span>
          </div>
          {COMPANIES.map((c, i) => (
            <Link
              key={c.id}
              href={`/companies/${c.id}`}
              className="group flex items-center justify-between gap-4 border-b border-steel/20 px-6 py-5 transition-colors last:border-b-0 hover:bg-ink hover:text-warm"
            >
              <div>
                <div className="text-base font-semibold">{c.name}</div>
                <div className="mt-1 text-xs text-muted-foreground group-hover:text-warm/50">
                  {c.category}
                </div>
              </div>
              <UnitTag index={i + 1} className="shrink-0 group-hover:text-warm/50" />
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="shell flex items-center justify-between border-t border-steel/15 py-5">
        <span className="label-xs text-muted-foreground">Colombo, Sri Lanka</span>
        <span className="label-xs text-muted-foreground">
          {String(COMPANIES.length).padStart(2, "0")} Operating Companies
        </span>
      </div>
    </section>
  );
}
