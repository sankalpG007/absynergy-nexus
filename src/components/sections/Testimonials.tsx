import { Quote } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients report back"
          description="Statements shown are representative placeholders pending client attribution approval."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={(index % 2) * 0.08}>
              <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <Quote className="size-6 text-accent" />
                <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.role} · {item.organisation}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
