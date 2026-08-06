export type Faq = { id: string; question: string; answer: string };

export const faqs: Faq[] = [
  {
    id: "engagement",
    question: "How does an engagement with ABSynergy typically begin?",
    answer:
      "It begins with a scoping discussion where we define the decision the data must support. We then issue a technical proposal containing method, accuracy budget, deliverable list, schedule and commercial terms before any fieldwork is planned.",
  },
  {
    id: "government",
    question: "Do you work with government departments and public tenders?",
    answer:
      "Yes. A significant share of our work is with state departments, municipal bodies and public undertakings. We are experienced with tender documentation, third-party quality audits and departmental data handover formats.",
  },
  {
    id: "accuracy",
    question: "How is accuracy defined and verified?",
    answer:
      "Every project carries a written accuracy specification. We establish independent check points, report RMSE against them, and include the validation record with the deliverable so it can be audited.",
  },
  {
    id: "data-ownership",
    question: "Who owns the data and models you produce?",
    answer:
      "The client owns all project deliverables, including raw acquisition data where contracted. We retain no exclusive rights and provide outputs in open, non-proprietary formats wherever the specification allows.",
  },
  {
    id: "units",
    question: "What is the relationship between ABSynergy, Vasudhayan and Mandirayan?",
    answer:
      "ABSynergy is the parent organisation. Vasudhayan is our geo-spatial intelligence initiative and Mandirayan is our temple ecosystem initiative. Each operates as a specialised division with its own team and dedicated website.",
  },
  {
    id: "internship",
    question: "Are internships paid, and who can apply?",
    answer:
      "Selected long-duration interns receive a stipend. Applications are open to students and recent graduates in engineering, geology, geography, planning and environmental science. Selection is based on fundamentals and project fit.",
  },
  {
    id: "turnaround",
    question: "What are typical project timelines?",
    answer:
      "A focused survey and mapping assignment usually completes in three to six weeks. Modelling, digital twin and multi-season monitoring programmes run from three months to multi-year cycles.",
  },
];
