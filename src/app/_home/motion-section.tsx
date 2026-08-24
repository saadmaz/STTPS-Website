"use client";

import { motion } from "motion/react";
import { Label, Reveal, SplitLines } from "@/components/site/primitives";

export function HomeMotionSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 text-warm md:py-48">
      <motion.div
        aria-hidden
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm/10 blur-[160px]"
      />
      <div className="shell relative">
        <Label className="text-warm">Vision</Label>
        <SplitLines
          lines={["And We're", "Just Getting Started."]}
          className="display-xl mt-8 text-warm"
        />
        <Reveal delay={0.15}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-warm/60">
            STTPS is building an ecosystem of brands designed to solve everyday problems through
            better service, better systems and better experiences.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
