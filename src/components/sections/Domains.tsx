import { ArrowRight } from "lucide-react";

import { FlipCard } from "@/components/site/FlipCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { domains } from "@/data/domains";

export function Domains() {
  return (
    <section id="domains" className="relative overflow-hidden bg-cream py-28 lg:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 survey-grid opacity-[0.35]" />
      <div className="section-shell relative">
        <SectionHeading
          index="03"
          eyebrow="Where we apply it — application domains"
          title="Expert application domains"
          description="Technologies answer how we work; these domains answer where we apply it — each delivered by ABsynergy's subject experts with departmental compliance in view."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <Reveal key={domain.id} delay={(index % 4) * 0.04} className="h-full">
                <FlipCard
                  label={domain.name}
                  heightClass="h-[17.5rem]"
                  front={
                    <div className="flex size-full flex-col bg-background/80 p-8">
                      <Icon className="size-6 shrink-0 text-primary" />
                      <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Application Domain
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-earth-deep">
                        {domain.name}
                      </h3>
                      <span className="mt-auto inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-earth">
                        Hover / Tap
                        <ArrowRight className="size-3.5 text-primary" />
                      </span>
                    </div>
                  }
                  back={
                    <div className="relative flex size-full flex-col p-8">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 topo-pattern opacity-25"
                      />
                      <div className="relative flex flex-1 flex-col">
                        <h3 className="font-display text-base font-semibold leading-snug">
                          {domain.name}
                        </h3>
                        <p className="mt-3 overflow-hidden text-sm leading-relaxed text-ink-foreground/80">
                          {domain.description}
                        </p>
                        <a
                          href="#business-enquiry"
                          onClick={(event) => event.stopPropagation()}
                          className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-orange-bright hover:underline"
                        >
                          Business Enquiry <ArrowRight className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  }
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
