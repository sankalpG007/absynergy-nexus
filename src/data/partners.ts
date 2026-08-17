import worldMonumentFund from "@/assets/organizations/world-monument-fund.webp";
import renukaMataTrust from "@/assets/organizations/renuka-mata-trust.jpg";
import shewalkarBuilders from "@/assets/organizations/shewalkar-builders.jpg";
import sujalamConsultants from "@/assets/organizations/sujalam-consultants.jpg";
import dronah from "@/assets/organizations/dronah.jpg";
import achintyaStudio from "@/assets/organizations/achintya-studio.jpg";
import pollutionEcology from "@/assets/organizations/pollution-ecology.jpg";
import sudarshanEngineering from "@/assets/organizations/sudarshan-engineering.jpg";
import aryanaviHospitality from "@/assets/organizations/aryanavi-hospitality.jpg";
import nagGroundWater from "@/assets/organizations/nag-ground-water.jpg";
import primeNest from "@/assets/organizations/prime-nest.jpg";

export type Logo = {
  id: string;
  name: string;
  kind: "Partner" | "Client";
  image?: string;
};

/*
 * PARTNERS
 * Keep these as text-only for now.
 * No partner logo imports are required.
 */
export const partners: Logo[] = [
  {
    id: "p1",
    name: "Srushti Seva Private Ltd",
    kind: "Partner",
  },
  {
    id: "p2",
    name: "Production Modelling India Private Ltd.",
    kind: "Partner",
  },
  {
    id: "p3",
    name: "VIHRA",
    kind: "Partner",
  },
  {
    id: "p4",
    name: "Sakha Studio",
    kind: "Partner",
  },
  {
    id: "p5",
    name: "Stambha Studio",
    kind: "Partner",
  },
  {
    id: "p6",
    name: "CD Space (Bangalore)",
    kind: "Partner",
  },
  {
    id: "p7",
    name: "Nagpur Helicam",
    kind: "Partner",
  },
  {
    id: "p8",
    name: "MRK Creations",
    kind: "Partner",
  },
  {
    id: "p9",
    name: "Vivek Surveyors",
    kind: "Partner",
  },
];

/*
 * CLIENTS
 * These are the organizations for which you are
 * adding actual logo/image files.
 */
export const clients: Logo[] = [
  {
    id: "c1",
    name: "World Monument Fund India",
    kind: "Client",
    image: worldMonumentFund,
  },
  {
    id: "c2",
    name: "Shree Renuka Mata Trust Mahur",
    kind: "Client",
    image: renukaMataTrust,
  },
  {
    id: "c3",
    name: "Shewalkar Builders",
    kind: "Client",
    image: shewalkarBuilders,
  },
  {
    id: "c4",
    name: "Sujalam Consultants",
    kind: "Client",
    image: sujalamConsultants,
  },
  {
    id: "c5",
    name: "Dronah",
    kind: "Client",
    image: dronah,
  },
  {
    id: "c6",
    name: "Achintya Studio",
    kind: "Client",
    image: achintyaStudio,
  },
  {
    id: "c7",
    name: "Pollution and Ecology Control Services",
    kind: "Client",
    image: pollutionEcology,
  },
  {
    id: "c8",
    name: "Sudarshan Engineering Works Gwalior",
    kind: "Client",
    image: sudarshanEngineering,
  },
  {
    id: "c9",
    name: "Aryanavi Hospitality Pvt Ltd",
    kind: "Client",
    image: aryanaviHospitality,
  },
  {
    id: "c10",
    name: "Nag Ground Water Surveys",
    kind: "Client",
    image: nagGroundWater,
  },
  {
    id: "c11",
    name: "Prime Nest College of Architecture",
    kind: "Client",
    image: primeNest,
  },
];