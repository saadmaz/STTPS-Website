import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import type { Company } from "@/data/sttps";
import { EASE, Label, SplitLines, ArrowLink } from "./primitives";

const MOTION_LABEL: Record<Company["motion"], string> = {
  fluid: "Fluid",
  human: "Operational",
  reflective: "Reflective",
  velocity: "Velocity",
};

export function CompanySection({ company, index }: { company: Company; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.08]);
  const wordX = useTransform(
    scrollYProgress,
    [0, 1],
    company.motion === "velocity" ? ["6%", "-6%"] : ["2%", "-2%"],
  );
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]);
  const flipped = index % 2 === 1;

  return (
    <section
      ref={ref}
      id={company.id}
      className="relative overflow-hidden py-24 md:py-36"
      style={
        {
          "--brand": company.brand,
          "--brand-ink": company.brandInk,
          backgroundColor: company.surface,
          color: "var(--color-warm)",
        } as React.CSSProperties
      }
    >
      <motion.div
        aria-hidden
        style={{ opacity: reduce ? 0.2 : glow }}
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]"
      />

      <motion.div
        aria-hidden
        style={{ x: reduce ? 0 : wordX }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-display text-[26vw] font-bold uppercase leading-none tracking-[-0.06em] text-warm/[0.045]"
      >
        {company.name}
      </motion.div>

      <div className="shell relative">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <motion.div
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            whileInView={reduce ? {} : { clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="group relative aspect-[4/3] overflow-hidden"
            data-cursor="VIEW"
          >
            <picture className="block h-full w-full">
              <source
                type="image/webp"
                srcSet={company.imageSrcSet}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <motion.img
                src={company.image}
                alt={`${company.name} — ${company.category}`}
                loading="lazy"
                width={1400}
                height={1000}
                style={{ y: reduce ? 0 : imageY, scale: reduce ? 1 : imageScale }}
                className="h-full w-full object-cover"
              />
            </picture>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            {company.motion === "reflective" && (
              <motion.div
                aria-hidden
                initial={{ x: "-120%" }}
                whileInView={{ x: "120%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.5, ease: EASE }}
                className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />
            )}
            {company.motion === "fluid" && (
              <motion.div
                aria-hidden
                animate={reduce ? {} : { y: ["0%", "3%", "0%"], opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand/30 to-transparent"
              />
            )}
            {company.motion === "velocity" && (
              <motion.div
                aria-hidden
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: "100%", opacity: [0, 1, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
                className="pointer-events-none absolute inset-y-0 w-24 bg-brand/50 blur-2xl"
              />
            )}
          </motion.div>

          <div>
            <Label className="text-brand opacity-100">
              {String(index + 1).padStart(2, "0")} — {MOTION_LABEL[company.motion]}
            </Label>
            <SplitLines
              as="h3"
              lines={company.name.split(" ")}
              className="display-xl mt-6 text-warm"
            />
            <p className="label-xs mt-6 text-brand">{company.category}</p>
            <p className="mt-6 max-w-md font-display text-2xl leading-tight tracking-[-0.02em] text-warm md:text-3xl">
              {company.positioning}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-warm/60">
              {company.description}
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {company.services.map((s) => (
                <li key={s} className="label-xs text-warm/50">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ArrowLink href={`#${company.id}`} tone="brand" cursor="EXPLORE">
                {company.cta}
              </ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
