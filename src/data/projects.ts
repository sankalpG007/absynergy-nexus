import miningImage from "@/assets/project-mining.jpg";
import floodImage from "@/assets/project-flood.jpg";
import heritageImage from "@/assets/project-heritage.jpg";
import lidarImage from "@/assets/gallery-lidar.jpg";
import fieldImage from "@/assets/gallery-field.jpg";
import labImage from "@/assets/gallery-lab.jpg";

export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  location: string;
  status: "Completed" | "Ongoing";
};

export const projectCategories = [
  "All",
  "Mining",
  "Water",
  "Heritage",
  "Urban",
  "Environment",
] as const;

export const projects: Project[] = [
  {
    id: "opencast-volumetrics",
    title: "Quarterly volumetrics for an opencast mineral lease",
    category: "Mining",
    image: miningImage,
    description:
      "UAV-based quarterly survey of a 640-hectare lease producing overburden and mineral volumes, bench geometry checks and statutory boundary compliance reports.",
    technologies: ["Drone Technology", "Photogrammetry", "GIS"],
    location: "Keonjhar, Odisha",
    status: "Ongoing",
  },
  {
    id: "floodplain-model",
    title: "2D floodplain inundation model for a district river system",
    category: "Water",
    image: floodImage,
    description:
      "Coupled 1D/2D HEC-RAS model across 180 km of river reach, generating depth-velocity grids and vulnerability maps for district disaster planning.",
    technologies: ["HEC-RAS", "LiDAR", "Spatial Analytics"],
    location: "Krishna Basin, Andhra Pradesh",
    status: "Completed",
  },
  {
    id: "temple-digital-twin",
    title: "Digital twin of a 12th-century temple complex",
    category: "Heritage",
    image: heritageImage,
    description:
      "Terrestrial laser scanning and photogrammetry of the prakaram and gopuram, delivering a measurable conservation model with condition annotation layers.",
    technologies: ["LiDAR", "3D Mapping", "Digital Twin"],
    location: "Thanjavur, Tamil Nadu",
    status: "Completed",
  },
  {
    id: "urban-basemap",
    title: "City-scale utility and base map for a municipal corporation",
    category: "Urban",
    image: lidarImage,
    description:
      "Mobile LiDAR corridor capture of 420 km of road network with utility asset extraction and integration into the corporation's enterprise GIS.",
    technologies: ["LiDAR", "GIS", "CAD"],
    location: "Coimbatore, Tamil Nadu",
    status: "Ongoing",
  },
  {
    id: "wetland-health",
    title: "Wetland health and encroachment monitoring programme",
    category: "Environment",
    image: fieldImage,
    description:
      "Multi-season satellite and field monitoring of 26 wetlands, producing health indices, encroachment change maps and restoration priority rankings.",
    technologies: ["Remote Sensing", "Environmental Intelligence", "IoT"],
    location: "Palar Basin, Tamil Nadu",
    status: "Completed",
  },
  {
    id: "carbon-baseline",
    title: "Biomass and carbon baseline for a plantation programme",
    category: "Environment",
    image: labImage,
    description:
      "Stratified biomass estimation combining satellite indices with field plots, producing an MRV-ready baseline for a corporate afforestation initiative.",
    technologies: ["Remote Sensing", "Spatial Analytics", "GIS"],
    location: "Chhindwara, Madhya Pradesh",
    status: "Ongoing",
  },
];
