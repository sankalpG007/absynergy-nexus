import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Droplets,
  Leaf,
  Mountain,
  Waves,
  Building2,
  FileArchive,
  LayoutGrid,
  UsersRound,
  ScanLine,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { businessUnits } from "@/data/businessUnits";

const vasudhayanIcons = [
  Leaf,
  Droplets,
  Mountain,
  Leaf,
  Building2,
  Waves,
  ScanLine,
];

const mandirayanIcons = [
  FileArchive,
  LayoutGrid,
  FileArchive,
  UsersRound,
];

export function BusinessUnits() {
  return (
    <section
      id="business-units"
      className="relative overflow-hidden bg-[#211710] py-24 text-white lg:py-32"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      {/* Soft central glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[120px]"
      />

      {/* Top-right dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(241,133,36,0.55) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to bottom left, black, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom left, black, transparent 75%)",
        }}
      />

      {/* Bottom-left orange glow (was green) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[120px]"
      />

      <div className="section-shell relative">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <Reveal>
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-orange-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                Our Initiatives
              </p>
            </div>

            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Two specialised units
              <br />
              under one{" "}
              <span className="text-orange-400">scientific standard.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              ABsynergy delivers through two specialised units — Vasudhayan
              (Think Spatial) and Mandirayan™, a registered trademark entity
              for temple town ecosystem solutions.
            </p>
          </div>
        </Reveal>

        {/* =========================================================
            BUSINESS UNIT CARDS
        ========================================================= */}

        <div className="mt-14 grid gap-7 lg:grid-cols-2 lg:gap-8">
          {businessUnits.map((unit, index) => {
            const isVasudhayan = unit.id === "vasudhayan";

            const icons = isVasudhayan ? vasudhayanIcons : mandirayanIcons;

            // Shared orange theme classes (both units use the same orange styling now)
            const cardTheme =
              "border-orange-900/10 bg-[#fff6e9] text-[#4a2918] hover:shadow-[0_30px_80px_rgba(180,80,20,0.22)]";
            const decorativePatternBg =
              "bg-[radial-gradient(circle,rgba(220,100,25,0.18)_1px,transparent_1px)]";
            const decorativeGlowBg = "bg-orange-300/30";
            const badgeGradient = "bg-gradient-to-br from-[#ef8123] to-[#b94c0d] text-white";
            const unitNumberClasses = "border-orange-800/15 text-orange-800/70";
            const unitDotBg = "bg-orange-500";
            const subtitleColor = "text-orange-700";
            const underlineColor = "bg-orange-500";
            const descriptionColor = "text-[#4a2918]/70";
            const focusItemClasses =
              "border-orange-800/20 bg-white/55 text-orange-950 hover:border-orange-700/40 hover:bg-orange-50";
            const bottomIllustrationText = "text-orange-700";
            const ctaButtonClasses = "bg-[#df6b17] text-white hover:bg-[#c4570c]";

            return (
              <Reveal key={unit.id} delay={index * 0.12} className="h-full">
                <article
                  className={`
                    group relative flex h-full min-h-[620px]
                    flex-col overflow-hidden rounded-[2rem]
                    border
                    p-7 shadow-2xl
                    transition-all duration-500
                    hover:-translate-y-2
                    sm:p-9
                    lg:p-10
                    ${cardTheme}
                  `}
                >
                  {/* =================================================
                      DECORATIVE PATTERN
                  ================================================= */}

                  <div
                    aria-hidden
                    className={`
                      pointer-events-none absolute right-0 top-0
                      h-64 w-64 opacity-50
                      transition-all duration-700
                      group-hover:scale-110 group-hover:opacity-70
                      ${decorativePatternBg}
                    `}
                    style={{
                      backgroundSize: "12px 12px",
                      maskImage:
                        "linear-gradient(to bottom left, black, transparent 75%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom left, black, transparent 75%)",
                    }}
                  />

                  {/* Decorative glow */}
                  <div
                    aria-hidden
                    className={`
                      pointer-events-none absolute -right-24 -top-24
                      h-72 w-72 rounded-full blur-3xl
                      transition-all duration-700
                      group-hover:scale-125
                      ${decorativeGlowBg}
                    `}
                  />

                  {/* =================================================
                      TOP ROW
                  ================================================= */}

                  <div className="relative flex items-start justify-between">
                    {/* Identity Badge */}
                    <div
                      className={`
                        grid h-20 w-20 place-items-center
                        rounded-2xl shadow-lg
                        transition-transform duration-500
                        group-hover:scale-105 group-hover:-rotate-2
                        ${badgeGradient}
                      `}
                    >
                      <span className="font-display text-4xl font-semibold">
                        {unit.name.charAt(0)}
                      </span>
                    </div>

                    {/* Unit Number */}
                    <div
                      className={`
                        flex items-center gap-2 rounded-full
                        border px-3 py-1.5
                        text-[10px] font-bold uppercase tracking-[0.18em]
                        ${unitNumberClasses}
                      `}
                    >
                      <span
                        className={`
                          h-1.5 w-1.5 rounded-full
                          ${unitDotBg}
                        `}
                      />
                      Unit 0{index + 1}
                    </div>
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================= */}

                  <div className="relative mt-9">
                    <p
                      className={`
                        text-[11px] font-bold uppercase
                        tracking-[0.2em]
                        ${subtitleColor}
                      `}
                    >
                      {unit.subtitle}
                    </p>

                    <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                      {unit.name}
                    </h3>

                    <div
                      className={`
                        mt-5 h-1 w-16 rounded-full
                        transition-all duration-500
                        group-hover:w-24
                        ${underlineColor}
                      `}
                    />
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p
                    className={`
                      relative mt-7 max-w-xl text-sm leading-7
                      ${descriptionColor}
                    `}
                  >
                    {unit.description}
                  </p>

                  {/* =================================================
                      FOCUS AREAS
                  ================================================= */}

                  <div className="relative mt-8">
                    <p
                      className={`
                        mb-4 text-[10px] font-bold uppercase
                        tracking-[0.18em]
                        text-orange-800/60
                      `}
                    >
                      Core Focus Areas
                    </p>

                    <ul className="flex flex-wrap gap-2.5">
                      {unit.focus.map((item, focusIndex) => {
                        const Icon = icons[focusIndex % icons.length];

                        return (
                          <li
                            key={item}
                            className={`
                              inline-flex items-center gap-2
                              rounded-full border
                              px-3.5 py-2
                              text-xs font-medium
                              transition-all duration-300
                              ${focusItemClasses}
                            `}
                          >
                            <Icon className="h-3.5 w-3.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* =================================================
                      DECORATIVE BOTTOM ILLUSTRATION
                  ================================================= */}

                  <div
                    aria-hidden
                    className={`
                      pointer-events-none absolute bottom-0 right-0
                      h-44 w-72 opacity-20
                      transition-all duration-700
                      group-hover:translate-x-2
                      ${bottomIllustrationText}
                    `}
                  >
                    {isVasudhayan ? (
                      <svg
                        viewBox="0 0 400 180"
                        className="h-full w-full"
                        fill="none"
                      >
                        <path
                          d="M0 150 C70 120 90 135 150 100 C210 65 245 110 300 75 C340 50 365 65 400 25"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M0 165 C80 130 110 150 175 115 C235 82 280 125 330 90 C360 70 380 80 400 55"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M0 178 C90 145 125 170 190 130 C250 95 300 140 350 105 C370 90 390 100 400 82"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 400 180"
                        className="h-full w-full"
                        fill="none"
                      >
                        {/* Temple silhouette */}
                        <path
                          d="M170 170V105H230V170M145 105H255L230 80H170L145 105Z"
                          fill="currentColor"
                          opacity="0.35"
                        />
                        <path
                          d="M185 80V62H215V80M180 62L200 35L220 62M190 48L200 20L210 48"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M120 170H280M135 150H265"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          d="M155 105V170M245 105V170"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                      </svg>
                    )}
                  </div>

                  {/* =================================================
                      CTA
                  ================================================= */}

                  <div className="relative mt-auto pt-10">
                    <Button
                      asChild
                      size="lg"
                      className={`
                        group/btn rounded-xl px-6
                        font-semibold shadow-md
                        transition-all duration-300
                        hover:gap-4
                        ${ctaButtonClasses}
                      `}
                    >
                      <Link to={unit.href}>
                        Know More
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm leading-6 text-white/45">
              Two specialised units. One scientific foundation. One
              integrated vision for technology-driven decision making.
            </p>

            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-orange-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              ABsynergy Ecosystem
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
