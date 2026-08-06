import {
  Building2,
  Droplets,
  Factory,
  Landmark,
  Leaf,
  LifeBuoy,
  Mountain,
  Sprout,
  TreePine,
  Waves,
  type LucideIcon,
} from "lucide-react";

export type Domain = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  cta: string;
};

export const domains: Domain[] = [
  {
    id: "mining",
    name: "Mining",
    icon: Mountain,
    description:
      "Lease boundary verification, periodic volumetrics, overburden tracking and statutory compliance reporting for mineral operations.",
    cta: "Discuss a mining survey",
  },
  {
    id: "water-resources",
    name: "Water Resources",
    icon: Droplets,
    description:
      "Watershed characterisation, reservoir sedimentation studies, canal network mapping and groundwater prospect modelling.",
    cta: "Plan a water study",
  },
  {
    id: "flood-mapping",
    name: "Flood Mapping",
    icon: Waves,
    description:
      "2D hydraulic modelling, inundation scenarios, vulnerability mapping and early-warning support for districts and utilities.",
    cta: "Model a flood scenario",
  },
  {
    id: "carbon-credit",
    name: "Carbon Credit",
    icon: Leaf,
    description:
      "Biomass baselines, plantation monitoring and MRV-ready documentation for carbon project developers and corporates.",
    cta: "Build a carbon baseline",
  },
  {
    id: "river-conservation",
    name: "River Conservation",
    icon: LifeBuoy,
    description:
      "River morphology, encroachment detection, water quality integration and restoration prioritisation plans.",
    cta: "Start a river assessment",
  },
  {
    id: "heritage",
    name: "Heritage",
    icon: Landmark,
    description:
      "Millimetre-accurate documentation of monuments and temple complexes, condition mapping and conservation digital twins.",
    cta: "Document a heritage site",
  },
  {
    id: "urban-planning",
    name: "Urban Planning",
    icon: Building2,
    description:
      "Base map creation, property and utility mapping, master plan support and urban growth analytics for local bodies.",
    cta: "Support a city plan",
  },
  {
    id: "environment",
    name: "Environment",
    icon: TreePine,
    description:
      "Baseline environmental studies, impact assessment inputs and continuous compliance monitoring programmes.",
    cta: "Commission a baseline",
  },
  {
    id: "wetlands",
    name: "Wetlands",
    icon: Sprout,
    description:
      "Wetland delineation, health indices, encroachment tracking and restoration monitoring aligned to national guidelines.",
    cta: "Assess a wetland",
  },
  {
    id: "natural-resources",
    name: "Natural Resources",
    icon: Factory,
    description:
      "Resource inventories, land capability studies and allocation planning for state departments and industry.",
    cta: "Inventory your resources",
  },
];
