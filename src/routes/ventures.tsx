import { createFileRoute } from "@tanstack/react-router";
import { MODEL_STEPS, LAYERS } from "@/data/sttps";
import { ArrowLink, Label, Reveal, SplitLines } from "@/components/site/primitives";

const TITLE = "Ventures — How STTPS Builds New Companies";
const DESCRIPTION =
  "STTPS builds new service ventures from scratch: identifying real problems, designing the brand and system, hiring the team and scaling what works.";

export const Route = createFileRoute("/ventures")({
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
  component: VenturesPage,
});

function VenturesPage() {
  return (
    <main className="bg-warm">
      <section className="bg-ink pb-24 pt-40 text-warm md:pb-32 md:pt-52">
        <div className="shell">
          <Label className="text-warm">Ventures</Label>
          <SplitLines
            as="h1"
            lines={["New Companies,", "In Progress."]}
            className="display-hero mt-8 text-warm"
          />
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-warm/60">
              The group is built to keep launching. Every new venture goes through the same four
              stages before it earns a name and a team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="shell grid gap-px border border-foreground/10 bg-foreground/10 md:grid-cols-2">
          {MODEL_STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08} className="bg-warm p-10 md:p-14">
              <div className="label-xs text-muted-foreground">{s.no}</div>
              <h2 className="display-lg mt-8">{s.title}</h2>
              <p className="mt-4 max-w-sm text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-foreground/10 py-24 md:py-36">
        <div className="shell">
          <Label>Capabilities we bring</Label>
          <SplitLines lines={["A Company", "In a Box."]} className="display-xl mt-8" />
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-foreground/10 pt-8">
            {LAYERS.map((l) => (
              <span
                key={l}
                className="display-lg text-2xl text-graphite transition-colors duration-300 hover:text-foreground md:text-3xl"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-warm md:py-40">
        <div className="shell">
          <SplitLines
            lines={["Got a Venture", "Worth Building?"]}
            className="display-xl text-warm"
          />
          <p className="mt-8 max-w-xl text-lg text-warm/60">
            We partner with operators and founders who want to build service businesses properly.
          </p>
          <div className="mt-10">
            <ArrowLink href="/contact" tone="light">
              Start a Conversation
            </ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
