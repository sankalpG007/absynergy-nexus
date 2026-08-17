import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { clients } from "@/data/partners";

export function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-background py-28 lg:py-36"
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 size-80 rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-10 size-96 rounded-full bg-earth/5 blur-3xl"
      />

      <div className="section-shell relative">

        {/* SECTION HEADER */}
        <SectionHeading
          eyebrow="Clients"
          title="Trusted by industry and academia"
          description="Organisations ABsynergy has delivered geospatial and scientific consultancy work for."
          align="center"
        />

        {/* CLIENT COUNT */}
        <Reveal>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-primary/[0.04] px-5 py-2.5">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />

              <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-earth">
                {clients.length} Organisations
              </span>
            </div>
          </div>
        </Reveal>

        {/* CLIENT GRID */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {clients.map((client, index) => (
            <Reveal
              key={client.id}
              delay={(index % 4) * 0.06}
              className="h-full"
            >
              <article
                className="
                  group relative flex h-full min-h-[245px]
                  flex-col items-center justify-between
                  overflow-hidden rounded-[1.5rem]
                  border border-[#ead8c2]
                  bg-[#fffaf3]
                  px-6 py-7
                  text-center
                  shadow-[0_10px_30px_rgba(45,25,10,0.06)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-primary/40
                  hover:bg-white
                  hover:shadow-[0_24px_55px_rgba(45,25,10,0.14)]
                "
              >

                {/* Decorative glow */}
                <div
                  aria-hidden
                  className="
                    pointer-events-none absolute
                    -right-16 -top-16
                    size-40 rounded-full
                    bg-primary/10
                    blur-3xl
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
                    -right-1 -top-4
                    font-display text-[5rem]
                    font-bold leading-none
                    text-earth/[0.035]
                    transition-all duration-700
                    group-hover:text-primary/[0.07]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex w-full flex-col items-center">

                  {/* LOGO CONTAINER */}
                  <div
                    className="
                      relative grid size-24
                      place-items-center
                      overflow-hidden
                      rounded-2xl
                      border border-[#ead8c2]
                      bg-white
                      p-4
                      shadow-[0_8px_25px_rgba(80,45,20,0.08)]
                      transition-all duration-500
                      group-hover:scale-105
                      group-hover:border-primary/30
                      group-hover:shadow-[0_12px_30px_rgba(80,45,20,0.14)]
                    "
                  >
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={`${client.name} logo`}
                        className="
                          max-h-full
                          max-w-full
                          object-contain
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        "
                        loading="lazy"
                      />
                    ) : (
                      <span
                        className="
                          font-display
                          text-xl
                          font-bold
                          tracking-tight
                          text-earth
                          transition-colors
                          duration-300
                          group-hover:text-primary
                        "
                      >
                        {client.name
                          .split(" ")
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((word) => word[0])
                          .join("")}
                      </span>
                    )}

                    {/* Inner logo highlight */}
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

                  {/* ORGANISATION TYPE */}
                  <p
                    className="
                      mt-5
                      text-[0.58rem]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-primary
                    "
                  >
                    {client.kind}
                  </p>

                  {/* NAME */}
                  <h3
                    className="
                      mt-2
                      max-w-[240px]
                      text-sm
                      font-semibold
                      leading-6
                      text-earth-deep
                      transition-colors
                      duration-300
                      group-hover:text-primary
                    "
                  >
                    {client.name}
                  </h3>
                </div>

                {/* BOTTOM ACCENT */}
                <div className="relative mt-6 flex w-full items-center justify-center gap-3">
                  <span
                    className="
                      h-[2px]
                      w-7
                      rounded-full
                      bg-primary/25
                      transition-all
                      duration-500
                      group-hover:w-12
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
                      h-[2px]
                      w-7
                      rounded-full
                      bg-primary/25
                      transition-all
                      duration-500
                      group-hover:w-12
                      group-hover:bg-primary
                    "
                  />
                </div>

              </article>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}