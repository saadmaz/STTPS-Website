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
      <section className="bg-ink pb-20 pt-40 text-warm md:pb-24 md:pt-52">
        <div className="shell">
          <Label className="text-warm">Legal</Label>
          <SplitLines as="h1" trigger="mount" lines={["Terms of Use"]} className="display-xl mt-8 text-warm" />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="shell max-w-2xl text-sm leading-relaxed text-muted-foreground">
          <p className="rounded-md border border-steel/30 bg-card p-4 text-foreground">
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
