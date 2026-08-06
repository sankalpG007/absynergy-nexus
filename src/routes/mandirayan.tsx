import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";
import { businessUnits } from "@/data/businessUnits";

const unit = businessUnits[1]!;

export const Route = createFileRoute("/mandirayan")({
  head: () => ({
    meta: [
      { title: "Mandirayan — Temple Ecosystem Solutions | ABSynergy" },
      {
        name: "description",
        content:
          "Mandirayan is ABSynergy's temple ecosystem initiative: heritage 3D documentation, temple land records, conservation planning and facility systems.",
      },
      { property: "og:title", content: "Mandirayan — Temple Ecosystem Solutions | ABSynergy" },
      {
        property: "og:description",
        content:
          "Precision documentation and digital twin technology for temple complexes and heritage assets.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mandirayan" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mandirayan" }],
  }),
  component: MandirayanPage,
});

function MandirayanPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-5 py-24 text-ink-foreground">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-10" />
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="eyebrow">{unit.subtitle}</span>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{unit.name}</h1>
        <p className="mt-6 text-base leading-relaxed text-ink-foreground/70">{unit.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {unit.focus.map((item) => (
            <span
              key={item}
              className="glass-panel-dark rounded-full px-4 py-1.5 text-xs font-medium text-ink-foreground/80"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-10 inline-flex items-center gap-2 rounded-md border border-ink-foreground/20 px-4 py-2 text-sm text-ink-foreground/70">
          <Compass className="size-4 text-accent" />
          A dedicated website for this initiative is in development.
        </p>
        <div className="mt-8">
          <Button asChild variant="onDark" size="lg">
            <Link to="/">
              <ArrowLeft className="size-4" /> Back to ABSynergy
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
