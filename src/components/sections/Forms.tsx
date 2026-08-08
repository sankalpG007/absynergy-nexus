import { DataForm } from "@/components/site/DataForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { businessEnquiryFields, internshipFields } from "@/data/forms";

export function Forms() {
  return (
    <section id="business-enquiry" className="bg-surface py-24 lg:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Work with us"
          title="Start a project or join a programme"
          description="Two routes into ABsynergy: a technical enquiry for organisations, and an application for students and professionals seeking training."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-card)] lg:p-10">
              <h3 className="font-display text-xl font-semibold">Business Enquiry</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For departments, companies, research bodies and NGOs. A technical lead responds
                within one working day.
              </p>
              <div className="mt-8">
                <DataForm
                  id="business-enquiry-form"
                  fields={businessEnquiryFields}
                  formType="Business Enquiry"
                  submitLabel="Submit Enquiry"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              id="internship-form"
              className="h-full rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-card)] lg:p-10"
            >
              <h3 className="font-display text-xl font-semibold">Internship & Training</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For students, graduates and working professionals. Cohorts open every month across
                our technology tracks.
              </p>
              <div className="mt-8">
                <DataForm
                  id="internship-training-form"
                  fields={internshipFields}
                  formType="Internship & Training"
                  submitLabel="Submit Application"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
