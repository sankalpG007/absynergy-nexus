export type BusinessUnit = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  focus: string[];
  href: "/vasudhayan" | "/mandirayan";
};

export const businessUnits: BusinessUnit[] = [
  {
    id: "vasudhayan",
    name: "Vasudhayan",
    subtitle: "Think Spatial",
    description:
      "Vasudhayan provides scientific and technical services based on geospatial technology, across environment, water, mining, forest, urban and river systems.",
    focus: [
      "Environment",
      "Surface and Ground Water",
      "Mining",
      "Forest",
      "Urban Conglomerates",
      "Rivers and Tanks",
      "Geospatial support for CSR activities",
    ],
    href: "/vasudhayan",
  },
  {
    id: "mandirayan",
    name: "Mandirayan®™",
    subtitle: "GeoSpatial Technology based Temple Town Ecosystem Solutions",
    description:
      "Mandirayan®™, a registered trademark entity, is dedicated to introducing futuristic, technology-driven temple ecosystems using DGPS/CORS, Drone, LiDAR, Close Range Photogrammetry, 360° recordings and GPR.",
    focus: [
      "Geo-digital Archival",
      "2D and 3D Master Plan Preparation",
      "Asset Inventory and Documentation",
      "Crowd Management & Footfall Measurement (sensor-based)",
    ],
    href: "/mandirayan",
  },
];
