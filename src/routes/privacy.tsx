import { createFileRoute, Link } from "@tanstack/react-router";

import { company } from "@/data/company";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ABSynergy" },
      {
        name: "description",
        content:
          "How ABSynergy collects, uses, stores and protects personal and project data submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy | ABSynergy" },
      {
        property: "og:description",
        content: "Data handling, retention and client ownership practices at ABSynergy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="section-shell max-w-3xl py-24">
      <Link to="/" className="text-sm font-medium text-accent hover:underline">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Applies to visitors and clients of {company.legalName}.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <Section title="Information we collect">
          We collect only the information you provide through our business enquiry and internship
          forms — name, organisation, designation, phone number, email address, qualification
          details and the message you write. We do not collect sensitive personal data through this
          website.
        </Section>
        <Section title="How we use it">
          Submissions are used solely to respond to your enquiry, evaluate your application and
          maintain a record of the correspondence. We do not sell, rent or share your details with
          third parties for marketing purposes.
        </Section>
        <Section title="Project and client data">
          Data captured or generated during a project belongs to the client as defined in the
          engagement contract. Acquisition data, models and reports are stored in access-controlled
          environments and are not reused for other clients without written consent.
        </Section>
        <Section title="Retention">
          Enquiry records are retained for the period required to service the relationship and to
          meet statutory obligations. You may request deletion of your enquiry record at any time.
        </Section>
        <Section title="Cookies and analytics">
          This website uses only the storage required for its own operation. Any analytics used is
          aggregate and does not identify individual visitors.
        </Section>
        <Section title="Contact">
          For any privacy request, write to{" "}
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
