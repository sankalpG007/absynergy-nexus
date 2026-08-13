import { ArrowUpRight, RotateCw } from "lucide-react";

import { FlipCard } from "@/components/site/FlipCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { technologies } from "@/data/technologies";

const flow = ["Data acquisition", "Processing", "Modelling", "Analysis", "Decision support"];

export function Technologies() {
  return (
    <section id="technologies" className="relative bg-background py-28 lg:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 contour-lines opacity-40" />
      <div className="section-shell relative">
        <SectionHeading
          index="02"
          eyebrow="How we work — technologies"
          title="Twenty technologies behind every deliverable"
          description="The scientific instruments, platforms and methods our teams combine on ABsynergy assignments."
        />

        <Reveal className="mt-12">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <p className="font-display text-3xl font-semibold text-brand-gradient">
              20 Technologies
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Advanced tools for scientific observation, mapping, modelling and spatial
              intelligence.
            </p>
          </div>

          <div className="mt-8 overflow-hidden">
            <div className="h-px w-full bg-[linear-gradient(90deg,transparent,var(--primary-orange),transparent)] opacity-60" />
            <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {flow.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  <span className={index === 0 ? "text-earth" : undefined}>{step}</span>
                  {index < flow.length - 1 ? (
                    <span aria-hidden className="text-primary">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Reveal key={tech.id} delay={(index % 4) * 0.05} className="h-full">
                <FlipCard
                  label={tech.name}
                  front={
                    <div className="flex size-full flex-col p-8">
                      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-beige text-primary">
                        <Icon className="size-5" />
                      </span>
                      <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Technology
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-earth-deep">
                        {tech.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {tech.summary}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-earth">
                        <RotateCw className="size-3.5 text-primary" /> Hover / Tap to explore
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
                        <Icon className="size-5 shrink-0 text-orange-bright" />
                        <h3 className="mt-4 font-display text-base font-semibold leading-snug">
                          {tech.name}
                        </h3>
                        <p className="mt-3 overflow-hidden text-sm leading-relaxed text-ink-foreground/80">
                          {tech.description}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-orange-bright">
                          Explore Technology <ArrowUpRight className="size-3.5" />
                        </span>
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
