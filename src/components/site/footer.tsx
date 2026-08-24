import { Link } from "@tanstack/react-router";
import { COMPANIES, CONTACT } from "@/data/sttps";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-warm">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-5xl font-bold uppercase tracking-[-0.05em] md:text-7xl">
              STTPS
            </div>
            <div className="label-xs mt-3 opacity-50">The Group</div>
          </div>

          <FooterCol title="Navigate">
            <Link to="/about" className="hover:opacity-100">
              About
            </Link>
            <Link to="/companies" className="hover:opacity-100">
              Companies
            </Link>
            <Link to="/careers" className="hover:opacity-100">
              Careers
            </Link>
            <Link to="/contact" className="hover:opacity-100">
              Contact
            </Link>
          </FooterCol>

          <FooterCol title="Companies">
            {COMPANIES.map((c) => (
              <Link key={c.id} to="/companies" hash={c.id}>
                {c.name}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </FooterCol>
        </div>

        <div className="label-xs mt-16 flex flex-col justify-between gap-3 border-t border-warm/10 pt-6 opacity-50 sm:flex-row">
          <span>© {new Date().getFullYear()} STTPS. All rights reserved.</span>
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
