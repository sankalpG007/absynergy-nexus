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

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {businessUnits.map((unit, index) => {
            const isGreen = unit.id === "vasudhayan";
            return (
              <Reveal key={unit.id} delay={index * 0.1} className="h-full">
                <article className="glass-panel-dark group relative flex h-full flex-col overflow-hidden rounded-3xl p-10 transition-transform duration-500 hover:-translate-y-1.5">
                  <div
                    aria-hidden
                    className={`absolute -right-24 -top-24 size-64 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-45 ${
                      isGreen ? "bg-emerald" : "bg-orange-bright"
                    }`}
                  />
                  <span
                    className={`relative inline-flex size-12 items-center justify-center rounded-xl font-display text-lg font-bold ${
                      isGreen
                        ? "bg-emerald/20 text-emerald"
                        : "bg-orange-bright/20 text-orange-bright"
                    }`}
                  >
                    {unit.name.charAt(0)}
                  </span>
                  <p
                    className={`relative mt-6 text-xs font-semibold uppercase tracking-[0.16em] ${
                      isGreen ? "text-emerald" : "text-orange-bright"
                    }`}
                  >
                    {unit.subtitle}
                  </p>
                  <h3 className="relative mt-4 font-display text-3xl font-semibold sm:text-4xl">
                    {unit.name}
                  </h3>
                  <p className="relative mt-5 flex-1 text-sm leading-relaxed text-ink-foreground/70">
                    {unit.description}
                  </p>
                  <ul className="relative mt-8 flex flex-wrap gap-2.5">
                    {unit.focus.map((item) => (
                      <li
                        key={item}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium text-ink-foreground/80 ${
                          isGreen ? "border-emerald/40" : "border-orange-bright/40"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-10">
                    <Button asChild variant="hero" size="lg">
                      <Link to={unit.href}>
                        Know More <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
