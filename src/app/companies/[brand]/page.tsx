import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPANIES } from "@/data/sttps";
import { CompanySection } from "@/components/site/company-section";
import { ArrowLink, Label, SplitLines } from "@/components/site/primitives";

export function generateStaticParams() {
  return COMPANIES.map((c) => ({ brand: c.id }));
}

async function getCompany(brand: string) {
  return COMPANIES.find((c) => c.id === brand);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand } = await params;
  const company = await getCompany(brand);
  if (!company) return {};

  const title = `${company.name}: ${company.category}`;
  const description = `${company.positioning} ${company.description}`;
  return {
    title,
    description,
    alternates: { canonical: `/companies/${company.id}` },
    openGraph: { title, description, url: `/companies/${company.id}`, type: "website" },
  };
}

export default async function CompanyPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const company = await getCompany(brand);
  if (!company) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description: company.description,
    parentOrganization: { "@type": "Organization", name: "STTPS" },
    ...(company.serviceArea ? { areaServed: company.serviceArea } : {}),
  };

  const contact = company.contactMethod;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        className="pb-0 pt-32 md:pt-40"
        style={
          {
            "--brand": company.brand,
            "--brand-ink": company.brandInk,
            backgroundColor: company.surface,
            color: "var(--color-warm)",
          } as React.CSSProperties
        }
      >
        <div className="shell pb-16">
          <Label className="text-brand">{company.category}</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={company.name.split(" ")}
            className="display-hero mt-8 text-warm"
          />
        </div>
      </section>

      <CompanySection company={company} index={0} headingLevel="h2" ctaHref="/contact" />

      <section className="border-t border-steel/25 bg-warm py-14 md:py-20">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Label>Where we work</Label>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              {company.serviceArea ?? "Service area details for this brand are coming soon."}
            </p>
          </div>
          <div>
            <Label>Get in touch</Label>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              {contact
                ? `Reach ${company.name} directly via ${contact.label}.`
                : `${company.name} doesn't have a dedicated contact channel published yet. Reach the group and we'll route it.`}
            </p>
            <div className="mt-6">
              <ArrowLink href={contact ? contact.value : "/contact"}>
                {contact ? contact.label : "Contact STTPS"}
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {company.testimonials && company.testimonials.length > 0 && (
        <section className="border-t border-steel/25 bg-charcoal py-16 md:py-24">
          <div className="shell">
            <Label>What customers say</Label>
            <div className="mt-10 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-3">
              {company.testimonials.map((t, i) => (
                <div key={t.author + i} className="bg-warm p-8 md:p-10">
                  <p className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <p className="label-xs mt-6 text-muted-foreground">
                    {t.author}
                    {t.context ? ` · ${t.context}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brand blog feed lands here once Sanity is wired up (Phase 3) — no
          empty-looking placeholder block until there's real content to show. */}
    </main>
  );
}
