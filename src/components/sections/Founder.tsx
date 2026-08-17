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

{/* ====================================================== */}
{/* TEAM & LEADERSHIP */}
{/* ====================================================== */}

<div className="section-shell mt-24 lg:mt-28">
  <Reveal>
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow">Team & Leadership</p>

          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-earth-deep sm:text-4xl lg:text-[2.75rem]">
            Senior advisors, subject experts
            <br className="hidden sm:block" />
            <span className="text-primary"> and associates.</span>
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            ABsynergy brings together experienced professionals, domain experts
            and technical associates across geospatial technology, environment,
            water, heritage, project management and digital technology.
          </p>
        </div>

        {/* Team count */}
        <div className="hidden shrink-0 items-center gap-3 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-earth md:flex">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
          {company.team.length} Team Members
        </div>
      </div>
    </div>
  </Reveal>

  {/* TEAM GRID */}
  <div className="mx-auto mt-10 max-w-5xl">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {company.team.map((member, index) => (
        <Reveal
          key={member.name}
          delay={(index % 4) * 0.05}
          className="h-full"
        >
          <article
            className="
              group relative flex h-full min-h-[295px]
              flex-col overflow-hidden
              rounded-2xl
              border border-[#ead8c2]
              bg-[#fffaf3]
              p-5
              text-center
              shadow-[0_8px_24px_rgba(45,25,10,0.055)]
              transition-all duration-500
              hover:-translate-y-1.5
              hover:border-primary/40
              hover:bg-white
              hover:shadow-[0_18px_40px_rgba(45,25,10,0.12)]
            "
          >
            {/* Decorative glow */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute
                -right-14 -top-14
                size-32 rounded-full
                bg-primary/10
                blur-3xl
                opacity-50
                transition-all duration-500
                group-hover:scale-125
                group-hover:bg-primary/20
              "
            />

            {/* Background number */}
            <span
              aria-hidden
              className="
                pointer-events-none absolute
                -right-1 -top-3
                font-display text-[4.5rem]
                font-bold leading-none
                text-earth/[0.035]
                transition-all duration-700
                group-hover:text-primary/[0.07]
                group-hover:scale-110
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative flex h-full flex-col items-center">

              {/* ================================================= */}
              {/* MEMBER PHOTO */}
              {/* ================================================= */}

              <div
                className="
                  relative size-[88px]
                  shrink-0
                  overflow-hidden
                  rounded-full
                  border-[3px] border-white
                  bg-[#f3e5d3]
                  shadow-[0_6px_20px_rgba(80,45,20,0.10)]
                  ring-1 ring-primary/20
                  transition-all duration-500
                  group-hover:scale-105
                  group-hover:ring-primary/40
                  group-hover:shadow-[0_10px_28px_rgba(80,45,20,0.16)]
                "
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="
                      h-full w-full
                      object-cover
                      object-center
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                    loading="lazy"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <span className="font-display text-lg font-bold text-earth">
                      {member.name
                        .split(" ")
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join("")}
                    </span>
                  </div>
                )}

                {/* Photo highlight */}
                <div
                  aria-hidden
                  className="
                    pointer-events-none absolute inset-0
                    rounded-full
                    ring-1 ring-inset ring-primary/10
                  "
                />
              </div>

              {/* ================================================= */}
              {/* MEMBER INFORMATION */}
              {/* ================================================= */}

              <div className="mt-5 flex flex-1 flex-col items-center">

                {/* Organization label */}
                <p
                  className="
                    text-[0.52rem]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-primary
                  "
                >
                  ABsynergy
                </p>

                {/* Name */}
                <h4
                  className="
                    mt-1.5
                    max-w-[210px]
                    font-display
                    text-[1rem]
                    font-semibold
                    leading-snug
                    tracking-tight
                    text-earth-deep
                    transition-colors duration-300
                    group-hover:text-primary
                  "
                >
                  {member.name}
                </h4>

                {/* Role */}
                <p
                  className="
                    mt-2
                    max-w-[220px]
                    text-xs
                    leading-5
                    text-muted-foreground
                  "
                >
                  {member.role}
                </p>
              </div>

              {/* ================================================= */}
              {/* BOTTOM ACCENT */}
              {/* ================================================= */}

              <div className="mt-5 w-full">
                <div className="flex items-center justify-center gap-2.5">
                  <span
                    className="
                      h-px w-6
                      rounded-full
                      bg-primary/25
                      transition-all duration-500
                      group-hover:w-10
                      group-hover:bg-primary
                    "
                  />

                  <span
                    className="
                      size-1
                      rounded-full
                      bg-primary/40
                    "
                  />

                  <span
                    className="
                      h-px w-6
                      rounded-full
                      bg-primary/25
                      transition-all duration-500
                      group-hover:w-10
                      group-hover:bg-primary
                    "
                  />
                </div>
              </div>

            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</div>

    </section>
  );
}
