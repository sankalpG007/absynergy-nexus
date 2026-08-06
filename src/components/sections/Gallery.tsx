import { AnimatePresence, motion } from "motion/react";
import { FileText, Play, X, ZoomIn } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

const typeIcon = {
  image: ZoomIn,
  video: Play,
  document: FileText,
} as const;

export function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="bg-background py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="From the field, the lab and the archive"
          description="Imagery, mission footage and published documentation from our programmes. Blog and technical notes will be added to this library."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => {
            const Icon = typeIcon[item.type];
            return (
              <Reveal
                key={item.id}
                delay={(index % 3) * 0.05}
                className={cn(
                  item.span === "wide" && "sm:col-span-2",
                  item.span === "tall" && "row-span-2",
                )}
              >
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  className="group relative size-full cursor-pointer overflow-hidden rounded-xl border border-border text-left"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={1280}
                    height={853}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(to_top,var(--primary-deep)_5%,transparent_65%)] opacity-85" />
                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-accent">
                      <Icon className="size-3.5" /> {item.type}
                    </span>
                    <span className="mt-2 block font-display text-base font-semibold text-ink-foreground">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs text-ink-foreground/70">
                      {item.caption}
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/85 px-4 py-10 backdrop-blur-sm"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 grid size-10 cursor-pointer place-items-center rounded-full border border-ink-foreground/25 text-ink-foreground"
            >
              <X className="size-5" />
            </button>
            <motion.figure
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-4xl"
            >
              <img
                src={active.image}
                alt={active.title}
                width={1280}
                height={853}
                className="w-full rounded-xl object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-ink-foreground/75">
                <span className="font-semibold text-ink-foreground">{active.title}</span> —{" "}
                {active.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
