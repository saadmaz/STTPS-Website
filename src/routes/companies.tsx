import { createFileRoute } from "@tanstack/react-router";
import { COMPANIES } from "@/data/sttps";
import { Label, Reveal, SplitLines } from "@/components/site/primitives";
import { CompanySection } from "@/components/site/company-section";

const TITLE = "Our Companies — Tank Sudda, Team Sudda, Polish Station, STOPWASH";
const DESCRIPTION =
  "The operating companies of STTPS: water tank care, service operations, automotive detailing and everyday car wash — each built as its own brand.";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CompaniesPage,
});

function CompaniesPage() {
  return (
    <main>
      <section className="bg-ink pb-20 pt-40 text-warm md:pb-28 md:pt-52">
        <div className="shell">
          <Label className="text-warm">Our companies</Label>
          <SplitLines
            as="h1"
            lines={["Four Brands.", "One Standard."]}
            className="display-hero mt-8 text-warm"
          />
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-warm/60">
              Every company in the group serves a different world — water, property, vehicles,
              people — and shares the same operating discipline.
            </p>
          </Reveal>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-warm/10 pt-8">
            {COMPANIES.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="label-xs text-warm/50 hover:text-warm">
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {COMPANIES.map((c, i) => (
        <CompanySection key={c.id} company={c} index={i} />
      ))}
    </main>
  );
}
