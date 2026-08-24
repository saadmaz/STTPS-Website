import { Label, Reveal, SplitLines } from "@/components/site/primitives";

export function HomeMotionSection() {
  return (
    <section className="border-y border-steel/15 bg-ink py-20 text-warm md:py-28">
      <div className="shell">
        <Label className="text-warm">Vision</Label>
        <SplitLines
          lines={["And We're", "Just Getting Started."]}
          className="display-xl mt-8 text-warm"
        />
        <Reveal delay={0.15}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-warm/60">
            STTPS is building an ecosystem of brands designed to solve everyday problems through
            better service, better systems and better experiences.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
