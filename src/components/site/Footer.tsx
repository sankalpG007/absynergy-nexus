import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

import { businessUnits } from "@/data/businessUnits";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="section-shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-md bg-brand-gradient text-sm font-bold text-primary-foreground">
                AB
              </span>
              <span className="font-display text-lg font-semibold">{company.name}</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">
              {company.descriptor}
            </p>
            <div className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{company.contact.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" />
                <a href={`tel:${company.contact.phone.replace(/\s/g, "")}`}>
                  {company.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" />
                <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
              </p>
            </div>
          </div>

          <FooterColumn title="Quick Links">
            {company.navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-accent">
                {item.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="Business Units">
            {businessUnits.map((unit) => (
              <Link key={unit.id} to={unit.href} className="hover:text-accent">
                {unit.name}
              </Link>
            ))}
            <a href="#careers" className="hover:text-accent">
              Careers & Training
            </a>
            <a href="#gallery" className="hover:text-accent">
              Gallery
            </a>
          </FooterColumn>

          <FooterColumn title="Company">
            <Link to="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent">
              Terms of Use
            </Link>
            {company.contact.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-foreground/60">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-medium text-ink-foreground/70 transition-colors hover:text-accent"
          >
            Back to top <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink-foreground">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 text-sm text-ink-foreground/70">{children}</div>
    </div>
  );
}
