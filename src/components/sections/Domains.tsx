import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { domains } from "@/data/domains";

export function Domains() {
  return (
    <section id="domains" className="bg-cream py-28 lg:py-36">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Where we apply it — application domains"
          title="Expert application domains"
          description="Each domain is delivered by ABsynergy's subject experts with departmental compliance in view."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <Reveal key={domain.id} delay={(index % 4) * 0.04} className="h-full">
                <a
                  href="#business-enquiry"
                  className="group flex h-full flex-col rounded-2xl border border-earth/15 bg-background/70 p-8 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-background hover:shadow-[var(--shadow-card)] focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="size-6 shrink-0 text-earth transition-colors group-hover:text-primary" />
                  <h3 className="mt-6 font-display text-lg font-semibold leading-snug">
                    {domain.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {domain.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-earth transition-colors group-hover:text-primary">
                    Business Enquiry
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
