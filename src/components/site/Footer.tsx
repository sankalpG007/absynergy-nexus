import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

import { businessUnits } from "@/data/businessUnits";
import { company } from "@/data/company";
import absynergyLogo from "@/assets/logo/ABsynergy_logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="section-shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* =======================================================
              COMPANY INFORMATION
          ======================================================= */}

          <div className="max-w-sm">

            {/* Logo + Company Name */}
            <div className="flex items-center gap-3">

              <span
                className="
                  flex
                  size-11
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-md
                  bg-white
                  shadow-sm
                "
              >
                <img
                  src={absynergyLogo}
                  alt="ABsynergy"
                  className="size-full object-contain"
                  width={88}
                  height={88}
                />
              </span>

              <span className="font-display text-lg font-semibold">
                {company.name}
              </span>
            </div>

            {/* Description */}
            <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70">
              {company.descriptor}
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-3 text-sm text-ink-foreground/70">

              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />

                <span>{company.contact.address}</span>
              </p>

              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" />

                <a
                  href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {company.contact.phone}
                </a>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" />

                <a
                  href={`mailto:${company.contact.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {company.contact.email}
                </a>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" />

                <a
                  href={`mailto:${company.contact.altEmail}`}
                  className="transition-colors hover:text-accent"
                >
                  {company.contact.altEmail}
                </a>
              </p>

              <p className="text-xs text-ink-foreground/55">
                {company.registration}
              </p>

              <p className="text-xs text-ink-foreground/55">
                {company.website}
              </p>
            </div>
          </div>

          {/* =======================================================
              QUICK LINKS
          ======================================================= */}

          <FooterColumn title="Quick Links">
            {company.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </FooterColumn>

          {/* =======================================================
              BUSINESS UNITS
          ======================================================= */}

          <FooterColumn title="Business Units">
            {businessUnits.map((unit) => (
              <Link
                key={unit.id}
                to={unit.href}
                className="transition-colors hover:text-accent"
              >
                {unit.name}
              </Link>
            ))}

            <a
              href="#careers"
              className="transition-colors hover:text-accent"
            >
              Careers & Training
            </a>

            <a
              href="#gallery"
              className="transition-colors hover:text-accent"
            >
              Gallery
            </a>
          </FooterColumn>

          {/* =======================================================
              COMPANY
          ======================================================= */}

          <FooterColumn title="Company">
            <Link
              to="/privacy"
              className="transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-accent"
            >
              Terms of Use
            </Link>

            {company.contact.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </FooterColumn>
        </div>

        {/* =========================================================
            COPYRIGHT
        ========================================================= */}

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-ink-foreground/60">
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>

          <a
            href="#top"
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-medium
              text-ink-foreground/70
              transition-colors
              hover:text-accent
            "
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ===============================================================
   FOOTER COLUMN
================================================================ */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink-foreground">
        {title}
      </h3>

      <div className="mt-5 flex flex-col gap-3 text-sm text-ink-foreground/70">
        {children}
      </div>
    </div>
  );
}