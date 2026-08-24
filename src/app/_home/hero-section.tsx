"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import heroImg from "@/assets/hero.jpg";
import hero640 from "@/assets/hero-640.webp";
import hero1024 from "@/assets/hero-1024.webp";
import hero1920 from "@/assets/hero-1920.webp";
import { ArrowLink, EASE, Label, SplitLines } from "@/components/site/primitives";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-warm"
    >
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute inset-0">
        <picture className="block h-full w-full">
          <source
            type="image/webp"
            srcSet={`${hero640.src} 640w, ${hero1024.src} 1024w, ${hero1920.src} 1920w`}
            sizes="100vw"
          />
          <motion.img
            src={heroImg.src}
            alt="Water, vehicles and service operations across the STTPS group of companies"
            width={1920}
            height={1200}
            initial={reduce ? false : { scale: 1.18, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.55 }}
            transition={{ duration: 2.2, delay: 0.4, ease: EASE }}
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-ink"
      >
        <span className="font-display text-2xl font-bold uppercase tracking-[0.3em]">STTPS</span>
      </motion.div>

      <motion.div
        style={{ opacity: reduce ? 1 : fade }}
        className="shell relative z-10 pb-16 pt-40 md:pb-24"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Label className="text-warm">STTPS — The Group</Label>
        </motion.div>

        <SplitLines
          as="h1"
          lines={["We Build", "What's Next."]}
          className="display-hero mt-8 text-warm"
          startDelay={1.2}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 1, ease: EASE }}
            className="max-w-xl text-base leading-relaxed text-warm/65 md:text-lg"
          >
            A group of companies building better businesses, better services and better everyday
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: EASE }}
            className="flex flex-wrap gap-3"
          >
            <ArrowLink href="/companies" tone="light">
              Explore Our Companies
            </ArrowLink>
            <ArrowLink href="/about" tone="light">
              About STTPS
            </ArrowLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
