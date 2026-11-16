import type { Metadata } from "next";
import Link from "next/link";
import { CAREER_TRACKS, COMPANIES, CONTACT, GROUP_CAPABILITIES, METRICS } from "@/data/sttps";
import { HeroSection } from "./_home/hero-section";
import { Ecosystem } from "./_home/ecosystem";
import { Portfolio } from "./_home/portfolio";
import { Beliefs } from "./_home/beliefs";
import { ModelTimeline } from "@/components/site/model-timeline";
import {
  ArrowLink,
  Counter,
  Label,
  Reveal,
  SplitLines,
  UnitTag,
} from "@/components/site/primitives";

const TITLE = "STTPS: The Operating Group Building Sri Lanka's Service Companies";
const DESCRIPTION =
  "STTPS is an operating group building category-defining service companies across Sri Lanka: Tank Sudda, Team Sudda, STOPWASH and Polish Station.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
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
      <Thesis />
      <WhatWeAre />
      <Model />
      <Glance />
      <Ecosystem />
      <Portfolio />
      <Strength />
      <Beliefs />
      <Community />
      <Story />
      <OperatingAndNext />
      <GroupTeasers />
      <Partnership />
    </main>
  );
}

/** 02 — the group thesis. */
function Thesis() {
  return (
    <section className="bg-warm py-14 md:py-20">
      <div className="shell">
        <Label>Our thesis</Label>
        <SplitLines
          lines={["Everyday Services", "Are Serious Business."]}
          className="display-xl mt-8"
        />

        <div className="mt-10 grid gap-14 border-t border-steel/25 pt-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              The services people depend on every day shape the quality of their homes, properties,
              vehicles and working environments. Yet many of these categories remain fragmented,
              inconsistent and difficult to trust.
            </p>
            <p className="text-ink">STTPS is building the companies that change that.</p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              We combine strong brands, disciplined operations, capable people and practical
              technology to turn essential services into professional, repeatable and scalable
              businesses.
            </p>
            <p>
              We do not build businesses to simply participate in a market. We build them to raise
              the standard of the market around them.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="display-lg mt-14 max-w-3xl text-graphite">
            The task may be ordinary.{" "}
            <span className="text-foreground">The standard will not be.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** 03 — what STTPS is. */
function WhatWeAre() {
  return (
    <section className="border-t border-steel/25 bg-warm py-14 md:py-20">
      <div className="shell grid gap-16 lg:grid-cols-2">
        <div>
          <Label>What STTPS is</Label>
          <SplitLines
            lines={["An Operating Group", "Built Around Execution."]}
            className="display-xl mt-8"
          />
        </div>
        <Reveal className="flex flex-col gap-5 self-end text-lg leading-relaxed text-muted-foreground">
          <p>STTPS is not a passive holding company.</p>
          <p>
            We build, operate and develop companies from the inside. We work alongside our
            businesses across brand, people, operations, technology, marketing, finance and customer
            experience.
          </p>
          <p>
            Each company has its own identity, leadership and customer promise. The group provides
            the capabilities, discipline and long-term direction that allow each one to perform at a
            higher level.
          </p>
          <p className="label-xs pt-2 text-ink">
            Independent brands. Shared strength. One standard of execution.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** 04 — the STTPS model. */
function Model() {
  return (
    <section className="border-t border-steel/25 bg-warm py-14 md:py-20">
      <div className="shell">
        <Label>The STTPS model</Label>
        <SplitLines lines={["Identify. Build.", "Operate. Scale."]} className="display-xl mt-8" />
        <div className="mt-12">
          <ModelTimeline />
        </div>
        <Reveal delay={0.15}>
          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            This is how STTPS turns everyday opportunities into enduring operating companies.
          </p>
        </Reveal>
        <div className="mt-10">
          <ArrowLink href="/how-we-build">How We Build</ArrowLink>
        </div>
      </div>
    </section>
  );
}

/** 05 — group at a glance. */
function Glance() {
  const shown = METRICS.filter((m) => m.value);
  return (
    <section className="border-t border-steel/15 bg-charcoal py-16 md:py-20">
      <div className="shell">
        <Label>Group at a glance</Label>
        <SplitLines
          lines={["A Portfolio Being", "Built With Intent."]}
          className="display-xl mt-8"
        />
        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
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

/** 08 — how the group creates strength. */
function Strength() {
  return (
    <section className="border-t border-steel/25 bg-warm py-14 md:py-20">
      <div className="shell">
        <Label>How the group creates strength</Label>
        <SplitLines
          lines={["The Whole Is Stronger", "Than the Parts."]}
          className="display-xl mt-8"
        />
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            STTPS creates value across the ecosystem by connecting capabilities that individual
            service companies cannot always build alone.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-3">
          {GROUP_CAPABILITIES.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.06}
              className="group bg-warm p-8 transition-colors duration-500 hover:bg-ink hover:text-warm md:p-10"
            >
              <UnitTag index={i + 1} />
              <h3 className="display-lg mt-10 text-2xl md:text-3xl">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-warm/60">
                {c.copy}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-md text-muted-foreground">
            Each company keeps its identity. The group strengthens its ability to perform.
          </p>
          <ArrowLink href="/capabilities">Group Capabilities</ArrowLink>
        </div>
      </div>
    </section>
  );
}

/** 10 — sustainability and community. */
function Community() {
  return (
    <section className="border-t border-steel/25 bg-warm py-14 md:py-20">
      <div className="shell grid gap-16 lg:grid-cols-2">
        <div>
          <Label>Sustainability &amp; community</Label>
          <SplitLines
            lines={["Building Stronger Businesses.", "Creating Stronger Communities."]}
            className="display-lg mt-8"
          />
          <div className="mt-10">
            <ArrowLink href="/sustainability">Our Sustainability Commitment</ArrowLink>
          </div>
        </div>
        <Reveal className="flex flex-col gap-5 self-center text-lg leading-relaxed text-muted-foreground">
          <p>
            Through the Empower Foundation, STTPS supports education, skills development, community
            wellbeing and empowerment.
          </p>
          <p>
            Our operating companies work in the real world, alongside real people and within the
            communities they serve. We believe that creates a responsibility to contribute beyond
            the transaction.
          </p>
          <p>
            As STTPS grows, our ambition is to invest more time, more resources and more opportunity
            into the communities around us.
          </p>
          <p className="label-xs pt-2 text-ink">
            Cleaner spaces. Stronger people. Better opportunities.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** 11 — our story. */
function Story() {
  return (
    <section className="border-t border-steel/25 bg-warm py-14 md:py-20">
      <div className="shell grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Label>Our story</Label>
          <SplitLines
            lines={["Built From an Observation", "About Everyday Life."]}
            className="display-lg mt-8"
          />
        </div>
        <Reveal className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Some of the most important services in everyday life are also the most overlooked. The
            water stored above our homes. The spaces where people live and work. The vehicles they
            depend on. The essential work of cleaning, maintaining and caring for these things.
          </p>
          <p>
            Too often, the experience is fragmented, inconsistent and difficult to trust. STTPS was
            created to build a better answer.
          </p>
          <p>
            The first company, Tank Sudda, began taking shape in 2023 and launched properly in May
            2024. From that starting point, the group began building a broader portfolio across
            water hygiene, property operations and vehicle care.
          </p>
          <p className="text-ink">
            Find important everyday work. Build it properly. Raise the standard.
          </p>
          <div className="pt-2">
            <ArrowLink href="/about">About STTPS</ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 12 + 13 — operating today, and the next category. */
function OperatingAndNext() {
  return (
    <section className="border-t border-steel/25 bg-charcoal py-14 md:py-20">
      <div className="shell grid gap-px border border-steel/25 bg-steel/25 lg:grid-cols-2">
        <div className="bg-warm p-8 md:p-12">
          <Label>Companies in operation</Label>
          <h2 className="display-lg mt-8 text-3xl md:text-4xl">
            Operating Today. Built for Tomorrow.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            STTPS is building each company in the real world, with real customers, real teams and
            real accountability. Each is at a different point in its development, and each is being
            built with a clear category role and a long-term operating ambition.
          </p>
          <ul className="mt-8 border-t border-steel/25">
            {COMPANIES.map((c) => (
              <li key={c.id} className="border-b border-steel/20">
                <Link
                  href={`/companies/${c.id}`}
                  className="flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-graphite"
                >
                  <span className="font-display text-lg tracking-[-0.02em]">{c.name}</span>
                  <span className="panel-tag text-muted-foreground">{c.categoryGroup}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ArrowLink href="/companies/in-operation">Explore the Operating Companies</ArrowLink>
          </div>
        </div>

        <div className="bg-warm p-8 md:p-12">
          <Label>Companies in development</Label>
          <h2 className="display-lg mt-8 text-3xl md:text-4xl">
            The Next Category Is Already Being Considered.
          </h2>
          <div className="mt-5 flex max-w-md flex-col gap-5 leading-relaxed text-muted-foreground">
            <p>
              STTPS is continually evaluating everyday service categories where better execution can
              create meaningful value.
            </p>
            <p>
              A company enters the STTPS ecosystem only when the opportunity is real, the customer
              need is clear and the operating model can be built to a serious standard.
            </p>
            <p>
              We are not interested in adding businesses for the appearance of scale. We are
              interested in building companies that belong in the portfolio and have the potential
              to lead their category.
            </p>
          </div>
          <div className="mt-8">
            <ArrowLink href="/companies/in-development">
              Speak to STTPS About an Opportunity
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 14 + 15 + 16 — careers, governance and news. */
function GroupTeasers() {
  return (
    <section className="border-t border-steel/25 bg-warm py-14 md:py-20">
      <div className="shell grid gap-px border border-steel/25 bg-steel/25 lg:grid-cols-3">
        <div className="bg-warm p-8 md:p-10">
          <Label>Careers</Label>
          <h2 className="display-lg mt-8 text-2xl md:text-3xl">
            Build the Companies That People Depend On.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            STTPS is for people who want responsibility, standards and the opportunity to build
            something that lasts. Our businesses are operational. The work is visible. The
            expectations are clear.
          </p>
          <ul className="mt-6 flex flex-col gap-2">
            {CAREER_TRACKS.map((t) => (
              <li key={t.title} className="text-sm text-muted-foreground">
                — {t.copy}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink">
            There is no room here for passive participation. There is significant room for people
            who want to build, lead and improve.
          </p>
          <div className="mt-8">
            <ArrowLink href="/careers">Explore Careers</ArrowLink>
          </div>
        </div>

        <div className="bg-warm p-8 md:p-10">
          <Label>Governance &amp; leadership</Label>
          <h2 className="display-lg mt-8 text-2xl md:text-3xl">
            Ambition Supported by Discipline.
          </h2>
          <div className="mt-5 flex flex-col gap-5 leading-relaxed text-muted-foreground">
            <p>
              STTPS is being built with the pace of an entrepreneurial group and the discipline of a
              serious long-term business.
            </p>
            <p>
              The group&apos;s leadership and advisory structure exists to support clear decisions,
              accountable execution, responsible growth and strong governance across the portfolio.
            </p>
            <p>
              The role of the group is to provide direction, challenge, support and capability,
              while ensuring that each operating company remains close to its customers and
              accountable for its performance.
            </p>
          </div>
          <div className="mt-8">
            <ArrowLink href="/governance">Our Governance</ArrowLink>
          </div>
        </div>

        <div className="bg-warm p-8 md:p-10">
          <Label>News &amp; insights</Label>
          <h2 className="display-lg mt-8 text-2xl md:text-3xl">
            Building in Public, With Substance.
          </h2>
          <div className="mt-5 flex flex-col gap-5 leading-relaxed text-muted-foreground">
            <p>
              This is where STTPS shares the work behind the companies: new launches, operating
              milestones, people, partnerships, category insights and the decisions shaping the
              group.
            </p>
            <p>No noise. No empty announcements.</p>
            <p className="text-ink">Only meaningful progress from the companies we are building.</p>
          </div>
          <div className="mt-8">
            <ArrowLink href="/news">View News &amp; Insights</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 17 — partnership and contact. */
function Partnership() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-warm md:py-28">
      <div className="shell relative">
        <SplitLines
          lines={["Some Categories Are Waiting", "To Be Built Properly."]}
          className="display-xl text-warm"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_auto] lg:items-end">
          <div className="flex max-w-2xl flex-col gap-5 text-lg leading-relaxed text-warm/60">
            <p>
              If you are an operator, founder, investor, partner or business owner with a serious
              opportunity in an everyday service category, speak with STTPS.
            </p>
            <p>
              We bring operating discipline, brand-building capability, systems, people and
              long-term commitment.
            </p>
            <p className="text-warm">
              The objective is not a short-term launch. The objective is to build a company with the
              strength to lead its market.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ArrowLink href="/contact" tone="light">
              Start a Conversation
            </ArrowLink>
            <ArrowLink href="/companies" tone="light" className="border-transparent">
              Contact an Operating Company
            </ArrowLink>
          </div>
        </div>
        <div className="label-xs mt-16 text-warm/40">
          Everyday services. Built properly. Built to lead.
        </div>
      </div>
    </section>
  );
}
