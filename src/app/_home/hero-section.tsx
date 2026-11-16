"use client";

import { motion } from "motion/react";
import { COMPANIES } from "@/data/sttps";
import { ArrowLink, EASE, Label, SplitLines } from "@/components/site/primitives";

export function HeroSection() {
  return (
    <section className="flex flex-col bg-warm text-ink">
      <div className="shell py-24 md:py-32">
        <Label>STTPS · The Group</Label>

        <SplitLines
          as="h1"
          trigger="mount"
          lines={["We Build the Companies", "That Raise the Standard", "of Everyday Life."]}
          className="display-hero mt-8"
          startDelay={0.6}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
            className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-muted-foreground"
          >
            <p className="text-ink">
              STTPS is an operating group building category-defining service companies across Sri
              Lanka.
            </p>
            <p>
              We identify important everyday needs, build disciplined businesses around them and
              create the systems, teams and standards required to lead their markets.
            </p>
            <p>
              From water-tank care to property services. From vehicle washing to automotive
              detailing. We are redefining how essential services are delivered, experienced and
              trusted.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9, ease: EASE }}
            className="flex flex-wrap gap-3"
          >
            <ArrowLink href="/about">Discover STTPS</ArrowLink>
            <ArrowLink href="/companies" className="border-transparent">
              Explore Our Companies
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
