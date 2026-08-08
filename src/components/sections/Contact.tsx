import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company } from "@/data/company";

export function Contact() {
  const { contact } = company;

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to the team directly"
          description="Reach us by phone, email or WhatsApp, or visit our Nagpur office. For tender and procurement queries, please mark your email to the same address."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.25fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <ContactCard
              icon={<Phone className="size-5 text-accent" />}
              label="Phone"
              value={contact.phone}
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              icon={<Mail className="size-5 text-accent" />}
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactCard
              icon={<MessageCircle className="size-5 text-accent" />}
              label="WhatsApp"
              value="Message our project desk"
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
            />
            <ContactCard
              icon={<MapPin className="size-5 text-accent" />}
              label="Office"
              value={contact.address}
            />
          </div>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="ABsynergy office location on Google Maps"
                src={contact.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {contact.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
      {icon}
      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm font-medium leading-relaxed">{value}</p>
    </div>
  );

  return (
    <Reveal>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </Reveal>
  );
}
