import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { businessUnits } from "@/data/businessUnits";

export function BusinessUnits() {
  return (
    <section
      id="business-units"
      className="relative overflow-hidden bg-ink py-24 text-ink-foreground lg:py-32"
    >
      <div aria-hidden className="absolute inset-0 grid-lines opacity-[0.06]" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Our initiatives"
          tone="dark"
          title="Two specialised units under one scientific standard"
          description="ABsynergy delivers through two specialised units — Vasudhayan (Think Spatial) and Mandirayan®™, a registered trademark entity for temple town ecosystem solutions."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {businessUnits.map((unit, index) => (
            <Reveal key={unit.id} delay={index * 0.1}>
              <article className="glass-panel-dark group relative flex h-full flex-col overflow-hidden rounded-2xl p-9 transition-transform duration-500 hover:-translate-y-1.5">
                <div
                  aria-hidden
                  className="absolute -right-24 -top-24 size-64 rounded-full bg-brand-gradient opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-45"
                />
                <p className="relative eyebrow">{unit.subtitle}</p>
                <h3 className="relative mt-4 font-display text-3xl font-semibold sm:text-4xl">
                  {unit.name}
                </h3>
                <p className="relative mt-5 flex-1 text-sm leading-relaxed text-ink-foreground/70">
                  {unit.description}
                </p>
                <ul className="relative mt-7 flex flex-wrap gap-2">
                  {unit.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-ink-foreground/20 px-3 py-1 text-xs font-medium text-ink-foreground/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-9">
                  <Button asChild variant="hero" size="lg">
                    <Link to={unit.href}>
                      Know More <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
