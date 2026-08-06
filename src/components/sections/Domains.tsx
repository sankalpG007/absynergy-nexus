import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { domains } from "@/data/domains";

export function Domains() {
  return (
    <section id="domains" className="bg-surface py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Application domains"
          title="Where our technology is put to work"
          description="Sector-specific teams combine measurement, modelling and regulatory understanding so that outputs are usable the day they are delivered."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <Reveal key={domain.id} delay={(index % 3) * 0.04}>
                <a
                  href="#business-enquiry"
                  className="group relative flex h-full flex-col bg-card p-8 transition-colors hover:bg-background"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <Icon className="size-6 text-accent" />
                  <h3 className="mt-6 font-display text-lg font-semibold">{domain.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {domain.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-accent">
                    {domain.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
