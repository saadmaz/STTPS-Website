import Link from "next/link";
import { COMPANIES, CONTACT, NAV_LINKS, SECONDARY_NAV } from "@/data/sttps";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-warm">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="display-lg">STTPS</div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-warm/60">
              The operating group building the companies that raise the standard of everyday life.
            </p>
          </div>

          <FooterCol title="Navigate">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} href={l.to}>
                {l.label}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Companies">
            {COMPANIES.map((c) => (
              <Link key={c.id} href={`/companies/${c.id}`}>
                {c.name}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="More">
            {SECONDARY_NAV.map((l) => (
              <Link key={l.to} href={l.to}>
                {l.label}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.whatsappHref}>{CONTACT.whatsapp}</a>
          </FooterCol>
        </div>

        <div className="label-xs mt-16 border-t border-steel/25 pt-6 text-warm/70">
          Everyday services. Built properly. Built to lead.
        </div>

        <div className="label-xs mt-6 flex flex-col justify-between gap-3 opacity-50 sm:flex-row">
          <span>© {new Date().getFullYear()} STTPS. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:opacity-100">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:opacity-100">
              Terms
            </Link>
          </div>
          <span>{CONTACT.location}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="label-xs opacity-40">{title}</div>
      <div className="mt-5 flex flex-col gap-3 text-sm text-warm/70 [&>a]:transition-colors [&>a]:hover:text-warm">
        {children}
      </div>
    </div>
  );
}
