import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPANIES } from "@/data/sttps";
import { CompanySection } from "@/components/site/company-section";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";

export function generateStaticParams() {
  return COMPANIES.map((c) => ({ brand: c.id }));
}

async function getCompany(brand: string) {
  return COMPANIES.find((c) => c.id === brand);
}

// Pulls a dialable number back out of a tel:/wa.me contact value, so the
// LocalBusiness telephone field always matches the number the page actually
// links to rather than a hardcoded one.
function phoneFromContact(contact?: { type: string; value: string }) {
  if (!contact) return undefined;
  if (contact.type === "phone" && contact.value.startsWith("tel:")) {
    return contact.value.replace("tel:", "");
  }
  if (contact.type === "whatsapp") {
    const digits = contact.value.replace(/^https:\/\/wa\.me\//, "");
    return digits ? `+${digits}` : undefined;
  }
  return undefined;
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
  const description = `${company.headline} ${company.description}`;
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

  const contact = company.contactMethod;
  const telephone = phoneFromContact(contact);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description: company.description,
    parentOrganization: { "@type": "Organization", name: "STTPS" },
    ...(company.serviceArea ? { areaServed: company.serviceArea } : {}),
    ...(telephone ? { telephone } : {}),
    ...(company.website ? { sameAs: [company.website] } : {}),
  };

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
          {/* Headline only — the positioning line is the lead of the
              CompanySection immediately below, so repeating it here reads as
              a stutter. */}
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-8 max-w-2xl font-display text-2xl leading-tight tracking-[-0.02em] text-warm md:text-3xl">
              {company.headline}
            </p>
          </Reveal>
        </div>
      </section>

      <CompanySection company={company} index={0} headingLevel="h2" ctaHref="/contact" />

      {company.narrative.length > 0 && (
        <section className="border-t border-steel/25 bg-warm py-14 md:py-20">
          <div className="shell grid gap-14 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <Label>The company</Label>
              <SplitLines lines={["In the Group."]} className="display-lg mt-6" />
            </div>
            <Reveal className="flex flex-col gap-5 self-center text-lg leading-relaxed text-muted-foreground">
              {company.narrative.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {company.opportunity && (
        <section className="border-t border-steel/25 bg-charcoal py-14 md:py-20">
          <div className="shell grid gap-14 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <Label>The opportunity</Label>
              <SplitLines lines={["Why This", "Category."]} className="display-lg mt-6" />
            </div>
            <Reveal className="flex flex-col gap-5 self-center text-lg leading-relaxed text-muted-foreground">
              {company.opportunity.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {company.standard && company.standard.length > 0 && (
        <section className="border-t border-steel/25 bg-warm py-14 md:py-20">
          <div className="shell">
            <Label>{company.standardLabel ?? "The standard"}</Label>
            <SplitLines lines={["What It Is", "Built On."]} className="display-xl mt-8" />
            <div className="mt-12 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-3">
              {company.standard.map((s, i) => (
                <Reveal key={s} delay={i * 0.05} className="bg-warm p-8">
                  <UnitTag index={i + 1} />
                  <p className="display-md mt-8">{s}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {company.ambition && (
        <section
          className="border-t border-steel/25 py-16 md:py-24"
          style={
            {
              "--brand": company.brand,
              "--brand-ink": company.brandInk,
              backgroundColor: company.surface,
              color: "var(--color-warm)",
            } as React.CSSProperties
          }
        >
          <div className="shell">
            <Label className="text-brand">The ambition</Label>
            <Reveal className="mt-8 flex flex-col gap-6">
              {company.ambition.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "display-xl max-w-4xl text-warm"
                      : "max-w-2xl text-lg leading-relaxed text-warm/60"
                  }
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      )}

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
            <div className="mt-6 flex flex-wrap gap-3">
              <ArrowLink href={contact ? contact.value : "/contact"}>
                {contact ? contact.label : "Contact STTPS"}
              </ArrowLink>
              {company.website && (
                <ArrowLink href={company.website}>Visit {company.name}&apos;s Site</ArrowLink>
              )}
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

      {/* Brand news feed lands here once Sanity is wired up (Phase 3) — no
          empty-looking placeholder block until there's real content to show. */}
    </main>
  );
}
