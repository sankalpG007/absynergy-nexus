import {
  Antenna,
  Boxes,
  Cpu,
  Globe2,
  Layers,
  LineChart,
  Map,
  Radar,
  Ruler,
  Satellite,
  Scan,
  Waves,
  type LucideIcon,
} from "lucide-react";

export type Technology = {
  id: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  capabilities: string[];
};

export const technologies: Technology[] = [
  {
    id: "gis",
    name: "GIS",
    icon: Globe2,
    summary: "Enterprise spatial data systems",
    description:
      "Design and deployment of enterprise GIS: geodatabase schemas, topology rules, multi-user editing workflows and web map services aligned to national spatial data standards.",
    capabilities: ["Geodatabase design", "Web GIS portals", "Spatial QA/QC", "OGC services"],
  },
  {
    id: "remote-sensing",
    name: "Remote Sensing",
    icon: Satellite,
    summary: "Multispectral earth observation",
    description:
      "Optical, thermal and radar imagery analysis for land use classification, change detection, vegetation and moisture indices, and long-horizon environmental monitoring.",
    capabilities: ["Change detection", "Index modelling", "SAR interferometry", "Time-series analysis"],
  },
  {
    id: "drone",
    name: "Drone Technology",
    icon: Antenna,
    summary: "UAV survey and photogrammetry",
    description:
      "Regulation-compliant UAV missions producing orthomosaics, digital surface models and volumetric measurements with survey-grade ground control.",
    capabilities: ["Orthomosaic", "DSM / DTM", "Volumetrics", "Corridor mapping"],
  },
  {
    id: "lidar",
    name: "LiDAR",
    icon: Scan,
    summary: "High-density point cloud capture",
    description:
      "Aerial and terrestrial laser scanning for terrain, canopy, utility and structural modelling, with classification and feature extraction to client specification.",
    capabilities: ["Point cloud classification", "Bare-earth DTM", "Feature extraction", "Deformation study"],
  },
  {
    id: "digital-twin",
    name: "Digital Twin",
    icon: Boxes,
    summary: "Living models of physical assets",
    description:
      "Reality-captured, sensor-linked 3D models of sites and structures that stay current through scheduled re-survey and telemetry integration.",
    capabilities: ["Reality capture", "Asset registers", "Scenario simulation", "As-built comparison"],
  },
  {
    id: "iot",
    name: "IoT",
    icon: Cpu,
    summary: "Field sensing and telemetry",
    description:
      "Instrumentation of sites with water level, quality, weather and structural sensors, streaming into dashboards with alerting and long-term archives.",
    capabilities: ["Sensor networks", "Edge gateways", "Dashboards", "Automated alerts"],
  },
  {
    id: "gpr",
    name: "Ground Penetrating Radar",
    icon: Radar,
    summary: "Non-invasive subsurface imaging",
    description:
      "Subsurface investigation for utilities, voids, foundations and archaeological features without excavation, delivered as interpreted profiles and plans.",
    capabilities: ["Utility detection", "Void mapping", "Foundation study", "Archaeological survey"],
  },
  {
    id: "hec-ras",
    name: "HEC-RAS",
    icon: Waves,
    summary: "Hydraulic and flood modelling",
    description:
      "1D/2D unsteady flow modelling of rivers and floodplains to generate inundation extents, depth-velocity grids and structure performance assessments.",
    capabilities: ["2D unsteady flow", "Inundation mapping", "Breach analysis", "Structure hydraulics"],
  },
  {
    id: "3d-mapping",
    name: "3D Mapping",
    icon: Layers,
    summary: "Photorealistic spatial models",
    description:
      "Photogrammetric and scan-based 3D reconstruction of terrain, structures and heritage assets with measurable, textured mesh outputs.",
    capabilities: ["Mesh reconstruction", "Texture mapping", "Web 3D delivery", "Measurement models"],
  },
  {
    id: "cad",
    name: "CAD",
    icon: Ruler,
    summary: "Engineering drawing and design",
    description:
      "Survey-to-CAD conversion, layered drawing standards, and design coordination outputs compatible with client engineering environments.",
    capabilities: ["Survey to CAD", "Layer standards", "Plan-profile sets", "BIM handover"],
  },
  {
    id: "spatial-analytics",
    name: "Spatial Analytics",
    icon: LineChart,
    summary: "Decision models on geography",
    description:
      "Suitability, accessibility, risk and prioritisation models that translate spatial data into ranked, defensible recommendations.",
    capabilities: ["Suitability models", "Risk indices", "Network analysis", "Statistical validation"],
  },
  {
    id: "environmental-intelligence",
    name: "Environmental Intelligence",
    icon: Map,
    summary: "Ecosystem and carbon monitoring",
    description:
      "Baseline studies, biomass and carbon estimation, wetland health tracking and compliance monitoring backed by field validation.",
    capabilities: ["Biomass estimation", "Carbon baselines", "Habitat mapping", "Compliance reporting"],
  },
];
