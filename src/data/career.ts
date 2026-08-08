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
  items: string[];
};

export const careerTracks: CareerTrack[] = [
  {
    id: "engineering",
    title: "Internships — Engineering",
    icon: GraduationCap,
    duration: "Online / Offline",
    description: "Project-attached internships for engineering students.",
    items: [
      "AI / ML",
      "Data Sciences",
      "Computer Software",
      "Civil Engineering",
      "Mechanical Engineering",
    ],
  },
  {
    id: "sciences",
    title: "Internships — Basic & Applied Sciences",
    icon: BookOpen,
    duration: "Online / Offline",
    description: "Internships for science graduates and postgraduates.",
    items: [
      "AI / ML",
      "Data Sciences",
      "Computer Software",
      "Biotechnology",
      "Environmental Sciences",
      "Geology",
      "Geography",
    ],
  },
  {
    id: "iti",
    title: "Internships — ITI",
    icon: Wrench,
    duration: "Online / Offline",
    description: "Technical internships for ITI candidates.",
    items: ["Draftsman", "Cartography", "Computer Software"],
  },
  {
    id: "training",
    title: "Training Courses",
    icon: Award,
    duration: "Online / Offline",
    description: "Instructor-led geospatial and drone training programmes.",
    items: [
      "Remote Sensing & GIS",
      "DGPS & CORS Surveying",
      "Advance Geospatial Modelling",
      "Geospatial Technology for Architects, Heritage Conservation Architects, Landscape Designers & Urban Planners",
      "QGIS Hands-on Training",
      "DRONE Flying & Processing Courses",
      "DGCA DRONE Pilot Licences (in collaboration)",
    ],
  },
];

export const careerBenefits = [
  "Work on live ABsynergy project datasets",
  "Mentorship from practising geospatial scientists and DGCA-certified pilots",
  "Exposure to DRONE, LiDAR, GPR and DGPS/CORS field operations",
  "Hands-on training on QGIS and geospatial modelling tools",
  "Both online and offline delivery options",
  "Certification on completion of the programme",
];

export const mentorship = {
  icon: Users,
  title: "Trainings, Internships & Capacity Building",
  description:
    "From 01 Sep 2026, ABsynergy has formally extended beyond project activities into trainings, internships and capacity building programmes, guided by Dr. Ajay Deshpande and the senior advisory team.",
};
