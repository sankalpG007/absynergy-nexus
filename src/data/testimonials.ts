export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  organisation: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "wrd",
    quote:
      "The inundation modelling was delivered with a clear accuracy statement and field validation. It is the first dataset our field divisions have accepted without revision.",
    name: "Superintending Engineer",
    role: "Hydrology Division",
    organisation: "State Water Resources Department",
  },
  {
    id: "mining",
    quote:
      "Quarterly volumetrics moved from a three-week manual exercise to a four-day reported cycle. The audit trail alone justified the engagement.",
    name: "General Manager, Operations",
    role: "Mineral Lease Operations",
    organisation: "Private Mining Group",
  },
  {
    id: "university",
    quote:
      "Their team trained twenty of our students on live datasets. The competency reports were detailed enough for our internal assessment records.",
    name: "Head of Department",
    role: "Civil Engineering",
    organisation: "State Technical University",
  },
  {
    id: "trust",
    quote:
      "The documentation of our temple complex is now the reference record for every conservation decision the board takes.",
    name: "Executive Officer",
    role: "Administration",
    organisation: "Temple Devasthanam Board",
  },
];
