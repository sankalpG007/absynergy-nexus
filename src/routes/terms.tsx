import { createFileRoute, Link } from "@tanstack/react-router";

import { company } from "@/data/company";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | ABSynergy" },
      {
        name: "description",
        content:
          "Terms governing the use of the ABSynergy website, published content, proposals and deliverables.",
      },
      { property: "og:title", content: "Terms of Use | ABSynergy" },
      {
        property: "og:description",
        content: "Website usage terms, content ownership and engagement conditions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="section-shell max-w-3xl py-24">
      <Link to="/" className="text-sm font-medium text-accent hover:underline">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold">Terms of Use</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        These terms govern your use of the {company.legalName} website.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <Section title="Use of this website">
          Content published here is provided for general information about our capabilities. It does
          not constitute a technical opinion, survey certificate or engineering recommendation for
          any specific site.
        </Section>
        <Section title="Intellectual property">
          Text, imagery, diagrams and method descriptions on this website are the property of{" "}
          {company.legalName} unless otherwise credited. They may be cited with attribution but not
          reproduced commercially without permission.
        </Section>
        <Section title="Proposals and engagements">
          Any commercial engagement is governed exclusively by the signed proposal or work order,
          including its scope, accuracy specification, schedule and commercial terms. Nothing on
          this website amends those terms.
        </Section>
        <Section title="Third-party links">
          Links to partner, client or initiative websites are provided for convenience. We are not
          responsible for the content or practices of external sites.
        </Section>
        <Section title="Contact">
          Questions about these terms may be sent to{" "}
          <a href={`mailto:${company.contact.email}`} className="text-accent hover:underline">
            {company.contact.email}
          </a>
          .
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
