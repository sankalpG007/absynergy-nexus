import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { careerBenefits, careerTracks, mentorship } from "@/data/career";

export function Career() {
  const MentorIcon = mentorship.icon;

  return (
    <section id="careers" className="bg-surface py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Career & training"
          title="Learn the craft on live scientific programmes"
          description="We train the people who will run India's spatial infrastructure. Every programme is attached to real project data, supervised delivery and written assessment."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {careerTracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <Reveal key={track.id} delay={index * 0.06}>
                <div className="h-full rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-lift)]">
                  <Icon className="size-6 text-accent" />
                  <h3 className="mt-6 font-display text-lg font-semibold">{track.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {track.duration}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {track.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="h-full rounded-xl border border-border bg-card p-8">
              <h3 className="font-display text-lg font-semibold">What you get</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {careerBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between rounded-xl bg-brand-gradient p-8 text-primary-foreground">
              <div>
                <MentorIcon className="size-6" />
                <h3 className="mt-6 font-display text-lg font-semibold">{mentorship.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                  {mentorship.description}
                </p>
              </div>
              <Button asChild variant="onDark" size="lg" className="mt-8 self-start">
                <a href="#internship-form">
                  Apply Now <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
