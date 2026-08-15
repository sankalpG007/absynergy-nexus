import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { clients } from "@/data/partners";

export function Clients() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Clients"
          title="Trusted by industry and academia"
          description="Organisations ABsynergy has delivered geospatial and scientific consultancy work for."
          align="center"
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-7 xl:grid-cols-5">
          {clients.map((client, index) => (
            <Reveal key={client.id} delay={(index % 5) * 0.04} className="h-full">
              <div className="group flex h-full flex-col items-center justify-start gap-4 rounded-2xl border border-border bg-cream/60 px-5 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card sm:px-7">
                <span className="grid size-14 shrink-0 place-items-center rounded-full border border-earth/15 bg-background font-display text-sm font-bold text-earth transition-colors group-hover:border-primary/40 group-hover:text-primary">
                  {client.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </span>
                <span className="text-sm font-semibold leading-snug text-foreground">
                  {client.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
