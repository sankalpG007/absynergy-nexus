import { useCallback, useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export function FlipCard({
  front,
  back,
  label,
  className,
  heightClass = "h-[19rem] sm:h-[20rem]",
}: {
  front: ReactNode;
  back: ReactNode;
  label: string;
  className?: string;
  heightClass?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => {
      setCanHover(mql.matches);
    };

    update();

    mql.addEventListener("change", update);

    return () => {
      mql.removeEventListener("change", update);
    };
  }, []);

  /*
   * Desktop:
   * Hover controls the flip.
   *
   * Mobile:
   * Tap/click controls the flip.
   *
   * Keeping these two behaviours separate prevents
   * hover + click from fighting each other.
   */
  const isFlipped = canHover ? hovered : flipped;

  const toggleMobile = useCallback(() => {
    if (!canHover) {
      setFlipped((current) => !current);
    }
  }, [canHover]);

  return (
    /*
     * IMPORTANT:
     * This outer element NEVER rotates.
     *
     * It remains the stable mouse hit area.
     */
    <div
      className={cn(
        "perspective-1000 relative",
        heightClass,
        className
      )}
      onMouseEnter={() => {
        if (canHover) {
          setHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (canHover) {
          setHovered(false);
        }
      }}
    >
      {/*
       * This is the element that actually rotates.
       */}
      <div
        role="button"
        tabIndex={0}
        aria-label={`${label} — activate to reveal details`}
        aria-pressed={isFlipped}
        onClick={toggleMobile}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setFlipped((current) => !current);
          }
        }}
        style={{
          transform: isFlipped
            ? "rotateY(180deg)"
            : "rotateY(0deg)",
        }}
        className="
          preserve-3d
          relative
          size-full
          cursor-pointer
          rounded-2xl
          outline-none
          transition-transform
          duration-[600ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          focus-visible:ring-2
          focus-visible:ring-primary
          focus-visible:ring-offset-2
        "
      >
        {/* FRONT */}
        <div
          className="
            backface-hidden
            absolute
            inset-0
            overflow-hidden
            rounded-2xl
            border
            border-earth/15
            bg-cream
            shadow-[var(--shadow-card)]
          "
        >
          {front}
        </div>

        {/* BACK */}
        <div
          style={{
            transform: "rotateY(180deg)",
          }}
          className="
            backface-hidden
            absolute
            inset-0
            overflow-hidden
            rounded-2xl
            border
            border-orange-bright/25
            bg-earth
            text-ink-foreground
            shadow-[var(--shadow-lift)]
          "
        >
          {back}
        </div>
      </div>
    </div>
  );
}