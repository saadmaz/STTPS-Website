import type { Metadata } from "next";
import { COMPANIES, PRINCIPLES, METRICS, CONTACT } from "@/data/sttps";
import { HeroSection } from "./_home/hero-section";
import { CompaniesTeaser } from "./_home/companies-teaser";
import { ModelTimeline } from "@/components/site/model-timeline";
import {
  ArrowLink,
  Counter,
  Label,
  Reveal,
  SplitLines,
  UnitTag,
} from "@/components/site/primitives";
import { HomeMotionSection } from "./_home/motion-section";

const TITLE = "STTPS — The Group Building Service Companies in Sri Lanka";
const DESCRIPTION =
  "STTPS is a Sri Lankan group of operating companies — Tank Sudda, Team Sudda, Polish Station and STOPWASH — building brands, businesses and systems for everyday services.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/", type: "website" },
};

const ORG_JSON_LD = {
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
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
      />
      <HeroSection />
      <Intro />
      <CompaniesTeaser />
      <Connects />
      <Model />
      <Metrics />
      <HomeMotionSection />
      <CareersAndContactTeaser />
      <FinalCta />
    </main>
  );
}

function Intro() {
  return (
    <section className="bg-warm py-28 md:py-40">
      <div className="shell">
        <Label>What we believe</Label>
        <SplitLines lines={["More Than a Group."]} className="display-xl mt-8 text-graphite" />
        <SplitLines lines={["An Ecosystem", "Of Businesses."]} className="display-xl" />

        <div className="mt-16 grid gap-14 border-t border-steel/25 pt-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              STTPS brings together companies focused on improving the way people care for their
              homes, vehicles, properties and everyday environments.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex items-end gap-6">
            <Counter
              value="04"
              className="text-7xl font-medium leading-none tracking-[-0.02em] md:text-8xl"
            />
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

function Connects() {
  return (
    <section className="bg-warm py-28 md:py-40">
      <div className="shell">
        <Label>What connects us</Label>
        <SplitLines
          lines={["Different Businesses.", "One Standard."]}
          className="display-xl mt-8"
        />
        <div className="mt-20 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className="group bg-warm p-8 transition-colors duration-500 hover:bg-ink hover:text-warm md:p-10"
            >
              <UnitTag index={i + 1} />
              <h3 className="display-lg mt-10 text-3xl md:text-4xl">{p.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground group-hover:text-warm/60">
                {p.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Model() {
  return (
    <section className="border-t border-steel/25 bg-warm py-28 md:py-40">
      <div className="shell">
        <Label>The STTPS model</Label>
        <SplitLines lines={["From Idea", "To Operation."]} className="display-xl mt-8" />
        <div className="mt-20">
          <ModelTimeline />
        </div>
        <div className="mt-14">
          <ArrowLink href="/about">More on how we build</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const shown = METRICS.filter((m) => m.value);
  return (
    <section className="border-t border-steel/15 bg-charcoal py-24">
      <div className="shell">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} className="border-l border-steel/25 pl-6">
              <Counter
                value={m.value as string}
                className="text-6xl font-medium leading-none tracking-[-0.02em] md:text-7xl"
              />
              <div className="label-xs mt-4 text-muted-foreground">{m.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersAndContactTeaser() {
  return (
    <section className="border-t border-steel/25 bg-warm py-20 md:py-28">
      <div className="shell grid gap-16 md:grid-cols-2">
        <div>
          <Label>Careers</Label>
          <SplitLines lines={["Build With Us."]} className="display-lg mt-6" />
          <p className="mt-4 max-w-sm text-muted-foreground">
            We&apos;re building companies, teams and systems from the ground up.
          </p>
          <div className="mt-8">
            <ArrowLink href="/careers">View Opportunities</ArrowLink>
          </div>
        </div>
        <div>
          <Label>Contact</Label>
          <SplitLines lines={["Let's Talk."]} className="display-lg mt-6" />
          <p className="mt-4 max-w-sm text-muted-foreground">
            Got an idea, a partnership or a question? We&apos;d like to hear it.
          </p>
          <div className="mt-8">
            <ArrowLink href="/contact">Start a Conversation</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 text-warm md:py-44">
      <div className="shell relative text-center">
        <SplitLines lines={["Building", "Better."]} className="display-hero text-warm" />
        <div className="label-xs mt-8 text-warm/50">STTPS — The Group</div>
        <div className="mt-12 flex justify-center">
          <ArrowLink href="/companies" tone="light">
            Explore Our Companies
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
