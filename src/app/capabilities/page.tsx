import type { Metadata } from "next";
import { GROUP_CAPABILITIES } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";

const TITLE = "Group Capabilities | STTPS";
const DESCRIPTION =
  "People, operations, technology, procurement, customer experience and growth: the capabilities STTPS builds across the group so each company can perform at a higher level.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/capabilities" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/capabilities", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/capabilities",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

export default function CapabilitiesPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>Group capabilities</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["The Whole Is Stronger", "Than the Parts."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              STTPS creates value across the ecosystem by connecting capabilities that individual
              service companies cannot always build alone.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell">
          <div className="border-t border-steel/25">
            {GROUP_CAPABILITIES.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 0.06}
                className="group border-b border-steel/25 transition-colors duration-500 hover:bg-foreground/[0.03]"
              >
                <div className="grid gap-4 py-9 md:grid-cols-[1fr_1.4fr] md:gap-14 md:px-4">
                  <div>
                    <UnitTag index={i + 1} />
                    <h2 className="display-lg mt-5 text-3xl md:text-4xl">{c.title}</h2>
                  </div>
                  <p className="max-w-xl self-center text-lg leading-relaxed text-muted-foreground">
                    {c.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-steel/25 bg-charcoal py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <Label>How it works</Label>
            <SplitLines
              lines={["Identity Kept.", "Performance Raised."]}
              className="display-xl mt-8"
            />
          </div>
          <Reveal className="flex flex-col gap-5 self-end text-lg leading-relaxed text-muted-foreground">
            <p>
              Each company keeps its identity, its customer understanding and its market focus. The
              group strengthens its ability to perform.
            </p>
            <p>
              That is the difference between owning a business and building one: we work alongside
              our companies on the functions that decide whether the work gets done properly, every
              site and every customer.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ArrowLink href="/how-we-build">How We Build</ArrowLink>
              <ArrowLink href="/companies" className="border-transparent">
                Our Companies
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
