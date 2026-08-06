import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";
import { businessUnits } from "@/data/businessUnits";

const unit = businessUnits[0]!;

export const Route = createFileRoute("/vasudhayan")({
  head: () => ({
    meta: [
      { title: "Vasudhayan — Geo-Spatial Intelligence | ABSynergy" },
      {
        name: "description",
        content:
          "Vasudhayan is ABSynergy's geo-spatial intelligence initiative: remote sensing, UAV and LiDAR survey, hydrological modelling and spatial decision systems.",
      },
      { property: "og:title", content: "Vasudhayan — Geo-Spatial Intelligence | ABSynergy" },
      {
        property: "og:description",
        content:
          "Earth observation, survey and analytics programmes for land, water and infrastructure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vasudhayan" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/vasudhayan" }],
  }),
  component: VasudhayanPage,
});

function VasudhayanPage() {
  return <UnitPlaceholder />;
}

function UnitPlaceholder() {
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
