import {
  Antenna,
  Aperture,
  Boxes,
  Brain,
  Camera,
  Compass,
  Cpu,
  Globe2,
  Layers,
  Mountain,
  Radar,
  Ruler,
  Satellite,
  Scan,
  Sparkles,
  Video,
  Volume2,
  Waves,
  Film,
  Droplets,
  type LucideIcon,
} from "lucide-react";

export type Technology = {
  id: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  description: string;
};

export const technologies: Technology[] = [
  {
    id: "remote-sensing",
    name: "Remote Sensing",
    icon: Satellite,
    summary: "Satellite earth observation",
    description:
      "Multispectral and radar imagery analysis for land use, change detection, vegetation, water and environmental monitoring across seasons.",
  },
  {
    id: "drone",
    name: "DRONE",
    icon: Antenna,
    summary: "DGCA-compliant UAV surveys",
    description:
      "Drone acquisition for mapping, volumetrics, heritage documentation and inspection, flown by certified pilots with survey-grade control.",
  },
  {
    id: "lidar",
    name: "LiDAR",
    icon: Scan,
    summary: "High-density point clouds",
    description:
      "Aerial and terrestrial laser scanning for terrain, structures and heritage assets, with classification and feature extraction.",
  },
  {
    id: "gis",
    name: "Geographical Information System (GIS)",
    icon: Globe2,
    summary: "Spatial data systems",
    description:
      "Geodatabase design, thematic mapping, spatial analysis and web GIS delivery aligned to departmental data standards.",
  },
  {
    id: "gpr",
    name: "Ground Penetrating Radar (GPR)",
    icon: Radar,
    summary: "Non-invasive subsurface imaging",
    description:
      "Detection of buried structures, voids, utilities and archaeological features without excavation, delivered as interpreted profiles.",
  },
  {
    id: "gaussian-splat",
    name: "Gaussian Splat 3D Rendering",
    icon: Sparkles,
    summary: "Photoreal 3D scene rendering",
    description:
      "Radiance-field based reconstruction producing photorealistic, web-deliverable 3D scenes of sites, temples and structures.",
  },
  {
    id: "short-power-films",
    name: "Short Power Films",
    icon: Film,
    summary: "Project communication films",
    description:
      "Short, high-impact films combining aerial footage, data visuals and narrative for stakeholders, trusts and departments.",
  },
  {
    id: "bathymetry",
    name: "Bathymetry",
    icon: Waves,
    summary: "Underwater terrain mapping",
    description:
      "Depth surveys of tanks, reservoirs and river reaches to derive capacity, sedimentation and submerged terrain models.",
  },
  {
    id: "close-range-photogrammetry",
    name: "Close Range Photogrammetry",
    icon: Camera,
    summary: "Millimetre-scale documentation",
    description:
      "Detailed measurable 3D records of carvings, facades and artefacts from calibrated close-range imagery.",
  },
  {
    id: "dgps-cors",
    name: "DGPS / CORS",
    icon: Compass,
    summary: "Precision positioning control",
    description:
      "Continuously operating reference station and differential GNSS control that anchors every survey to a verifiable coordinate framework.",
  },
  {
    id: "digital-twin",
    name: "3D Digital Twin",
    icon: Boxes,
    summary: "Living models of assets",
    description:
      "Reality-captured 3D twins of sites and complexes, maintained through re-survey and linked to asset and condition records.",
  },
  {
    id: "agentic-ai",
    name: "Agentic AI",
    icon: Brain,
    summary: "AI-assisted geospatial workflows",
    description:
      "AI agents applied to feature extraction, document interpretation and reporting to shorten analysis cycles without losing traceability.",
  },
  {
    id: "hec-ras",
    name: "HEC-RAS Flood Modelling",
    icon: Droplets,
    summary: "Hydraulic flood simulation",
    description:
      "1D/2D flow modelling of rivers and floodplains producing inundation extents, depth-velocity grids and scenario comparisons.",
  },
  {
    id: "iot",
    name: "IoT Sensors for Ambient Enviro Parameters",
    icon: Cpu,
    summary: "Continuous environmental sensing",
    description:
      "Deployed sensors for air, water, noise and weather parameters, streaming into dashboards with archives and alerting.",
  },
  {
    id: "swat",
    name: "SWAT Analysis Tool",
    icon: Layers,
    summary: "Watershed simulation",
    description:
      "Soil and Water Assessment Tool modelling of runoff, sediment yield and land-use scenarios at watershed scale.",
  },
  {
    id: "geophysical",
    name: "Geo Physical Surveys",
    icon: Mountain,
    summary: "Subsurface investigation",
    description:
      "Resistivity and allied geophysical methods supporting groundwater, geology and foundation investigations.",
  },
  {
    id: "noise",
    name: "Noise Level Measurement",
    icon: Volume2,
    summary: "Acoustic monitoring",
    description:
      "Calibrated ambient noise measurement and mapping for compliance, impact assessment and urban studies.",
  },
  {
    id: "360-media",
    name: "360 Degree Video and Photos",
    icon: Video,
    summary: "Immersive site records",
    description:
      "360° capture of temple complexes, campuses and project sites for archival, virtual tours and stakeholder review.",
  },
  {
    id: "volumetric-tools",
    name: "Volumetric and Sub Surface Analysis Tools",
    icon: Aperture,
    summary: "Quantity and void analysis",
    description:
      "Volume computation for mining and stockpiles, and subsurface interpretation for below-ground-level modelling.",
  },
  {
    id: "dgps",
    name: "Differential Global Positioning System (DGPS)",
    icon: Ruler,
    summary: "Survey-grade ground control",
    description:
      "Centimetre-level ground control and boundary verification for mining leases, heritage sites and infrastructure corridors.",
  },
];
