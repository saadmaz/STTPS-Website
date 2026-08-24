import type { Metadata } from "next";
import { Label, SplitLines } from "@/components/site/primitives";

const TITLE = "Privacy Policy";

export const metadata: Metadata = {
  title: TITLE,
  robots: { index: false },
  alternates: { canonical: "/legal/privacy" },
};

// Placeholder shell: this copy has NOT been through legal review and must
// not be treated as a published, binding policy. Replace before launch.
export default function PrivacyPage() {
  return (
    <main className="bg-warm">
      <section className="bg-ink pb-20 pt-40 text-warm md:pb-24 md:pt-52">
        <div className="shell">
          <Label className="text-warm">Legal</Label>
          <SplitLines as="h1" lines={["Privacy Policy"]} className="display-xl mt-8 text-warm" />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="shell max-w-2xl text-sm leading-relaxed text-muted-foreground">
          <p className="rounded-md border border-foreground/15 bg-card p-4 text-foreground">
            This page is a structural placeholder. The privacy policy has not yet been drafted or
            reviewed by counsel — do not treat this page as STTPS&apos;s actual data-handling
            commitments until that review is complete.
          </p>
          <p className="mt-8">
            Once finalized, this page will describe what personal data STTPS collects (for example,
            through the contact form and job applications), how it is used and stored, and how
            visitors can request access to or deletion of their data.
          </p>
        </div>
      </section>
    </main>
  );
}
