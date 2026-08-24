"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { COMPANIES } from "@/data/sttps";
import { EASE } from "./primitives";

const NODES = [
  { x: 18, y: 20 },
  { x: 82, y: 20 },
  { x: 18, y: 80 },
  { x: 82, y: 80 },
];

export function EcosystemDiagram() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const router = useRouter();
  const current = active === null ? null : COMPANIES[active];

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {NODES.map((n, i) => (
            <g key={i}>
              <motion.line
                x1={50}
                y1={50}
                x2={n.x}
                y2={n.y}
                stroke="currentColor"
                strokeWidth={0.15}
                className={active === i ? "text-warm/60" : "text-warm/20"}
                initial={reduce ? false : { pathLength: 0 }}
                whileInView={reduce ? {} : { pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 * i, ease: EASE }}
              />
              {!reduce && (
                <motion.circle
                  r={0.55}
                  fill="currentColor"
                  className="text-warm/70"
                  animate={{ cx: [50, n.x], cy: [50, n.y] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut",
                  }}
                />
              )}
            </g>
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="font-display text-3xl font-bold uppercase tracking-[-0.05em] text-warm md:text-5xl">
            STTPS
          </div>
          <div className="label-xs mt-2 text-warm/40">The Group</div>
        </div>

        {COMPANIES.map((c, i) => {
          const n = NODES[i]!;
          return (
            <button
              key={c.id}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              onClick={() => router.push(`/companies/${c.id}`)}
              style={{ left: `${n.x}%`, top: `${n.y}%`, "--brand": c.brand } as React.CSSProperties}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-warm/15 bg-ink/60 px-4 py-3 text-center backdrop-blur-sm transition-colors duration-500 hover:border-brand md:px-6 md:py-4"
            >
              <span className="label-xs block text-warm">{c.name}</span>
              <span className="mt-1 hidden text-[10px] text-warm/40 md:block">{c.category}</span>
            </button>
          );
        })}
      </div>

      <div className="label-xs mt-8 h-5 text-center text-warm/50">
        {current
          ? current.positioning
          : "One group → multiple companies → shared systems → independent brands"}
      </div>
    </div>
  );
}
