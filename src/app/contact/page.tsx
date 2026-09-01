import type { Metadata } from "next";
import { CONTACT, COMPANIES } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/contact-form";

const TITLE = "Contact STTPS: Talk to Our Team in Colombo, Sri Lanka";
const DESCRIPTION =
  "Get in touch with STTPS in Colombo, Sri Lanka for services, partnerships, ventures or careers across our operating companies.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
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

      <section className="border-t border-steel/25 bg-charcoal py-16 md:py-24">
        <div className="shell">
          <Label>Booking a service directly</Label>
          <SplitLines lines={["Go Straight", "To the Company."]} className="display-xl mt-8" />
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Need a job done rather than a general enquiry? Reach the operating company directly.
          </p>
          <div className="mt-10 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANIES.map((c, i) => (
              <div key={c.id} className="bg-warm p-8 md:p-10">
                <UnitTag index={i + 1} />
                <h2 className="display-lg mt-8 text-xl md:text-2xl">{c.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{c.category}</p>
                <div className="mt-6">
                  <ArrowLink href={c.contactMethod ? c.contactMethod.value : `/companies/${c.id}`}>
                    {c.contactMethod ? c.contactMethod.label : "View Company"}
                  </ArrowLink>
                </div>
              </div>
            ))}
          </div>
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
