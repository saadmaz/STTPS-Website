"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import { COMPANIES, type Company } from "@/data/sttps";
import { EASE } from "./primitives";
import { cn } from "@/lib/utils";

/**
 * The site's signature element: four gauge readouts, one per company,
 * rendered in the instrument-panel language. Each gauge form is tied to the
 * company's existing `motion` field (fluid/human/reflective/velocity) —
 * illustrative instrumentation, not a claim about real business metrics.
 */
const UNIT_LABEL: Record<Company["motion"], string> = {
  fluid: "LEVEL",
  human: "STATUS",
  reflective: "GLOSS",
  velocity: "SPEED",
};

const CODE: Record<string, string> = {
  "tank-sudda": "TS",
  "team-sudda": "TM",
  "polish-station": "PS",
  stopwash: "SW",
};

export function InstrumentStrip({
  className,
  compact = false,
  linkToCompanies = true,
}: {
  className?: string;
  /** Smaller, quieter rendering — used in the footer and /companies. */
  compact?: boolean;
  linkToCompanies?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "border border-steel/30 bg-ink/60 backdrop-blur-sm",
        compact ? "divide-y divide-steel/20" : "divide-y divide-steel/25",
        className,
      )}
    >
      {!compact && (
        <div className="flex items-center justify-between px-4 py-2.5">
          <span className="panel-tag text-warm/50">Instrument Panel</span>
          <span className="flex items-center gap-1.5">
            <span
              className={cn(
                "inline-block h-1.5 w-1.5 rounded-full bg-gauge-amber",
                !reduce && "animate-pulse",
              )}
            />
            <span className="panel-tag text-warm/50">Live</span>
          </span>
        </div>
      )}

      {COMPANIES.map((c, i) => {
        const row = (
          <div
            style={{ "--brand": c.brand } as CSSProperties}
            className={cn(
              "group flex items-center gap-4 px-4 transition-colors duration-300",
              compact ? "py-2" : "py-3.5",
              linkToCompanies && "hover:bg-warm/[0.04]",
            )}
          >
            <span
              className={cn(
                "label-xs shrink-0 text-warm/40 group-hover:text-brand",
                compact ? "w-6 text-[10px]" : "w-8",
              )}
            >
              {CODE[c.id]}
            </span>

            <Gauge motion={c.motion} compact={compact} reduce={!!reduce} delay={i * 0.15} />

            {!compact && (
              <span className="label-xs ml-auto shrink-0 text-warm/35">
                {UNIT_LABEL[c.motion]}
              </span>
            )}
          </div>
        );

        return linkToCompanies ? (
          <Link key={c.id} href={`/companies/${c.id}`} className="block">
            {row}
          </Link>
        ) : (
          <div key={c.id}>{row}</div>
        );
      })}
    </div>
  );
}

function Gauge({
  motion: kind,
  compact,
  reduce,
  delay,
}: {
  motion: Company["motion"];
  compact: boolean;
  reduce: boolean;
  delay: number;
}) {
  const h = compact ? 16 : 22;
  switch (kind) {
    case "fluid":
      return <LevelGauge height={h} reduce={reduce} delay={delay} />;
    case "human":
      return <StatusGauge height={h} reduce={reduce} delay={delay} />;
    case "reflective":
      return <GlossGauge height={h} reduce={reduce} delay={delay} />;
    case "velocity":
      return <SpeedGauge height={h} reduce={reduce} delay={delay} />;
  }
}

/** Tank Sudda — a tank-level fill indicator. */
function LevelGauge({ height, reduce, delay }: { height: number; reduce: boolean; delay: number }) {
  const w = height * 1.9;
  return (
    <svg width={w} height={height} viewBox="0 0 38 20" className="shrink-0 text-brand">
      <rect x="1" y="1" width="36" height="18" rx="1" fill="none" stroke="currentColor" strokeOpacity="0.35" />
      {[1, 2, 3].map((t) => (
        <line key={t} x1="0" x2="2" y1={t * 5} y2={t * 5} stroke="currentColor" strokeOpacity="0.35" />
      ))}
      <motion.rect
        x="1"
        width="36"
        rx="1"
        fill="currentColor"
        fillOpacity="0.65"
        initial={reduce ? false : { height: 0, y: 19 }}
        animate={{ height: 13, y: 6 }}
        transition={{ duration: 1.2, delay: reduce ? 0 : delay, ease: EASE }}
      />
    </svg>
  );
}

/** Team Sudda — an operations activity monitor (equalizer-style bars). */
function StatusGauge({ height, reduce, delay }: { height: number; reduce: boolean; delay: number }) {
  const bars = [0.4, 0.85, 0.55, 0.95, 0.35];
  const w = height * 1.9;
  return (
    <svg width={w} height={height} viewBox="0 0 38 20" className="shrink-0 text-brand">
      {bars.map((v, i) => (
        <motion.rect
          key={i}
          x={2 + i * 7.4}
          width="4"
          rx="0.5"
          fill="currentColor"
          fillOpacity="0.7"
          initial={reduce ? false : { height: 0, y: 19 }}
          animate={{ height: v * 18, y: 19 - v * 18 }}
          transition={{
            duration: 0.9,
            delay: reduce ? 0 : delay + i * 0.06,
            ease: EASE,
          }}
        />
      ))}
    </svg>
  );
}

/** Polish Station — a gloss/shine meter arc. */
function GlossGauge({ height, reduce, delay }: { height: number; reduce: boolean; delay: number }) {
  const w = height * 1.9;
  return (
    <svg width={w} height={height} viewBox="0 0 38 20" className="shrink-0 text-brand">
      <path d="M3 18 A16 16 0 0 1 35 18" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
      <motion.path
        d="M3 18 A16 16 0 0 1 35 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={1}
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 0.78 }}
        transition={{ duration: 1.1, delay: reduce ? 0 : delay, ease: EASE }}
      />
      <motion.circle
        cx="19"
        cy="18"
        r="1.6"
        fill="currentColor"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : delay + 0.9, duration: 0.3 }}
      />
    </svg>
  );
}

/** STOPWASH — a speed/RPM dial. */
function SpeedGauge({ height, reduce, delay }: { height: number; reduce: boolean; delay: number }) {
  const w = height * 1.9;
  return (
    <svg width={w} height={height} viewBox="0 0 38 20" className="shrink-0 text-brand">
      <circle cx="19" cy="18" r="15" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="1.5 2.4" />
      <motion.line
        x1="19"
        y1="18"
        x2="19"
        y2="6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        style={{ transformOrigin: "19px 18px" }}
        initial={reduce ? false : { rotate: -70 }}
        animate={{ rotate: 35 }}
        transition={{ duration: 1.3, delay: reduce ? 0 : delay, ease: EASE }}
      />
      <circle cx="19" cy="18" r="1.4" fill="currentColor" />
    </svg>
  );
}
