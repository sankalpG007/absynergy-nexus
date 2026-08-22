import { FileText, Play, ExternalLink, Images } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

const typeIcon = {
  image: Images,
  video: Play,
  document: FileText,
} as const;

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 lg:py-32">
      <div className="section-shell">

        <SectionHeading
          eyebrow="Gallery"
          title="From the field, the lab and the archive"
          description="Explore ABsynergy's photographs, videos, technical documentation and field notes through our external media and publishing platforms."
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

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.title}`}
                  className="
                    group
                    relative
                    block
                    size-full
                    cursor-pointer
                    overflow-hidden
                    rounded-xl
                    border
                    border-border
                    text-left
                    outline-none
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/40
                    hover:shadow-[0_20px_50px_rgba(45,25,10,0.15)]
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                  "
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    width={1280}
                    height={853}
                    loading="lazy"
                    className="
                      size-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* DARK GRADIENT */}
                  <span
                    aria-hidden
                    className="
                      absolute
                      inset-0
                      bg-[linear-gradient(to_top,var(--primary-deep)_5%,transparent_65%)]
                      opacity-85
                      transition-opacity
                      duration-500
                      group-hover:opacity-95
                    "
                  />

                  {/* HOVER GLOW */}
                  <span
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      size-40
                      rounded-full
                      bg-primary/20
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* CONTENT */}
                  <span className="absolute inset-x-0 bottom-0 p-5">

                    {/* TYPE */}
                    <span
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        uppercase
                        tracking-[0.14em]
                        text-accent
                      "
                    >
                      <Icon className="size-3.5" />

                      {item.type === "image"
                        ? "Photos"
                        : item.type === "video"
                          ? "Videos"
                          : "Documents"}
                    </span>

                    {/* TITLE */}
                    <span
                      className="
                        mt-2
                        block
                        font-display
                        text-base
                        font-semibold
                        text-ink-foreground
                      "
                    >
                      {item.title}
                    </span>

                    {/* CAPTION */}
                    <span
                      className="
                        mt-1
                        block
                        text-xs
                        text-ink-foreground/70
                      "
                    >
                      {item.caption}
                    </span>

                    {/* OPEN LINK */}
                    <span
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        text-[0.65rem]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-orange-bright
                        opacity-0
                        translate-y-2
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      Open Collection

                      <ExternalLink className="size-3.5" />
                    </span>

                  </span>

                </a>

              </Reveal>
            );
          })}

        </div>
      </div>
    </section>
  );
}