import type { Metadata } from "next";
import { Label, SplitLines } from "@/components/site/primitives";

const TITLE = "Terms of Use";

export const metadata: Metadata = {
  title: TITLE,
  robots: { index: false },
  alternates: { canonical: "/legal/terms" },
};

// Placeholder shell: this copy has NOT been through legal review and must
// not be treated as published, binding terms. Replace before launch.
export default function TermsPage() {
  return (
    <main className="bg-warm">
      <section className="border-b border-steel/15 pb-10 pt-32 md:pb-12 md:pt-40">
        <div className="shell">
          <Label>Legal</Label>
          <SplitLines as="h1" trigger="mount" lines={["Terms of Use"]} className="display-xl mt-8" />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="shell max-w-2xl text-sm leading-relaxed text-muted-foreground">
          <p className="border border-steel/30 bg-card p-4 text-foreground">
            This page is a structural placeholder. The terms of use have not yet been drafted or
            reviewed by counsel — do not treat this page as STTPS&apos;s actual terms until that
            review is complete.
          </p>
          <p className="mt-8">
            Once finalized, this page will set out the rules for using this website, including
            acceptable use, intellectual property, and limitations of liability.
          </p>
        </div>
      </section>
    </main>
  );
}
