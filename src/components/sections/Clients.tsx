import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { clients } from "@/data/partners";

export function Clients() {
  return (
    <section className="bg-surface py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Clients"
          title="Trusted by trusts, departments, industry and academia"
          description="Organisations ABsynergy has delivered geospatial and scientific consultancy work for."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <Reveal key={client.id} delay={(index % 4) * 0.04}>
              <div className="flex h-full flex-col justify-center bg-card px-6 py-7 transition-colors hover:bg-background">
                <span className="grid size-9 place-items-center rounded-md bg-secondary font-display text-xs font-bold text-primary">
                  {client.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </span>
                <span className="mt-4 text-sm font-semibold leading-snug">{client.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
