import type { Metadata } from "next";
import { CONTACT } from "@/data/sttps";
import { Label, Reveal, SplitLines } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/contact-form";

const TITLE = "Contact STTPS — Talk to Our Team in Colombo, Sri Lanka";
const DESCRIPTION =
  "Get in touch with STTPS in Colombo, Sri Lanka — for services, partnerships, ventures or careers across our operating companies.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/contact", type: "website" },
};

const JSON_LD = {
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
};

export default function ContactPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>Contact</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["Have an Idea?", "Let's Talk."]}
            className="display-hero mt-8"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
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
