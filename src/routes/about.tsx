import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { LAYERS, PRINCIPLES } from "@/data/sttps";
import { EASE, Label, Reveal, SplitLines } from "@/components/site/primitives";
import { ModelTimeline } from "@/components/site/model-timeline";

const TITLE = "About STTPS — A Group Building Service Businesses";
const DESCRIPTION =
  "STTPS builds brands, businesses and operating systems for everyday services in Sri Lanka — from identity and teams to technology and customer experience.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-warm">
      <section className="bg-ink pb-24 pt-40 text-warm md:pb-32 md:pt-52">
        <div className="shell">
          <Label className="text-warm">About</Label>
          <SplitLines
            as="h1"
            lines={["A Group That", "Builds Companies."]}
            className="display-hero mt-8 text-warm"
          />
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-warm/60">
              STTPS is not a holding company that collects businesses. We start them, brand them,
              staff them and operate them — with the same standard applied across every venture.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="shell grid gap-16 lg:grid-cols-2">
          <div>
            <Label>Why we exist</Label>
            <SplitLines lines={["Everyday Services,", "Done Properly."]} className="display-xl mt-8" />
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

      <section className="border-t border-foreground/10 py-24 md:py-36">
        <div className="shell">
          <Label>Principles</Label>
          <SplitLines lines={["What Connects Us."]} className="display-xl mt-8" />
          <div className="mt-16 grid gap-px border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="group bg-warm p-8 transition-colors duration-500 hover:bg-ink hover:text-warm md:p-10"
              >
                <div className="label-xs opacity-40">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="display-lg mt-10 text-3xl md:text-4xl">{p.title}</h2>
                <p className="mt-4 text-sm text-muted-foreground group-hover:text-warm/60">
                  {p.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24 md:py-36">
        <div className="shell">
          <Label>The model</Label>
          <SplitLines lines={["From Idea", "To Operation."]} className="display-xl mt-8" />
          <div className="mt-16">
            <ModelTimeline />
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24 md:py-36">
        <div className="shell grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Label>What we build</Label>
            <SplitLines lines={["Every Layer", "Of a Business."]} className="display-xl mt-8" />
          </div>
          <div>
            {LAYERS.map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
                className="-mt-px flex items-center justify-between border border-foreground/15 bg-card px-6 py-6 transition-transform duration-500 hover:translate-x-2"
              >
                <span className="display-lg text-xl md:text-2xl">{l}</span>
                <span className="label-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
