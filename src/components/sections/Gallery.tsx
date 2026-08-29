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
    <section
      id="gallery"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          size-80
          rounded-full
          bg-primary/5
          blur-3xl
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          size-96
          rounded-full
          bg-earth/5
          blur-3xl
        "
      />

      <div className="section-shell relative">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <SectionHeading
          eyebrow="Gallery"
          title="From the field, the lab and the archive"
          description="Explore ABsynergy's photographs, videos, technical documentation and field notes through our external media and publishing platforms."
        />

        {/* =========================================================
            GALLERY GRID
        ========================================================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
            lg:grid-rows-[260px_260px_260px]
          "
        >
          {galleryItems.map((item, index) => {
            const Icon = typeIcon[item.type];

            /*
             * Custom editorial layout:
             *
             * 1 → large featured card
             * 2 → tall right-side card
             * 3 → medium card
             * 4 → wide bottom card
             */

            const cardLayout =
              index === 0
                ? "md:col-span-2 lg:col-span-2 lg:row-span-1"
                : index === 1
                  ? "md:col-span-1 lg:col-span-1 lg:row-span-2"
                  : index === 2
                    ? "md:col-span-1 lg:col-span-2 lg:row-span-1"
                    : "md:col-span-2 lg:col-span-2 lg:row-span-1";

            return (
              <Reveal
                key={item.id}
                delay={(index % 3) * 0.06}
                className={cn(
                  "min-h-[260px]",
                  cardLayout,
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
                    h-full
                    min-h-[260px]
                    cursor-pointer
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#211710]
                    text-left
                    outline-none
                    shadow-[0_15px_45px_rgba(45,25,10,0.10)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-primary/40
                    hover:shadow-[0_25px_65px_rgba(45,25,10,0.22)]
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                  "
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <img
                    src={item.image}
                    alt={item.title}
                    width={1280}
                    height={853}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="
                      absolute
                      inset-0
                      size-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.07]
                    "
                  />

                  {/* =================================================
                      DARK GRADIENT
                  ================================================= */}

                  <span
                    aria-hidden
                    className="
                      absolute
                      inset-0
                      bg-[linear-gradient(
                        to_top,
                        rgba(30,15,7,0.96)_0%,
                        rgba(30,15,7,0.72)_32%,
                        rgba(30,15,7,0.18)_68%,
                        rgba(30,15,7,0.02)_100%
                      )]
                      transition-all
                      duration-500
                      group-hover:bg-[linear-gradient(
                        to_top,
                        rgba(30,15,7,0.98)_0%,
                        rgba(30,15,7,0.76)_38%,
                        rgba(30,15,7,0.22)_72%,
                        rgba(30,15,7,0.05)_100%
                      )]
                    "
                  />

                  {/* =================================================
                      HOVER GLOW
                  ================================================= */}

                  <span
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      size-56
                      rounded-full
                      bg-primary/20
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* =================================================
                      TOP-RIGHT NUMBER
                  ================================================= */}

                  <span
                    aria-hidden
                    className="
                      absolute
                      right-5
                      top-4
                      font-display
                      text-6xl
                      font-bold
                      leading-none
                      text-white/10
                      transition-colors
                      duration-500
                      group-hover:text-primary/20
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-10
                      p-6
                      sm:p-7
                    "
                  >

                    {/* TYPE */}
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-[0.68rem]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-orange-300
                      "
                    >
                      <Icon className="size-4" />

                      <span>
                        {item.type === "image"
                          ? "Photos"
                          : item.type === "video"
                            ? "Videos"
                            : "Documents"}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        mt-2
                        max-w-2xl
                        font-display
                        text-lg
                        font-bold
                        leading-snug
                        text-white
                        drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        sm:text-xl
                        lg:text-[1.35rem]
                      "
                    >
                      {item.title}
                    </h3>

                    {/* CAPTION */}
                    <p
                      className="
                        mt-2
                        max-w-2xl
                        text-sm
                        font-medium
                        leading-6
                        text-white/85
                        drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]
                      "
                    >
                      {item.caption}
                    </p>

                    {/* OPEN COLLECTION */}
                    <div
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        text-[0.68rem]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-orange-300
                        opacity-80
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-orange-200
                        group-hover:opacity-100
                      "
                    >
                      <span>Open Collection</span>

                      <ExternalLink
                        className="
                          size-3.5
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================= */}

                  <span
                    aria-hidden
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-primary
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}