import type { Metadata } from "next";
import Link from "next/link";
import { BOARD_OF_DIRECTORS, GOVERNANCE_PRINCIPLES } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";

const TITLE = "Governance & Leadership | STTPS";
const DESCRIPTION =
  "STTPS is built with the pace of an entrepreneurial group and the discipline of a serious long-term business: clear accountability, disciplined capital allocation and transparent operating performance.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/governance" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/governance", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/governance",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

export default function GovernancePage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>Governance &amp; leadership</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Ambition Supported", "by Discipline."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount" className="mt-10 flex flex-col gap-5">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              STTPS is being built with the pace of an entrepreneurial group and the discipline of a
              serious long-term business.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The group&apos;s leadership and advisory structure exists to support clear decisions,
              accountable execution, responsible growth and strong governance across the portfolio.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <Label>The role of the group</Label>
            <SplitLines
              lines={["Direction, Challenge,", "Support, Capability."]}
              className="display-lg mt-8"
            />
          </div>
          <Reveal className="self-end text-lg leading-relaxed text-muted-foreground">
            <p>
              The role of the group is to provide direction, challenge, support and capability,
              while ensuring that each operating company remains close to its customers and
              accountable for its performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell">
          <Label>What governance means at STTPS</Label>
          <SplitLines lines={["Six Commitments."]} className="display-xl mt-8" />
          <div className="mt-12 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-3">
            {GOVERNANCE_PRINCIPLES.map((p, i) => (
              <Reveal key={p} delay={i * 0.06} className="bg-warm p-8 md:p-10">
                <UnitTag index={i + 1} />
                <p className="display-md mt-8">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-steel/25 bg-charcoal py-16 md:py-24">
        <div className="shell">
          <Label>Oversight</Label>
          <SplitLines lines={["The Board of", "Directors."]} className="display-xl mt-8" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The board sets direction and holds the group accountable across every company it
            operates.
          </p>
          <ul className="mt-12 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-3">
            {BOARD_OF_DIRECTORS.map((d, i) => (
              <li key={d.name} className="bg-warm p-8">
                <UnitTag index={i + 1} />
                <p className="display-md mt-6">{d.name}</p>
                <p className="label-xs mt-3 text-muted-foreground">{d.role}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-3">
            <ArrowLink href="/about/board">Board of Directors</ArrowLink>
            <ArrowLink href="/about/policies" className="border-transparent">
              Company Policies
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-20">
        <div className="shell">
          <Label>Corporate profile</Label>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Governance sits alongside the rest of the STTPS corporate profile.{" "}
            <Link href="/about" className="underline underline-offset-4 hover:text-ink">
              See the full index
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
