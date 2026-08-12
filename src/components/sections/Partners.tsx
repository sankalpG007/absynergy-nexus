import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { partners } from "@/data/partners";

export function Partners() {
  const marquee = [...partners, ...partners];

  return (
    <section className="overflow-hidden bg-background py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technology partners"
          title="An ecosystem of specialist collaborators"
          align="center"
          description="We work with sensor manufacturers, data providers and modelling specialists so that each programme uses the right instrument, not the available one."
        />
      </div>

      <Reveal className="relative mt-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(to_right,var(--background),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(to_left,var(--background),transparent)]"
        />
        <div className="flex w-max animate-[marquee_46s_linear_infinite] gap-6 px-6 hover:[animation-play-state:paused]">
          {marquee.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex w-72 shrink-0 flex-col justify-center rounded-2xl border border-earth/15 bg-cream/60 px-8 py-9 transition-colors hover:border-primary/50 hover:bg-card"
            >
              <span className="font-display text-base font-semibold leading-snug">
                {partner.name}
              </span>
              <span className="mt-2 text-xs uppercase tracking-[0.14em] text-earth">
                {partner.kind}
              </span>
            </div>
          ))}
        </div>

      </Reveal>

      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
