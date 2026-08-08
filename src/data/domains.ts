import {
  Building2,
  Boxes,
  Droplets,
  Factory,
  FileCheck2,
  Landmark,
  Layers,
  Leaf,
  LifeBuoy,
  Map,
  Mountain,
  PawPrint,
  Sprout,
  Users,
  Waves,
  CloudRain,
  type LucideIcon,
} from "lucide-react";

export type Domain = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
};

export const domains: Domain[] = [
  {
    id: "water-carbon-credit",
    name: "Water Credit & Carbon Credit",
    icon: Leaf,
    description:
      "Baseline assessment, quantification and documentation support for water credit and carbon credit initiatives of industries and corporates.",
  },
  {
    id: "water-audit",
    name: "Mandatory Water Audit for Industries",
    icon: Droplets,
    description:
      "Statutory water audits for industrial units — source-to-discharge accounting, loss identification and compliance reporting.",
  },
  {
    id: "rainwater-harvesting",
    name: "Roof Top Rainwater Harvesting",
    icon: CloudRain,
    description:
      "Design and feasibility of rooftop rainwater harvesting systems with catchment computation and recharge structure planning.",
  },
  {
    id: "wetlands",
    name: "Wetlands and Surface Water",
    icon: Waves,
    description:
      "Delineation, health assessment and monitoring of wetlands, tanks and surface water bodies using satellite and field data.",
  },
  {
    id: "biodiversity",
    name: "Biodiversity Studies & Public Biodiversity Registers",
    icon: Sprout,
    description:
      "Field biodiversity documentation and preparation of People's Biodiversity Registers for local bodies and committees.",
  },
  {
    id: "noc",
    name: "CGWB NOC & NOC Irrigation Department",
    icon: FileCheck2,
    description:
      "Technical studies and documentation support for Central Ground Water Board and Irrigation Department no-objection clearances.",
  },
  {
    id: "industrial-3d",
    name: "Industrial 3D Scanning by DRONE and LiDAR",
    icon: Boxes,
    description:
      "As-built 3D capture of plants, structures and industrial campuses using drone photogrammetry and laser scanning.",
  },
  {
    id: "wildlife",
    name: "Wildlife Conservation Planning",
    icon: PawPrint,
    description:
      "Habitat mapping, corridor analysis and spatial inputs for wildlife conservation and management plans.",
  },
  {
    id: "heritage-conservation",
    name: "Heritage Conservation Planning",
    icon: Landmark,
    description:
      "Measured documentation, condition mapping and conservation planning support for monuments and temple complexes.",
  },
  {
    id: "impact-assessment",
    name: "Impact Assessment Support",
    icon: Map,
    description:
      "Spatial and scientific inputs for heritage, environment, mining, NGO and CSR impact assessments.",
  },
  {
    id: "mining",
    name: "Mining Mapping and Volume Estimation",
    icon: Mountain,
    description:
      "Lease boundary verification, periodic drone surveys and volume estimation for mining blocks and quarries.",
  },
  {
    id: "development-plans",
    name: "Development Plan / Regional Plans",
    icon: Building2,
    description:
      "Preparation of Development Plans and Regional Plans in the Remote Sensing and GIS domain for planning authorities.",
  },
  {
    id: "below-ground-3d",
    name: "Below Ground Level 3D Modelling",
    icon: Layers,
    description:
      "GPR and geophysics-driven modelling of subsurface features, foundations and buried structures.",
  },
  {
    id: "flood-inundation",
    name: "Flood Inundation Mapping",
    icon: LifeBuoy,
    description:
      "HEC-RAS based inundation scenarios, depth mapping and vulnerability assessment for rivers and settlements.",
  },
  {
    id: "river-conservation",
    name: "River Conservation Plans",
    icon: Factory,
    description:
      "River morphology, encroachment and pollution mapping feeding into actionable river conservation plans.",
  },
  {
    id: "csr-socio",
    name: "CSR & Socio-Economic Studies",
    icon: Users,
    description:
      "Baseline socio-economic surveys, need assessment and geospatial monitoring of CSR programmes.",
  },
];
