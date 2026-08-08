import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import heroImage from "@/assets/hero-abstract.jpg";
import { Counter } from "@/components/site/Counter";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);
  const { hero } = company;

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-ink-foreground"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Abstract terrain mesh and contour visualisation representing geospatial data"
          width={1920}
          height={1088}
          className="size-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--primary-deep)_10%,transparent_75%)] opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--primary-deep)_2%,transparent_45%)]" />
      </motion.div>

      <div className="section-shell w-full pb-16 pt-32 lg:pb-24 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          {hero.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14 }}
          className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.28em] text-accent sm:text-base"
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg"
        >
          {hero.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button asChild variant="hero" size="xl">
            <a href={hero.primaryCta.href}>
              {hero.primaryCta.label} <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="onDark" size="xl">
            <a href={hero.secondaryCta.href}>
              {hero.secondaryCta.label} <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink-foreground/15 bg-ink-foreground/10 lg:mt-24 lg:grid-cols-4"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="glass-panel-dark border-0 px-5 py-6 sm:px-7 sm:py-8">
              <dt className="text-2xl font-semibold text-ink-foreground sm:text-4xl">
                {typeof stat.value === "number" ? (
                  <Counter value={stat.value} suffix={stat.suffix ?? ""} />
                ) : (
                  <span className="text-xl sm:text-2xl">{stat.text}</span>
                )}
              </dt>
              <dd className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-foreground/60 sm:text-[0.7rem]">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
