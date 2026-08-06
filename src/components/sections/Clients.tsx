import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { clients } from "@/data/partners";

const sectors = ["Government", "Private", "Research"] as const;

export function Clients() {
  return (
    <section className="bg-surface py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Clients"
          title="Trusted across public, private and research institutions"
          description="Organisation names shown as placeholders pending client publication approval."
        />

        <div className="mt-12 space-y-10">
          {sectors.map((sector, sectorIndex) => (
            <div key={sector}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {sector}
              </h3>
              <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {clients
                  .filter((client) => client.sector === sector)
                  .map((client, index) => (
                    <Reveal key={client.id} delay={(sectorIndex * 0.02) + index * 0.04}>
                      <div className="flex h-full flex-col justify-center bg-card px-6 py-7 transition-colors hover:bg-background">
                        <span className="grid size-9 place-items-center rounded-md bg-secondary font-display text-xs font-bold text-primary">
                          {client.name
                            .split(" ")
                            .slice(0, 2)
                            .map((word) => word[0])
                            .join("")}
                        </span>
                        <span className="mt-4 text-sm font-semibold leading-snug">
                          {client.name}
                        </span>
                        <span className="mt-1 text-xs text-muted-foreground">{client.kind}</span>
                      </div>
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
