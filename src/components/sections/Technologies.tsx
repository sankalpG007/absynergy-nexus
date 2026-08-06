import { AnimatePresence, motion } from "motion/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { technologies } from "@/data/technologies";
import { cn } from "@/lib/utils";

export function Technologies() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="technologies" className="bg-background py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technologies"
          title="The instruments and methods behind every deliverable"
          description="Select a capability to see how we apply it. Each is supported by in-house equipment, licensed software and documented processing workflows."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const open = openId === tech.id;
            return (
              <Reveal key={tech.id} delay={(index % 3) * 0.05}>
                <motion.button
                  type="button"
                  onClick={() => setOpenId(open ? null : tech.id)}
                  aria-expanded={open}
                  whileTap={{ scale: 0.985 }}
                  className={cn(
                    "group h-full w-full cursor-pointer rounded-xl border bg-card p-7 text-left transition-all duration-300",
                    open
                      ? "border-accent shadow-[var(--shadow-lift)]"
                      : "border-border shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-lift)]",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-accent/12 group-hover:text-accent">
                      <Icon className="size-5" />
                    </span>
                    <span className="grid size-7 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                      {open ? <X className="size-3.5" /> : <Plus className="size-3.5" />}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-semibold">{tech.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{tech.summary}</p>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                          {tech.description}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {tech.capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                            >
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
