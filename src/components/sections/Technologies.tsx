import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { technologies } from "@/data/technologies";

export function Technologies() {
  return (
    <section id="technologies" className="bg-background py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technologies"
          title="Twenty technologies behind every deliverable"
          description="Hover or tap a card to read how each technology is applied on ABsynergy assignments."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Reveal key={tech.id} delay={(index % 3) * 0.05}>
                <div className="group h-56 [perspective:1200px]">
                  <div className="relative size-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                    <div
                      tabIndex={0}
                      className="absolute inset-0 flex flex-col rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)] [backface-visibility:hidden]"
                    >
                      <span className="grid size-11 place-items-center rounded-lg bg-secondary text-primary">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-auto font-display text-lg font-semibold leading-snug">
                        {tech.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{tech.summary}</p>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center rounded-xl bg-brand-gradient p-7 text-primary-foreground shadow-[var(--shadow-lift)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <h3 className="font-display text-base font-semibold leading-snug">
                        {tech.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                        {tech.description}
                      </p>
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
