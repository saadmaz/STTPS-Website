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
      <section className="border-b border-steel/15 pb-10 pt-32 md:pb-12 md:pt-40">
        <div className="shell">
          <Label>Legal</Label>
          <SplitLines as="h1" trigger="mount" lines={["Privacy Policy"]} className="display-xl mt-8" />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="shell max-w-2xl text-sm leading-relaxed text-muted-foreground">
          <p className="border border-steel/30 bg-card p-4 text-foreground">
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
