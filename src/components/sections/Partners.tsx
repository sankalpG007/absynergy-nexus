import { MapPin, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { partners } from "@/data/partners";

export function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-background py-28 lg:py-36"
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 size-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-20 size-96 rounded-full bg-earth/5 blur-3xl"
      />

      <div className="section-shell relative">

        {/* SECTION HEADER */}
        <SectionHeading
          eyebrow="Technology partners"
          title="An ecosystem of specialist collaborators"
          description="ABsynergy works with specialist organisations and technology collaborators to bring the right expertise, capabilities and solutions to every programme."
          align="center"
        />

        {/* PARTNER COUNT */}
        <Reveal>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-primary/[0.04] px-5 py-2.5">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.45)]" />

              <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-earth">
                {partners.length} Technology Partners
              </span>
            </div>
          </div>
        </Reveal>

        {/* PARTNER CARDS */}
        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {partners.map((partner, index) => (
            <Reveal
              key={partner.id}
              delay={(index % 3) * 0.08}
              className="h-full"
            >
              <article
                className="
                  group relative flex h-full min-h-[390px]
                  flex-col overflow-hidden
                  rounded-[1.75rem]
                  border border-[#ead8c2]
                  bg-[#fffaf3]
                  p-7
                  shadow-[0_12px_35px_rgba(45,25,10,0.06)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-primary/40
                  hover:bg-white
                  hover:shadow-[0_25px_60px_rgba(45,25,10,0.14)]
                "
              >

                {/* Top decorative glow */}
                <div
                  aria-hidden
                  className="
                    pointer-events-none absolute
                    -right-20 -top-20
                    size-48 rounded-full
                    bg-primary/10
                    blur-3xl
                    transition-all duration-700
                    group-hover:scale-125
                    group-hover:bg-primary/20
                  "
                />

                {/* Background index */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none absolute
                    -right-2 -top-5
                    font-display
                    text-[5rem]
                    font-bold
                    leading-none
                    text-earth/[0.035]
                    transition-colors duration-500
                    group-hover:text-primary/[0.07]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* LOGO */}
                <div
                  className="
                    relative flex h-40
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border border-[#ead8c2]
                    bg-white
                    p-6
                    shadow-[0_8px_25px_rgba(80,45,20,0.07)]
                    transition-all duration-500
                    group-hover:border-primary/30
                    group-hover:shadow-[0_15px_35px_rgba(80,45,20,0.12)]
                  "
                >
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="
                      max-h-full
                      max-w-[85%]
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                    loading="lazy"
                  />

                  {/* Logo inner border */}
                  <div
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute inset-0
                      rounded-2xl
                      ring-1 ring-inset ring-earth/5
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="relative mt-7 flex flex-1 flex-col">

                  {/* Label */}
                  <p
                    className="
                      text-[0.58rem]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-primary
                    "
                  >
                    Technology Partner
                  </p>

                  {/* Partner Name */}
                  <h3
                    className="
                      mt-2
                      font-display
                      text-lg
                      font-semibold
                      leading-snug
                      text-earth-deep
                      transition-colors
                      duration-300
                      group-hover:text-primary
                    "
                  >
                    {partner.name}
                  </h3>

                  {/* Address */}
                  <div className="mt-5 flex items-start gap-2.5">

                    <MapPin
                      className="
                        mt-0.5
                        size-4
                        shrink-0
                        text-primary
                      "
                    />

                    <p
                      className="
                        text-sm
                        leading-relaxed
                        text-muted-foreground
                      "
                    >
                      {partner.address}
                    </p>

                  </div>

                  {/* Bottom accent */}
                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      justify-between
                      border-t
                      border-earth/10
                      pt-5
                    "
                  >
                    <span
                      className="
                        text-[0.6rem]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-earth/60
                      "
                    >
                      ABsynergy Network
                    </span>

                    <ArrowUpRight
                      className="
                        size-4
                        text-primary
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </div>

                </div>
              </article>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}