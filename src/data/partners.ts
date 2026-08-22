import srushtiSevaLogo from "@/assets/partners/1. srushti-seva-pvt-ltd-logo.jpg";
import pmiLogo from "@/assets/partners/2. PMI logo.jpg";
import sakhaStudioLogo from "@/assets/partners/3. Sakha Studio.jpg";
import stambhaStudioLogo from "@/assets/partners/4. stambha conservation studio.jpg";
import nagpurHelicamLogo from "@/assets/partners/5. Nagpur Helicam Logo.jpg.jpeg";

export type Logo = {
  id: string;
  name: string;
  kind: "Partner" | "Client";
  image?: string;
};

export type Partner = {
  id: string;
  name: string;
  address: string;
  kind: "Partner";
  image: string;
};

/*
 * TECHNOLOGY PARTNERS
 *
 * Each partner contains:
 * - Name
 * - Address
 * - Logo
 */

export const partners: Partner[] = [
  {
    id: "p1",
    name: "Srushti Seva Private Ltd",
    address:
      "8, Bilvadal, Janta Layout, Deendayal Nagar, Nagpur 440 022",
    kind: "Partner",
    image: srushtiSevaLogo,
  },

  {
    id: "p2",
    name: "Production Modelling India Ltd",
    address:
      "Plot No. 1 & 2, Khasra No. 57/4, At Mouza Isasani, P.S.K. 46, Nagpur, India",
    kind: "Partner",
    image: pmiLogo,
  },

  {
    id: "p3",
    name: "Sakha Studio",
    address:
      "19, Borkute Layout, Narendra Nagar, Nagpur 440 015",
    kind: "Partner",
    image: sakhaStudioLogo,
  },

  {
    id: "p4",
    name: "Stambha Conservation Studio",
    address:
      "Pune, Maharashtra",
    kind: "Partner",
    image: stambhaStudioLogo,
  },

  {
    id: "p5",
    name: "Nagpur Helicam",
    address:
      "Marartoli, Ram Nagar, Nagpur, Maharashtra, 440033",
    kind: "Partner",
    image: nagpurHelicamLogo,
  },
];

/*
 * CLIENTS
 *
 * Keep the existing client data here.
 */

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