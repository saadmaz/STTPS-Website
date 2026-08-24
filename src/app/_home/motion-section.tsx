import { Label, Reveal, SplitLines } from "@/components/site/primitives";

export function HomeMotionSection() {
  return (
    <section className="relative overflow-hidden border-y border-steel/25 bg-ink py-32 text-warm md:py-48">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, currentColor 0, currentColor 1px, transparent 1px, transparent 64px)",
        }}
      />
      <div className="shell relative">
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
