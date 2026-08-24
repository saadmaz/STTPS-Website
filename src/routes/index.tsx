import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { lazy, Suspense, useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import {
  COMPANIES,
  PRINCIPLES,
  METRICS,
  LAYERS,
  CAREER_TRACKS,
  CONTACT,
} from "@/data/sttps";
import { ArrowLink, Counter, EASE, Label, Reveal, SplitLines } from "@/components/site/primitives";
import { CompanySection } from "@/components/site/company-section";
import { ModelTimeline } from "@/components/site/model-timeline";
import { ContactForm } from "@/components/site/contact-form";

const EcosystemDiagram = lazy(() =>
  import("@/components/site/ecosystem").then((m) => ({ default: m.EcosystemDiagram })),
);

const TITLE = "STTPS — The Group Building Service Companies in Sri Lanka";
const DESCRIPTION =
  "STTPS is a Sri Lankan group of operating companies — Tank Sudda, Team Sudda, Polish Station and STOPWASH — building brands, businesses and systems for everyday services.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "STTPS",
          description: DESCRIPTION,
          address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
          email: CONTACT.email,
          subOrganization: COMPANIES.map((c) => ({
            "@type": "Organization",
            name: c.name,
            description: c.category,
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <CompaniesShowcase />
      <Connects />
      <Model />
      <Ecosystem />
      <Metrics />
      <Approach />
      <Future />
      <Careers />
      <Contact />
      <FinalCta />
    </main>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-warm">
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute inset-0">
        <motion.img
          src={heroImg}
          alt="Water, vehicles and service operations across the STTPS group of companies"
          width={1920}
          height={1200}
          initial={reduce ? false : { scale: 1.18, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 2.2, delay: 0.4, ease: EASE }}
          className="h-full w-full object-cover"
        />
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

      <motion.div style={{ opacity: reduce ? 1 : fade }} className="shell relative z-10 pb-16 pt-40 md:pb-24">
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
            <ArrowLink href="#companies" tone="light" cursor="EXPLORE">
              Explore Our Companies
            </ArrowLink>
            <ArrowLink href="#about" tone="light">
              About STTPS
            </ArrowLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Intro() {
  return (
    <section id="about" className="bg-warm py-28 md:py-40">
      <div className="shell">
        <Label>What we believe</Label>
        <SplitLines lines={["More Than a Group."]} className="display-xl mt-8 text-graphite" />
        <SplitLines lines={["An Ecosystem", "Of Businesses."]} className="display-xl" />

        <div className="mt-16 grid gap-14 border-t border-foreground/10 pt-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              STTPS brings together companies focused on improving the way people care for their
              homes, vehicles, properties and everyday environments.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex items-end gap-6">
            <Counter value="04" className="font-display text-8xl font-bold leading-none tracking-[-0.06em] md:text-9xl" />
            <span className="label-xs pb-3 text-muted-foreground">
              Operating
              <br />
              Companies
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CompaniesShowcase() {
  return (
    <section id="companies">
      <div className="bg-warm pb-20 md:pb-28">
        <div className="shell">
          <Label>Our companies</Label>
          <SplitLines lines={["The Companies", "We Build."]} className="display-xl mt-8" />
        </div>
      </div>
      {COMPANIES.map((c, i) => (
        <CompanySection key={c.id} company={c} index={i} />
      ))}
    </section>
  );
}

function Connects() {
  return (
    <section className="bg-warm py-28 md:py-40">
      <div className="shell">
        <Label>What connects us</Label>
        <SplitLines lines={["Different Businesses.", "One Standard."]} className="display-xl mt-8" />
        <div className="mt-20 grid gap-px border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="group bg-warm p-8 transition-colors duration-500 hover:bg-ink hover:text-warm md:p-10">
              <div className="label-xs opacity-40">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="display-lg mt-10 text-3xl md:text-4xl">{p.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground group-hover:text-warm/60">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Model() {
  return (
    <section className="border-t border-foreground/10 bg-warm py-28 md:py-40">
      <div className="shell">
        <Label>The STTPS model</Label>
        <SplitLines lines={["From Idea", "To Operation."]} className="display-xl mt-8" />
        <div className="mt-20">
          <ModelTimeline />
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="bg-ink py-28 text-warm md:py-40">
      <div className="shell">
        <Label className="text-warm">The ecosystem</Label>
        <SplitLines lines={["One Group.", "Many Worlds."]} className="display-xl mt-8 text-warm" />
        <div className="mt-16">
          <Suspense fallback={null}>
            <EcosystemDiagram />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const shown = METRICS.filter((m) => m.value);
  return (
    <section className="bg-charcoal py-24 text-warm">
      <div className="shell grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08}>
            <Counter
              value={m.value as string}
              className="font-display text-7xl font-bold leading-none tracking-[-0.06em] md:text-8xl"
            />
            <div className="label-xs mt-4 text-warm/50">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-warm py-28 md:py-40">
      <div className="shell grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <Label>Our approach</Label>
          <SplitLines lines={["We Don't Just", "Start Companies."]} className="display-xl mt-8" />
          <p className="mt-8 max-w-md font-display text-2xl leading-tight tracking-[-0.02em] md:text-3xl">
            We build businesses designed to operate.
          </p>
        </div>
        <div className="relative">
          {LAYERS.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 40, rotate: i % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.09, ease: EASE }}
              className="-mt-px flex items-center justify-between border border-foreground/15 bg-card px-6 py-6 transition-transform duration-500 hover:translate-x-2"
            >
              <span className="display-lg text-xl md:text-2xl">{l}</span>
              <span className="label-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Future() {
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

function Careers() {
  return (
    <section className="bg-warm py-28 md:py-40">
      <div className="shell">
        <Label>Careers</Label>
        <SplitLines lines={["Build With Us."]} className="display-xl mt-8" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-xl text-lg text-muted-foreground">
            We're building companies, teams and systems from the ground up.
          </p>
          <ArrowLink href="/careers">View Opportunities</ArrowLink>

        </div>
        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-foreground/10 pt-8">
          {CAREER_TRACKS.map((t) => (
            <div key={t.title} className="display-lg text-2xl text-graphite transition-colors duration-300 hover:text-foreground md:text-3xl">
              {t.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-foreground/10 bg-warm py-28 md:py-40">
      <div className="shell">
        <Label>Contact</Label>
        <SplitLines lines={["Have an Idea?", "Let's Talk."]} className="display-xl mt-8" />
        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6 text-sm">
            <ContactDetail label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <ContactDetail
              label="Phone"
              value={CONTACT.phone}
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            />
            <ContactDetail label="Location" value={CONTACT.location} />
            <div>
              <div className="label-xs text-muted-foreground">Social</div>
              <div className="mt-2 flex gap-5">
                {CONTACT.socials.map((s) => (
                  <a key={s.label} href={s.href} className="underline-offset-4 hover:underline">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactDetail({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <div className="label-xs text-muted-foreground">{label}</div>
      {href ? (
        <a href={href} className="mt-2 block text-lg underline-offset-4 hover:underline">
          {value}
        </a>
      ) : (
        <div className="mt-2 text-lg">{value}</div>
      )}
    </div>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 text-warm md:py-44">
      <motion.div
        aria-hidden
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(110deg, transparent 20%, oklch(0.4 0.02 250 / 0.8) 50%, transparent 80%)",
          backgroundSize: "200% 100%",
        }}
      />
      <div className="shell relative text-center">
        <SplitLines lines={["Building", "Better."]} className="display-hero text-warm" />
        <div className="label-xs mt-8 text-warm/50">STTPS — The Group</div>
        <div className="mt-12 flex justify-center">
          <ArrowLink href="#companies" tone="light" cursor="EXPLORE">
            Explore Our Companies
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
