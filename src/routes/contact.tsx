import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/data/sttps";
import { Label, Reveal, SplitLines } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/contact-form";

const TITLE = "Contact STTPS — Talk to Our Team in Colombo, Sri Lanka";
const DESCRIPTION =
  "Get in touch with STTPS in Colombo, Sri Lanka — for services, partnerships, ventures or careers across our operating companies.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          description: DESCRIPTION,
          url: "/contact",
          isPartOf: { "@type": "Organization", name: "STTPS" },
          mainEntity: {
            "@type": "Organization",
            name: "STTPS",
            email: CONTACT.email,
            address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-warm">
      <section className="bg-ink pb-24 pt-40 text-warm md:pb-32 md:pt-52">
        <div className="shell">
          <Label className="text-warm">Contact</Label>
          <SplitLines
            as="h1"
            lines={["Have an Idea?", "Let's Talk."]}
            className="display-hero mt-8 text-warm"
          />
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="shell grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="flex flex-col gap-8 text-sm">
            <Detail label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <Detail label="Location" value={CONTACT.location} />
          </Reveal>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function Detail({ label, value, href }: { label: string; value: string; href?: string }) {
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
