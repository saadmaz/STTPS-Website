import { BELIEFS } from "@/data/sttps";
import { Label, Reveal, SplitLines } from "@/components/site/primitives";

/** Section 09 — what we believe. The one dark band in the middle of the page. */
export function Beliefs() {
  return (
    <section className="border-y border-steel/15 bg-ink py-20 text-warm md:py-28">
      <div className="shell">
        <Label className="text-warm">What we believe</Label>
        <SplitLines
          lines={["Performance and Responsibility", "Belong Together."]}
          className="display-xl mt-8 text-warm"
        />

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal delay={0.15} className="flex flex-col gap-5 text-lg leading-relaxed text-warm/60">
            <p>
              STTPS is building commercial businesses with a wider responsibility to the people,
              properties and communities they serve.
            </p>
            <p>
              We believe long-term performance depends on more than revenue. It depends on the
              quality of the work, the strength of the team, the trust of the customer and the
              contribution made to the wider community.
            </p>
            <p className="text-warm">
              Better businesses should create better outcomes around them.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="self-center">
            <div className="label-xs text-warm/40">Our approach brings together</div>
            <ul className="mt-6 border-t border-steel/25">
              {BELIEFS.map((b, i) => (
                <li
                  key={b}
                  className="flex items-baseline gap-5 border-b border-warm/15 py-4 text-warm"
                >
                  <span className="readout text-sm text-warm/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl tracking-[-0.02em] md:text-2xl">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
