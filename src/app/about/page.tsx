import type { Metadata } from "next";
import { LAYERS, PRINCIPLES } from "@/data/sttps";
import { Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";
import { ModelTimeline } from "@/components/site/model-timeline";
import { LayerStack } from "@/components/site/layer-stack";

const TITLE = "About STTPS — Building Service Companies in Sri Lanka";
const DESCRIPTION =
  "STTPS builds brands, businesses and operating systems for everyday services in Sri Lanka — from identity and teams to technology and customer experience.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/about", type: "website" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: "/about",
  isPartOf: { "@type": "Organization", name: "STTPS" },
};

export default function AboutPage() {
  return (
    <main className="bg-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="border-b border-steel/15 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="shell">
          <Label>About</Label>
          <SplitLines
            as="h1"
            trigger="mount"
            lines={["A Group That", "Builds Companies."]}
            className="display-hero mt-8"
          />
          <Reveal delay={0.15} trigger="mount">
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              STTPS is not a holding company that collects businesses. We start them, brand them,
              staff them and operate them — with the same standard applied across every venture.
            </p>
          </Reveal>
        </div>
      </section>

      {/*
        Origin story (founding year, founders) and leadership bios/photos
        aren't published here yet — no verified content exists for either.
        Add them as real, specific detail once supplied rather than filling
        this space with generic venture-studio boilerplate.
      */}

      <section className="py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <Label>Why we exist</Label>
            <SplitLines
              lines={["Everyday Services,", "Done Properly."]}
              className="display-xl mt-8"
            />
          </div>
          <Reveal className="flex flex-col gap-6 self-end text-lg leading-relaxed text-muted-foreground">
            <p>
              Most everyday services are unreliable, inconsistent and hard to trust. We think that
              is a design problem — one solved with brand, systems and trained people.
            </p>
            <p>
              Each STTPS company targets a specific need and is built to be repeatable: defined
              standards, documented processes and teams accountable for the result.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell">
          <Label>Principles</Label>
          <SplitLines lines={["What Connects Us."]} className="display-xl mt-8" />
          <div className="mt-16 grid gap-px border border-steel/25 bg-steel/25 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="group bg-warm p-8 transition-colors duration-500 hover:bg-ink hover:text-warm md:p-10"
              >
                <UnitTag index={i + 1} />
                <h3 className="display-lg mt-10 text-3xl md:text-4xl">{p.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground group-hover:text-warm/60">
                  {p.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell">
          <Label>The model</Label>
          <SplitLines lines={["From Idea", "To Operation."]} className="display-xl mt-8" />
          <div className="mt-16">
            <ModelTimeline />
          </div>
        </div>
      </section>

      <section className="border-t border-steel/25 py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Label>What we build</Label>
            <SplitLines lines={["Every Layer", "Of a Business."]} className="display-xl mt-8" />
          </div>
          <LayerStack layers={LAYERS} />
        </div>
      </section>
    </main>
  );
}
