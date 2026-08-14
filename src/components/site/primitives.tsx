import { motion, useInView, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
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
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "p";
  startDelay?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={line + i} className="block overflow-hidden">
          <motion.span
            className="block"
            custom={i + startDelay * 10}
            variants={lineVariants}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? "" : "show"}
            viewport={{ once, margin: "-10% 0px" }}
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
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[\d]/g, "");
  const pad = value.replace(/\D/g, "").length;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    if (reduce) {
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
    <span ref={ref} className={cn("tabular-nums", className)}>
      {String(n).padStart(pad, "0")}
      {suffix}
    </span>
  );
}

export function Magnetic({
  children,
  className,
  strength = 14,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.4 }}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({
          x: ((e.clientX - (r.left + r.width / 2)) / r.width) * strength,
          y: ((e.clientY - (r.top + r.height / 2)) / r.height) * strength,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      {children}
    </motion.span>
  );
}

export function ArrowLink({
  children,
  href,
  className,
  tone = "dark",
  cursor = "OPEN →",
}: {
  children: ReactNode;
  href: string;
  className?: string;
  tone?: "dark" | "light" | "brand";
  cursor?: string;
}) {
  return (
    <Magnetic>
      <a
        href={href}
        data-cursor={cursor}
        className={cn(
          "group label-xs inline-flex items-center gap-3 rounded-full border px-6 py-4 transition-colors duration-500",
          tone === "dark" && "border-foreground/20 hover:bg-foreground hover:text-background",
          tone === "light" && "border-warm/25 text-warm hover:bg-warm hover:text-ink",
          tone === "brand" && "border-brand/50 text-brand hover:bg-brand hover:text-brand-ink",
          className,
        )}
      >
        {children}
        <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
      </a>
    </Magnetic>
  );
}
