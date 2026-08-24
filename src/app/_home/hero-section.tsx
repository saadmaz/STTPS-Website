"use client";

import { motion } from "motion/react";
import { COMPANIES } from "@/data/sttps";
import { ArrowLink, EASE, Label, SplitLines } from "@/components/site/primitives";

export function HeroSection() {
  return (
    <section className="flex flex-col bg-warm text-ink">
      <div className="shell py-24 md:py-32">
        <Label>STTPS — The Group</Label>

        <SplitLines
          as="h1"
          trigger="mount"
          lines={["A Group of Companies,", "Built on Discipline."]}
          className="display-hero mt-8"
          startDelay={0.6}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            We start, build, staff and operate service companies — with the same standard
            applied across every venture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9, ease: EASE }}
            className="flex flex-wrap gap-3"
          >
            <ArrowLink href="/companies">Our Companies</ArrowLink>
            <ArrowLink href="/about" className="border-transparent">
              About STTPS
            </ArrowLink>
          </motion.div>
        </div>
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
