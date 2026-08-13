import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  index,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  index?: string;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "relative max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-16 -z-10 hidden size-52 contour-lines opacity-[0.18] sm:block",
          align === "center" ? "left-1/2 -translate-x-1/2" : "-left-10",
        )}
      />
      <p
        className={cn(
          "flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]",
          align === "center" && "justify-center",
          tone === "dark" ? "text-orange-bright" : "text-accent",
        )}
      >
        {index ? (
          <>
            <span className={tone === "dark" ? "text-ink-foreground/50" : "text-earth/60"}>
              {index}
            </span>
            <span aria-hidden className={tone === "dark" ? "text-ink-foreground/30" : "text-earth/30"}>
              —
            </span>
          </>
        ) : null}
        <span>{eyebrow}</span>
      </p>
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
