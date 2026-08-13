import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const sectionIds = company.navigation.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-panel border-x-0 border-t-0 py-2" : "border-transparent py-4",
      )}
    >
      <nav className="section-shell flex items-center justify-between gap-4" aria-label="Primary">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 shrink-0 place-items-center rounded-md bg-brand-gradient text-sm font-bold text-primary-foreground">
            AB
          </span>
          <span className="min-w-0">
            <span className={cn("block truncate font-display text-base font-semibold leading-tight", scrolled ? "text-foreground" : "text-ink-foreground")}>
              {company.name}
            </span>
            <span className={cn("block truncate text-[0.65rem] uppercase tracking-[0.18em]", scrolled ? "text-muted-foreground" : "text-ink-foreground/60")}>
              Scientific and Technical Consultancy
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {company.navigation.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active === id
                    ? "text-accent"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-ink-foreground/75 hover:text-ink-foreground",
                )}
              >
                {item.label}
                {active === id ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" />
                ) : null}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="default">
            <a href="#business-enquiry">Enquiry Forms</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-md border lg:hidden",
            scrolled ? "border-border text-foreground" : "border-ink-foreground/25 text-ink-foreground",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="glass-panel mt-2 border-x-0 lg:hidden">
          <div className="section-shell flex flex-col py-4">
            {company.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-4">
              <a href="#business-enquiry" onClick={() => setOpen(false)}>
                Enquiry Forms
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
