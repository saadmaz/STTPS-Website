import Link from "next/link";
import { COMPANIES } from "@/data/sttps";
import { Label, Reveal, SplitLines, UnitTag } from "@/components/site/primitives";

/**
 * Section 07 — the portfolio in full. Every company gets the same amount of
 * room and the same treatment; none is given visual precedence over the
 * others, whatever its consumer recognition.
 */
export function Portfolio() {
  return (
    <section className="border-t border-steel/25 bg-warm py-14 md:py-20">
      <div className="shell">
        <Label>Our companies</Label>
        <SplitLines
          lines={["Our Ecosystem, Built", "Company by Company."]}
          className="display-xl mt-8"
        />

        <Reveal
          delay={0.1}
          className="mt-10 grid gap-6 border-t border-steel/25 pt-10 md:grid-cols-2"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Each company in the STTPS ecosystem is built around a clear customer need and a distinct
            market opportunity. Each retains its own character, service promise and operating focus.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            What connects them is the STTPS standard: clear accountability, repeatable systems,
            trained people, visible quality and a commitment to better execution.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-steel/25">
          {COMPANIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06} className="group border-b border-steel/25">
              <Link
                href={`/companies/${c.id}`}
                className="grid gap-6 py-10 transition-colors duration-500 group-hover:bg-foreground/[0.03] md:grid-cols-[1fr_1.3fr] md:gap-16 md:px-4"
              >
                <div>
                  <UnitTag index={i + 1} detail={c.categoryGroup} />
                  <h3 className="display-lg mt-6 text-3xl md:text-5xl">{c.name}</h3>
                  <p className="mt-4 max-w-sm font-display text-xl leading-tight tracking-[-0.02em] md:text-2xl">
                    {c.headline}
                  </p>
                </div>
                <div className="flex flex-col gap-4 self-center">
                  {c.narrative.map((p, j) => (
                    <p key={j} className="max-w-xl leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                  <span className="label-xs mt-2 inline-flex items-center gap-2 text-ink">
                    Explore {c.name}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
