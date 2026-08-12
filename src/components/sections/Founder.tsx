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
              Three decades of institutional research behind every project
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

          <Reveal delay={0.2}>
            <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Key roles
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Guardian Scientist for Geology, Mining, Archaeology, and strategic applications for
              the Police and Home Department of the Government of Maharashtra.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="section-shell mt-24 lg:mt-32">
        <Reveal>
          <p className="eyebrow">Team &amp; leadership</p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Senior advisors, subject experts and associates
          </h3>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {company.team.map((member, index) => (
            <Reveal key={member.name} delay={(index % 4) * 0.05} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-earth/15 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-card)]">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-beige font-display text-base font-bold text-earth transition-colors group-hover:bg-primary/15 group-hover:text-primary">
                  {member.name
                    .replace(/^(Dr\.|Mrs\.|Mr\.|Air Commodore)\s*/i, "")
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </span>
                <p className="mt-6 font-display text-base font-semibold leading-snug">
                  {member.name}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  );
}
