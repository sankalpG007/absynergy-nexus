import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { projectCategories, projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="bg-background py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected engagements across sectors and geographies"
          description="A representative sample of delivered and ongoing programmes. Detailed case notes are available on request under confidentiality terms."
        />

        <Reveal className="mt-10 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              {category}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} project for ${project.client}`}
                    width={1280}
                    height={853}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[linear-gradient(to_top,var(--deep-brown),transparent_62%)] opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                  />
                  <span className="glass-panel absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold">
                    {project.category}
                  </span>
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-ink-foreground">
                    <p className="text-xs font-medium text-ink-foreground/85">{project.client}</p>
                    <ArrowUpRight className="size-4 shrink-0 text-orange-bright transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow">{project.category}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="size-3.5 text-accent" /> {project.client}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="mt-6 inline-flex cursor-pointer items-center gap-2 self-start text-sm font-medium text-primary transition-colors hover:text-accent"
                  >
                    Read more
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/70 px-4 py-10 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full w-full max-w-2xl overflow-y-auto rounded-2xl bg-card"
            >
              <img
                src={selected.image}
                alt={selected.title}
                width={1280}
                height={853}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-8">
                <p className="eyebrow">
                  {selected.category}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{selected.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {selected.description}
                </p>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Client
                    </dt>
                    <dd className="mt-1 text-sm">{selected.client}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Technologies
                    </dt>
                    <dd className="mt-1 text-sm">{selected.technologies.join(", ")}</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="mt-8 cursor-pointer rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
