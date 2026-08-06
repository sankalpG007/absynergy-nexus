import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company } from "@/data/company";

export function Achievements() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground lg:py-28">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-[0.07]" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="By the numbers"
          tone="dark"
          title="Track record our clients can verify"
          description="Figures below reflect delivered engagements, retained clients and active research collaborations across our practice areas."
        />

        <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3">
          {company.achievements.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <div className="border-t border-ink-foreground/20 pt-6">
                <dt className="font-display text-4xl font-semibold sm:text-5xl">
                  <Counter value={item.value} suffix={item.suffix} />
                </dt>
                <dd className="mt-3 text-sm text-ink-foreground/65">{item.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
