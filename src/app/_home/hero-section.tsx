"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowLink, EASE, Label, SplitLines } from "@/components/site/primitives";
import { InstrumentStrip } from "@/components/site/instrument-strip";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink text-warm">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, currentColor 0, currentColor 1px, transparent 1px, transparent 96px), repeating-linear-gradient(0deg, currentColor 0, currentColor 1px, transparent 1px, transparent 96px)",
        }}
      />

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-ink"
      >
        <span className="font-display text-2xl font-bold uppercase tracking-[0.3em]">STTPS</span>
      </motion.div>

      <div className="shell relative z-10 border-y border-steel/25 py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Label className="text-warm">STTPS — The Group</Label>
            </motion.div>

            <SplitLines
              as="h1"
              trigger="mount"
              lines={["We Build", "What's Next."]}
              className="display-hero mt-8 text-warm"
              startDelay={0.6}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.9, ease: EASE }}
              className="mt-8 max-w-lg text-base leading-relaxed text-warm/65 md:text-lg"
            >
              A group of companies building better businesses, better services and better
              everyday experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9, ease: EASE }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <ArrowLink href="/companies" tone="light">
                Explore Our Companies
              </ArrowLink>
              <ArrowLink href="/about" tone="light">
                About STTPS
              </ArrowLink>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
          >
            <InstrumentStrip />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
