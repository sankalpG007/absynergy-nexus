import { Award } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { company } from "@/data/company";

export function Founder() {
  const { founder } = company;

  return (
    <section id="founder" className="bg-surface py-24 lg:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 hidden size-40 rounded-xl bg-brand-gradient opacity-15 blur-2xl lg:block"
            />
            <img
              src={founder.image}
              alt={`${founder.name}, ${founder.role} of ${company.name}`}
              width={1024}
              height={1280}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="surface-card relative -mt-10 ml-6 mr-6 rounded-lg p-5">
              <p className="font-display text-lg font-semibold">{founder.name}</p>
              <p className="mt-1 text-sm text-accent">{founder.role}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Research discipline at the centre of commercial delivery
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{founder.bio}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {founder.highlights.map((item) => (
                <div key={item.label} className="border-t border-border pt-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-display text-xl font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Professional timeline
            </h3>
            <ol className="mt-6 space-y-5 border-l border-border pl-6">
              {founder.timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[1.68rem] top-2 size-2 rounded-full bg-accent ring-4 ring-surface" />
                  <p className="font-display text-sm font-semibold text-accent">{item.year}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-12 rounded-xl border border-border bg-card p-7">
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <Award className="size-4 text-accent" /> Recognition
              </h3>
              <ul className="mt-4 space-y-3">
                {founder.awards.map((award) => (
                  <li key={award} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
