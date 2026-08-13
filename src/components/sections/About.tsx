import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
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

        <SectionHeading
          eyebrow="About ABsynergy"
          title="Strategy, foresight, data and research since 2014"
          description={about.story}
        />

        {/* ====================================================== */}
        {/* PRACTICE / VISION / MISSION                            */}
        {/* ====================================================== */}

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Reveal className="h-full">
            <div className="surface-card group h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Our practice</h3>

                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Sparkles className="size-4" />
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {about.who}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="surface-card group h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Vision</h3>

                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="size-4 -rotate-45" />
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {about.vision}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="h-full">
            <div className="surface-card group h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Mission</h3>

                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <CalendarDays className="size-4" />
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {about.mission}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ====================================================== */}
        {/* CORE VALUES                                             */}
        {/* ====================================================== */}

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 0.06}
              className="h-full"
            >
              <div className="group h-full rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold tracking-[0.18em] text-accent">
                    0{index + 1}
                  </span>

                  <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
                </div>

                <h4 className="mt-5 text-base font-semibold">
                  {value.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
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