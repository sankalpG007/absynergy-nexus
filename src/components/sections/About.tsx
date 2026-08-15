import {
  ArrowUpRight,
  CalendarDays,
  Compass,
  Database,
  Eye,
  Layers3,
  Sparkles,
  Target,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company } from "@/data/company";

export function About() {
  const { about } = company;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Soft background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[image:var(--gradient-soft)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-12rem] top-20 h-[28rem] w-[28rem] rounded-full bg-primary/5 blur-3xl"
      />

      <div className="section-shell relative">
        {/* ====================================================== */}
        {/* HEADER                                                  */}
        {/* ====================================================== */}

        {/* ====================================================== */}
{/* PREMIUM ABOUT INTRO */}
{/* ====================================================== */}

<Reveal>
  <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-background via-[#fffaf3] to-[#f3e6d4] p-8 shadow-[0_20px_70px_rgba(100,55,20,0.08)] sm:p-10 lg:p-14">
    
    {/* Decorative background */}
    <div
      aria-hidden
      className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
    />

    <div
      aria-hidden
      className="pointer-events-none absolute -bottom-32 -left-20 size-64 rounded-full bg-earth/10 blur-3xl"
    />

    <div className="relative grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
      
      {/* Main heading */}
      <div>
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-background/70 px-4 py-2 backdrop-blur">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]" />

          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-earth">
            About ABsynergy
          </span>

          <span className="h-3 w-px bg-border" />

          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Est. 2014
          </span>
        </div>

        <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-earth-deep sm:text-5xl lg:text-6xl">
          Strategy.
          <span className="text-primary"> Foresight.</span>
          <br />
          Data.
          <span className="text-earth"> Research.</span>
        </h2>

        <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          {about.story}
        </p>
      </div>

      {/* Right-side identity block */}
      <div className="relative lg:justify-self-end">
        <div className="relative overflow-hidden rounded-2xl border border-earth/10 bg-earth p-7 text-ink-foreground shadow-[var(--shadow-lift)]">
          
          <div
            aria-hidden
            className="absolute right-0 top-0 size-40 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-orange-bright">
              Scientific & Technical Consultancy
            </p>

            <p className="mt-5 font-display text-4xl font-bold tracking-tight">
              12+
            </p>

            <p className="mt-1 text-sm text-ink-foreground/70">
              Years of practice
            </p>

            <div className="my-6 h-px bg-white/10" />

            <div className="flex items-center justify-between">
              <span className="text-sm text-ink-foreground/70">
                Projects delivered
              </span>

              <span className="font-display text-2xl font-semibold text-orange-bright">
                100+
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-ink-foreground/70">
                Specialized units
              </span>

              <span className="font-display text-2xl font-semibold text-orange-bright">
                02
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</Reveal>

        {/* ====================================================== */}
        {/* PRACTICE / VISION / MISSION                            */}
        {/* ====================================================== */}

        {/* ====================================================== */}
{/* PRACTICE / VISION / MISSION */}
{/* ====================================================== */}

<div className="mt-14 grid gap-6 lg:grid-cols-3">

  {/* OUR PRACTICE */}
  <Reveal className="h-full">
    <div className="group relative h-full min-h-[340px] overflow-hidden rounded-[1.75rem] border border-earth/10 bg-surface p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_25px_60px_rgba(100,55,20,0.12)] lg:p-9">

      {/* Large background number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-8 font-display text-[9rem] font-bold leading-none text-primary/[0.045] transition-transform duration-700 group-hover:scale-110"
      >
        01
      </span>

      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-[-5rem] size-44 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20"
      />

      <div className="relative flex h-full flex-col">

        <div className="flex items-start justify-between">

          <div className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Sparkles className="size-6" />
          </div>

          <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Identity
          </span>

        </div>

        <div className="mt-10">

          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
            01 / Our practice
          </p>

          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-earth-deep">
            Scientific thinking.
            <br />
            Technical execution.
          </h3>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {about.who}
          </p>

        </div>

        <div className="mt-auto pt-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary transition-all duration-500 group-hover:w-16" />
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              How we work
            </span>
          </div>
        </div>

      </div>
    </div>
  </Reveal>


  {/* VISION */}
  <Reveal delay={0.08} className="h-full">
    <div className="group relative h-full min-h-[340px] overflow-hidden rounded-[1.75rem] border border-earth/10 bg-earth p-8 text-ink-foreground transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(60,35,15,0.22)] lg:p-9">

      {/* Decorative circles */}
      <div
        aria-hidden
        className="absolute -right-16 -top-16 size-48 rounded-full border border-orange-bright/20 transition-transform duration-700 group-hover:scale-125"
      />

      <div
        aria-hidden
        className="absolute -right-6 -top-6 size-28 rounded-full border border-orange-bright/10"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -right-2 font-display text-[9rem] font-bold leading-none text-white/[0.035]"
      >
        02
      </span>

      <div className="relative flex h-full flex-col">

        <div className="flex items-start justify-between">

          <div className="grid size-14 place-items-center rounded-2xl bg-orange-bright/10 text-orange-bright ring-1 ring-orange-bright/20 transition-all duration-500 group-hover:scale-110">
            <Eye className="size-6" />
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white/60">
            Direction
          </span>

        </div>

        <div className="mt-10">

          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-orange-bright">
            02 / Vision
          </p>

          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
            See beyond
            <br />
            the immediate.
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/65">
            {about.vision}
          </p>

        </div>

        <div className="mt-auto pt-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-orange-bright transition-all duration-500 group-hover:w-16" />
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-white/50">
              Where we're going
            </span>
          </div>
        </div>

      </div>
    </div>
  </Reveal>


  {/* MISSION */}
  <Reveal delay={0.16} className="h-full">
    <div className="group relative h-full min-h-[340px] overflow-hidden rounded-[1.75rem] border border-primary/15 bg-gradient-to-br from-[#fff9f0] to-[#f0dfca] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_25px_60px_rgba(100,55,20,0.12)] lg:p-9">

      <span
        aria-hidden
        className="pointer-events-none absolute -right-5 -top-10 font-display text-[9rem] font-bold leading-none text-earth/[0.045] transition-transform duration-700 group-hover:scale-110"
      >
        03
      </span>

      <div
        aria-hidden
        className="absolute bottom-[-5rem] left-[-3rem] size-44 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative flex h-full flex-col">

        <div className="flex items-start justify-between">

          <div className="grid size-14 place-items-center rounded-2xl bg-earth text-orange-bright shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
            <Target className="size-6" />
          </div>

          <span className="rounded-full border border-earth/10 bg-white/50 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-earth/60">
            Purpose
          </span>

        </div>

        <div className="mt-10">

          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
            03 / Mission
          </p>

          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-earth-deep">
            Turning intelligence
            <br />
            into impact.
          </h3>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {about.mission}
          </p>

        </div>

        <div className="mt-auto pt-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary transition-all duration-500 group-hover:w-16" />
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              What we deliver
            </span>
          </div>
        </div>

      </div>
    </div>
  </Reveal>

</div>

        {/* ====================================================== */}
        {/* CORE VALUES                                             */}
        {/* ====================================================== */}

     {/* ====================================================== */}
{/* ABsynergy PRINCIPLES */}
{/* ====================================================== */}

<div className="mt-24">

  <Reveal>
    <div className="relative overflow-hidden rounded-[2rem] border border-earth/10 bg-earth p-8 text-ink-foreground sm:p-10 lg:p-14">

      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute right-[-8rem] top-[-8rem] size-72 rounded-full bg-primary/20 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute bottom-[-10rem] left-[-5rem] size-72 rounded-full bg-orange-bright/10 blur-3xl"
      />

      <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
            <Layers3 className="size-3.5 text-orange-bright" />

            <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/60">
              Our principles
            </span>
          </div>

          <h3 className="mt-6 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Four principles.
            <br />
            <span className="text-orange-bright">
              One ABsynergy approach.
            </span>
          </h3>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            The way we think shapes the way we acquire data, apply
            technology and deliver scientific intelligence.
          </p>

        </div>

        <div className="hidden justify-end lg:flex">
          <div className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/40">
            <span>Think</span>
            <ArrowUpRight className="size-4 text-orange-bright" />
            <span>Measure</span>
            <ArrowUpRight className="size-4 text-orange-bright" />
            <span>Understand</span>
            <ArrowUpRight className="size-4 text-orange-bright" />
            <span>Deliver</span>
          </div>
        </div>

      </div>

      {/* Principles */}
      {/* ==================================================== */}
{/* PRINCIPLES — PREMIUM CARD GRID                      */}
{/* ==================================================== */}

<div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {about.values.map((value, index) => {
    const icons = [
      Compass,
      Eye,
      Database,
      Sparkles,
    ];

    const Icon = icons[index] ?? Sparkles;

    return (
      <Reveal
        key={value.title}
        delay={index * 0.08}
        className="h-full"
      >
        <article
          className="
            group relative h-full min-h-[260px]
            overflow-hidden rounded-[1.5rem]
            border border-[#ead8c2]
            bg-[#fffaf3]
            p-7
            text-earth-deep
            shadow-[0_12px_35px_rgba(45,25,10,0.12)]
            transition-all duration-500
            hover:-translate-y-2
            hover:border-primary/50
            hover:bg-white
            hover:shadow-[0_24px_55px_rgba(45,25,10,0.20)]
          "
        >
          {/* Large background number */}
          <span
            aria-hidden
            className="
              pointer-events-none absolute
              -right-2 -top-5
              font-display text-[7rem]
              font-bold leading-none
              text-earth/[0.055]
              transition-all duration-700
              group-hover:scale-110
              group-hover:text-primary/[0.08]
            "
          >
            0{index + 1}
          </span>

          {/* Decorative orange glow */}
          <div
            aria-hidden
            className="
              pointer-events-none absolute
              -bottom-16 -right-16
              size-40 rounded-full
              bg-primary/10
              blur-3xl
              transition-all duration-500
              group-hover:bg-primary/20
            "
          />

          {/* Card content */}
          <div className="relative flex h-full flex-col">

            {/* Top row */}
            <div className="flex items-start justify-between">

              {/* Icon */}
              <div
                className="
                  grid size-12 place-items-center
                  rounded-2xl
                  border border-primary/20
                  bg-primary/10
                  text-primary
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:rotate-3
                  group-hover:bg-primary
                  group-hover:text-white
                "
              >
                <Icon className="size-5" />
              </div>

              {/* Number badge */}
              <span
                className="
                  rounded-full
                  border border-earth/10
                  bg-earth/[0.04]
                  px-3 py-1
                  text-[0.58rem]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-earth/55
                  transition-colors duration-300
                  group-hover:border-primary/20
                  group-hover:text-primary
                "
              >
                Principle 0{index + 1}
              </span>
            </div>

            {/* Text */}
            <div className="mt-8">

              <p
                className="
                  text-[0.58rem]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-primary
                "
              >
                ABsynergy principle
              </p>

              <h4
                className="
                  mt-2
                  font-display
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-earth-deep
                  transition-colors duration-300
                  group-hover:text-primary
                "
              >
                {value.title}
              </h4>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-earth/70
                "
              >
                {value.description}
              </p>
            </div>

            {/* Bottom accent */}
            <div className="mt-auto flex items-center gap-3 pt-7">

              <span
                className="
                  h-[2px]
                  w-7
                  rounded-full
                  bg-primary/40
                  transition-all duration-500
                  group-hover:w-12
                  group-hover:bg-primary
                "
              />

              <span
                className="
                  text-[0.55rem]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-earth/40
                  transition-colors duration-300
                  group-hover:text-earth/60
                "
              >
                Strategy • Foresight • Data • Research
              </span>

            </div>

          </div>
        </article>
      </Reveal>
    );
  })}
</div>

    </div>
  </Reveal>

</div>

        {/* ====================================================== */}
        {/* CHRONOLOGY / TIMELINE                                   */}
        {/* ====================================================== */}

        <div className="mt-28">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Chronology of events</p>

                <h3 className="mt-3 max-w-2xl text-2xl font-semibold sm:text-3xl lg:text-4xl">
                  From 2014 to capacity building
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  A progression from establishing the consultancy to expanding
                  technical capabilities and introducing structured capacity
                  building programmes.
                </p>
              </div>

              <div className="hidden shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted-foreground md:flex">
                <span className="size-1.5 rounded-full bg-primary" />
                ABsynergy journey
              </div>
            </div>
          </Reveal>

          {/* ==================================================== */}
          {/* DESKTOP TIMELINE                                      */}
          {/* ==================================================== */}

          <div className="relative mt-16 hidden lg:block">
            {/* Main horizontal line */}
            <div
              aria-hidden
              className="absolute left-[6%] right-[6%] top-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            />

            {/* Animated glow behind the line */}
            <div
              aria-hidden
              className="absolute left-[8%] right-[8%] top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 blur-md"
            />

            <div className="grid grid-cols-4 gap-6">
              {about.timeline.map((item, index) => {
                const isTop = index % 2 === 0;
                const isLatest = index === about.timeline.length - 1;

                return (
                  <Reveal
                    key={item.year}
                    delay={index * 0.12}
                    className="relative"
                  >
                    <div className="relative flex min-h-[30rem] flex-col justify-between">
                      {/* TOP CARD */}
                      {isTop ? (
                        <div className="flex flex-1 items-end pb-12">
                          <TimelineCard
                            item={item}
                            index={index}
                            isLatest={isLatest}
                          />
                        </div>
                      ) : (
                        <div className="flex-1" />
                      )}

                      {/* CENTER NODE */}
                      <div className="relative z-10 flex h-0 items-center justify-center">
                        <div
                          className={`relative grid size-8 place-items-center rounded-full border-4 border-background transition-all duration-300 ${
                            isLatest
                              ? "bg-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.12),0_0_28px_hsl(var(--primary)/0.35)]"
                              : "bg-earth shadow-[0_0_0_5px_hsl(var(--background))]"
                          }`}
                        >
                          <span className="size-2 rounded-full bg-background" />

                          {isLatest && (
                            <span className="absolute inset-[-7px] animate-ping rounded-full border border-primary/30" />
                          )}
                        </div>
                      </div>

                      {/* BOTTOM CARD */}
                      {!isTop ? (
                        <div className="flex flex-1 items-start pt-12">
                          <TimelineCard
                            item={item}
                            index={index}
                            isLatest={isLatest}
                          />
                        </div>
                      ) : (
                        <div className="flex-1" />
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ==================================================== */}
          {/* MOBILE / TABLET TIMELINE                              */}
          {/* ==================================================== */}

          <div className="relative mt-12 lg:hidden">
            {/* Vertical timeline line */}
            <div
              aria-hidden
              className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
            />

            <div className="space-y-10">
              {about.timeline.map((item, index) => {
                const isLatest = index === about.timeline.length - 1;

                return (
                  <Reveal
                    key={item.year}
                    delay={index * 0.08}
                    className="relative pl-12"
                  >
                    {/* Node */}
                    <div
                      className={`absolute left-0 top-1 grid size-8 place-items-center rounded-full border-4 border-background ${
                        isLatest
                          ? "bg-primary shadow-[0_0_0_5px_hsl(var(--primary)/0.12)]"
                          : "bg-earth"
                      }`}
                    >
                      <span className="size-1.5 rounded-full bg-background" />
                    </div>

                    <TimelineCard
                      item={item}
                      index={index}
                      isLatest={isLatest}
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ */
/* TIMELINE CARD                                                     */
/* ================================================================ */

function TimelineCard({
  item,
  index,
  isLatest,
}: {
  item: {
    year: string;
    title: string;
    text: string;
  };
  index: number;
  isLatest: boolean;
}) {
  return (
    <div
      className={`group relative w-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
        isLatest
          ? "border-primary/40 bg-primary/[0.045] shadow-[0_12px_40px_hsl(var(--primary)/0.10)]"
          : "border-border bg-surface hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
      }`}
    >
      {/* Latest badge */}
      {isLatest && (
        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          Latest
        </div>
      )}

      {/* Step number */}
      <div className="flex items-center justify-between">
        <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Milestone 0{index + 1}
        </span>

        <CalendarDays className="size-4 text-primary/70" />
      </div>

      {/* Year */}
      <p className="mt-5 font-display text-3xl font-bold tracking-tight text-primary">
        {item.year}
      </p>

      {/* Title */}
      <h4 className="mt-2 text-base font-semibold text-foreground">
        {item.title}
      </h4>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {item.text}
      </p>

      {/* Bottom accent */}
      <div className="mt-6 flex items-center gap-2">
        <span
          className={`h-1 rounded-full transition-all duration-500 ${
            isLatest
              ? "w-12 bg-primary"
              : "w-6 bg-primary/30 group-hover:w-12 group-hover:bg-primary"
          }`}
        />

        <span className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}