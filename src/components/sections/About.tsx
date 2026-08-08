import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company } from "@/data/company";

export function About() {
  const { about } = company;

  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-96 bg-[image:var(--gradient-soft)]" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="About ABsynergy"
          title="Strategy, foresight, data and research since 2014"
          description={about.story}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <Reveal className="surface-card rounded-xl p-8 lg:col-span-1">
            <h3 className="text-lg font-semibold">Our practice</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{about.who}</p>
          </Reveal>
          <Reveal delay={0.08} className="surface-card rounded-xl p-8">
            <h3 className="text-lg font-semibold">Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{about.vision}</p>
          </Reveal>
          <Reveal delay={0.16} className="surface-card rounded-xl p-8">
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{about.mission}</p>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <div className="h-full rounded-xl border border-border bg-surface p-7 transition-colors hover:border-accent/50">
                <span className="font-display text-xs font-semibold tracking-[0.18em] text-accent">
                  0{index + 1}
                </span>
                <h4 className="mt-4 text-base font-semibold">{value.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="eyebrow">Chronology of events</p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
              From 2014 to capacity building
            </h3>
          </Reveal>

          <ol className="relative mt-12 grid gap-10 border-l border-border pl-8 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
            {about.timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[2.30rem] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background" />
                  <p className="font-display text-sm font-semibold text-accent">{item.year}</p>
                  <p className="mt-2 text-base font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
