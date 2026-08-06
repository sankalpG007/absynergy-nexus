import founderImage from "@/assets/founder.jpg";

export const company = {
  name: "ABSynergy",
  legalName: "ABSynergy Technologies",
  tagline: "Science-led geospatial and engineering intelligence",
  descriptor:
    "ABSynergy is a scientific technology consulting organisation delivering geospatial intelligence, sensing systems and digital twin engineering for government, industry and research.",
  hero: {
    eyebrow: "Scientific Technology Consulting",
    heading: "Measuring the earth. Modelling the future.",
    subheading:
      "ABSynergy combines remote sensing, drone survey, LiDAR and spatial analytics with domain engineering to help institutions plan, protect and manage physical assets and natural resources.",
    primaryCta: { label: "Business Enquiry", href: "#business-enquiry" },
    secondaryCta: { label: "Explore Our Work", href: "#projects" },
    stats: [
      { value: 12, suffix: "+", label: "Years of practice" },
      { value: 180, suffix: "+", label: "Projects delivered" },
      { value: 12, suffix: "", label: "Technology domains" },
      { value: 9, suffix: "", label: "States of operation" },
    ],
  },
  about: {
    story:
      "ABSynergy was established to close the gap between scientific measurement and operational decision-making. What began as a small survey and mapping practice has grown into a multidisciplinary consulting organisation working across mining, water resources, environment, heritage and urban infrastructure.",
    who: "We are geospatial scientists, remote sensing analysts, civil and environmental engineers, data specialists and field surveyors. Our teams operate end-to-end: acquisition, processing, modelling, analytics and advisory — with documented quality control at every stage.",
    vision:
      "To be the reference organisation for scientific spatial intelligence in India — trusted by governments, industry and research institutions alike.",
    mission:
      "To convert accurate measurement into actionable intelligence, using open standards, reproducible methods and technology that our clients can independently verify.",
    values: [
      {
        title: "Scientific rigour",
        description:
          "Every deliverable is traceable to a documented method, accuracy budget and validation record.",
      },
      {
        title: "Institutional trust",
        description:
          "We work to public-sector standards of transparency, data ownership and audit readiness.",
      },
      {
        title: "Applied innovation",
        description:
          "New sensing and modelling techniques are adopted only when they measurably improve outcomes.",
      },
      {
        title: "Knowledge transfer",
        description:
          "Client teams and students are trained alongside delivery, not after it.",
      },
    ],
    timeline: [
      { year: "2013", title: "Foundation", text: "Established as a survey and thematic mapping practice." },
      { year: "2016", title: "Remote sensing division", text: "Satellite-based land use and change detection services begin." },
      { year: "2018", title: "UAV programme", text: "DGCA-compliant drone survey and photogrammetry capability added." },
      { year: "2020", title: "Hydrology & modelling", text: "HEC-RAS flood modelling and river conservation advisory launched." },
      { year: "2022", title: "Vasudhayan", text: "Geo-spatial intelligence initiative formalised as a dedicated unit." },
      { year: "2024", title: "Mandirayan", text: "Temple ecosystem and heritage documentation initiative launched." },
    ],
  },
  achievements: [
    { value: 12, suffix: "+", label: "Years of experience" },
    { value: 180, suffix: "+", label: "Projects completed" },
    { value: 12, suffix: "", label: "Technology domains" },
    { value: 2, suffix: "", label: "Business units" },
    { value: 60, suffix: "+", label: "Clients served" },
    { value: 14, suffix: "", label: "Research collaborations" },
  ],
  founder: {
    name: "Dr. A. Balasubramanian",
    role: "Founder & Managing Director",
    image: founderImage,
    bio: "Dr. Balasubramanian is a geoscientist and consulting engineer with over two decades of experience in remote sensing, hydrology and infrastructure survey. He has led national and state-level mapping programmes, advised public agencies on water resource planning, and built ABSynergy's multi-disciplinary technical practice from the ground up.",
    highlights: [
      { label: "Experience", value: "22+ years" },
      { label: "Publications", value: "30+ papers" },
      { label: "Programmes led", value: "45+" },
      { label: "Students mentored", value: "400+" },
    ],
    timeline: [
      { year: "2003", text: "Ph.D. in Applied Geology; began work in watershed characterisation." },
      { year: "2008", text: "Led state-level groundwater prospect mapping under a national mission." },
      { year: "2013", text: "Founded ABSynergy to bring research methods into commercial delivery." },
      { year: "2019", text: "Principal investigator on river rejuvenation and sediment studies." },
      { year: "2023", text: "Established the organisation's digital twin and heritage documentation practice." },
    ],
    awards: [
      "National Geospatial Excellence recognition, Water Resources category",
      "Best Applied Research Collaboration — State Technical University",
      "Fellow, Institution of Geospatial and Remote Sensing Professionals",
    ],
  },
  contact: {
    phone: "+91 98400 00000",
    whatsapp: "+919840000000",
    email: "connect@absynergy.in",
    address: "ABSynergy Technologies, 4th Floor, Sigma Tech Park, Guindy, Chennai 600032, Tamil Nadu, India",
    mapEmbed:
      "https://www.google.com/maps?q=Guindy,Chennai,Tamil%20Nadu&output=embed",
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "X", href: "https://x.com" },
      { label: "YouTube", href: "https://www.youtube.com" },
    ],
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Technologies", href: "#technologies" },
    { label: "Domains", href: "#domains" },
    { label: "Business Units", href: "#business-units" },
    { label: "Projects", href: "#projects" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Company = typeof company;
