import {
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type CareerTrack = {
  id: string;
  title: string;
  icon: LucideIcon;
  duration: string;
  description: string;
};

export const careerTracks: CareerTrack[] = [
  {
    id: "internship",
    title: "Internships",
    icon: GraduationCap,
    duration: "4 – 24 weeks",
    description:
      "Project-attached internships for engineering, geology, geography and environmental science students, with a supervised deliverable and evaluation report.",
  },
  {
    id: "training",
    title: "Professional Training",
    icon: BookOpen,
    duration: "2 – 8 weeks",
    description:
      "Instructor-led programmes on GIS, remote sensing, UAV data processing, LiDAR classification and hydraulic modelling, using live project datasets.",
  },
  {
    id: "skill",
    title: "Skill Development",
    icon: Wrench,
    duration: "Rolling",
    description:
      "Short intensives for working professionals and department staff, focused on tool proficiency and reproducible workflows.",
  },
  {
    id: "certification",
    title: "Certification",
    icon: Award,
    duration: "On completion",
    description:
      "Assessed certification with a documented competency statement that institutions and employers can verify.",
  },
];

export const careerBenefits = [
  "Work on live client datasets under NDA-governed supervision",
  "One-to-one mentorship from practising geospatial engineers",
  "Structured evaluation with a written competency report",
  "Access to UAV, LiDAR and modelling software environments",
  "Placement referrals for high-performing candidates",
  "Certificate recognised by partner institutions",
];

export const mentorship = {
  icon: Users,
  title: "Mentorship model",
  description:
    "Each candidate is assigned a technical mentor and a project reviewer. Weekly checkpoints track progress against a defined scope, and the final review is documented in writing.",
};
