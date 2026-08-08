import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { domains } from "@/data/domains";

export function Domains() {
  return (
    <section id="domains" className="bg-surface py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Expert application domains"
          title="Where our technology is put to work"
          description="Hover or tap a domain to read the scope of work. Each is delivered by ABsynergy's subject experts with departmental compliance in view."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <Reveal key={domain.id} delay={(index % 3) * 0.04}>
                <div className="group h-52 [perspective:1200px]">
                  <div className="relative size-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                    <div
                      tabIndex={0}
                      className="absolute inset-0 flex flex-col rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] [backface-visibility:hidden]"
                    >
                      <Icon className="size-6 text-accent" />
                      <h3 className="mt-auto font-display text-lg font-semibold leading-snug">
                        {domain.name}
                      </h3>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center rounded-xl border border-accent/40 bg-card p-7 shadow-[var(--shadow-lift)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {domain.description}
                      </p>
                      <a
                        href="#business-enquiry"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent"
                      >
                        Business Enquiry <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
