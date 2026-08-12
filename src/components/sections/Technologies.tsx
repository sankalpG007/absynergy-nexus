import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { technologies } from "@/data/technologies";

export function Technologies() {
  return (
    <section id="technologies" className="relative bg-background py-28 lg:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 contour-lines opacity-40" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="How we work — technologies"
          title="Twenty technologies behind every deliverable"
          description="The scientific instruments, platforms and methods our teams combine on ABsynergy assignments."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Reveal key={tech.id} delay={(index % 4) * 0.05} className="h-full">
                <article
                  tabIndex={0}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-lift)] focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-beige text-earth transition-colors duration-300 group-hover:bg-primary/15 group-hover:text-primary group-focus-visible:bg-primary/15">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold leading-snug">
                    {tech.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {tech.summary}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground/85">
                    {tech.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-earth transition-colors group-hover:text-primary">
                    Explore <ArrowUpRight className="size-3.5" />
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
