"use client";

import { motion, useInView, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  trigger = "view",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** "mount" for content already above the fold (e.g. a hero's lead
   *  paragraph) — see SplitLines' `trigger` doc for why. */
  trigger?: "view" | "mount";
}) {
  const reduce = useReducedMotion();
  const target = { opacity: 1, y: 0 };
  const triggerProps =
    trigger === "mount"
      ? { animate: target }
      : { whileInView: reduce ? {} : target, viewport: { once: true, margin: "0px 0px -80px 0px" } };
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...triggerProps}
    >
      {children}
    </motion.div>
  );
}

const lineVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.06 * i, ease: EASE },
  }),
};

export function SplitLines({
  lines,
  className,
  as = "h2",
  startDelay = 0,
  once = true,
  trigger = "view",
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  startDelay?: number;
  once?: boolean;
  /**
   * "view" reveals on scroll-into-view (for headings further down the
   * page). "mount" animates immediately on render — use this for a page's
   * h1, which is already above the fold and shouldn't wait on an
   * IntersectionObserver callback that may never fire for content that's
   * visible from the first frame.
   */
  trigger?: "view" | "mount";
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  const triggerProps =
    trigger === "mount"
      ? { animate: "show" }
      : { whileInView: reduce ? "" : "show", viewport: { once, margin: "0px 0px -80px 0px" } };
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={line + i} className="block overflow-hidden">
          <motion.span
            className="block"
            custom={i + startDelay * 10}
            variants={lineVariants}
            initial={reduce ? false : "hidden"}
            {...triggerProps}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("label-xs inline-flex items-center gap-2 opacity-70", className)}>
      {children}
    </span>
  );
}

export function Counter({
  value,
  className,
  duration = 1600,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const reduce = useReducedMotion();
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[\d]/g, "");
  const pad = value.replace(/\D/g, "").length;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    if (reduce) {
      // Synchronizing with the prefers-reduced-motion media query (an
      // external system), not deriving state from a prop — the effect as a
      // whole exists to run the rAF count-up loop below; this is just the
      // reduced-motion short-circuit for it.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setN(numeric);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(numeric * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, duration, reduce]);

  if (Number.isNaN(numeric)) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={cn("readout", className)}>
      {String(n).padStart(pad, "0")}
      {suffix}
    </span>
  );
}

export function ArrowLink({
  children,
  href,
  className,
  tone = "dark",
}: {
  children: ReactNode;
  href: string;
  className?: string;
  tone?: "dark" | "light" | "brand";
}) {
  return (
    <a
      href={href}
      className={cn(
        "group label-xs inline-flex items-center gap-3 border px-6 py-4 transition-colors duration-300",
        tone === "dark" && "border-steel/35 hover:bg-foreground hover:text-background",
        tone === "light" && "border-steel/40 text-warm hover:bg-warm hover:text-ink",
        tone === "brand" && "border-brand/50 text-brand hover:bg-brand hover:text-brand-ink",
        className,
      )}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

/**
 * Bare zero-padded index — the International Typographic Style numbering
 * convention (01 / 02 / 03) used to order a grid without decoration.
 */
export function UnitTag({
  index,
  detail,
  className,
}: {
  index?: number;
  detail?: string;
  className?: string;
}) {
  return (
    <span className={cn("panel-tag inline-flex items-center gap-2 text-graphite", className)}>
      {typeof index === "number" && <span>{String(index).padStart(2, "0")}</span>}
      {typeof index === "number" && detail && <span aria-hidden>·</span>}
      {detail && <span>{detail}</span>}
    </span>
  );
}
