import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/data/sttps";
import { Label, Reveal, SplitLines } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/contact-form";

const TITLE = "Contact STTPS — Talk to the Group";
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
      { name: "twitter:card", content: "summary_large_image" },
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
            <Detail
              label="Phone"
              value={CONTACT.phone}
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            />
            <Detail label="Location" value={CONTACT.location} />
            <div>
              <div className="label-xs text-muted-foreground">Social</div>
              <div className="mt-3 flex gap-5">
                {CONTACT.socials.map((s) => (
                  <a key={s.label} href={s.href} className="underline-offset-4 hover:underline">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
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
