"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { MODEL_STEPS } from "@/data/sttps";
import { EASE } from "./primitives";

export function ModelTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <div className="relative mb-12 hidden h-px w-full bg-steel/25 md:block">
        <motion.div
          style={{ scaleX: reduce ? 1 : scaleX, transformOrigin: "left" }}
          className="absolute inset-0 bg-foreground"
        />
      </div>

      <div className="grid gap-12 md:grid-cols-4 md:gap-8">
        {MODEL_STEPS.map((s, i) => (
          <motion.div
            key={s.no}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
            className="relative border-t border-steel/30 pt-6 md:border-t-0 md:pt-0"
          >
            <div className="readout text-4xl font-medium text-steel md:text-5xl">{s.no}</div>
            <h3 className="display-lg mt-5 text-2xl md:text-3xl">{s.title}</h3>
            <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-muted-foreground">
              {s.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
