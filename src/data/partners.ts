export type Logo = { id: string; name: string; kind: string };

export const partners: Logo[] = [
  { id: "p1", name: "GeoSense Systems", kind: "Technology" },
  { id: "p2", name: "Orbital Imaging Co.", kind: "Satellite data" },
  { id: "p3", name: "TerraScan Labs", kind: "LiDAR" },
  { id: "p4", name: "HydroModel Group", kind: "Modelling" },
  { id: "p5", name: "AeroSurvey India", kind: "UAV fleet" },
  { id: "p6", name: "CartoWorks", kind: "Cartography" },
  { id: "p7", name: "SensorGrid", kind: "IoT hardware" },
  { id: "p8", name: "Meridian Geotech", kind: "Geotechnical" },
];

export const clients: (Logo & { sector: "Government" | "Private" | "Research" })[] = [
  { id: "c1", name: "State Water Resources Dept.", kind: "Department", sector: "Government" },
  { id: "c2", name: "District Administration", kind: "Administration", sector: "Government" },
  { id: "c3", name: "Municipal Corporation", kind: "Urban body", sector: "Government" },
  { id: "c4", name: "Mineral Development Corp.", kind: "PSU", sector: "Government" },
  { id: "c5", name: "Northline Mining Group", kind: "Industry", sector: "Private" },
  { id: "c6", name: "Anvaya Infrastructure", kind: "Infrastructure", sector: "Private" },
  { id: "c7", name: "Greenfield Energy", kind: "Renewables", sector: "Private" },
  { id: "c8", name: "Temple Devasthanam Board", kind: "Trust", sector: "Private" },
  { id: "c9", name: "Institute of Earth Sciences", kind: "Research", sector: "Research" },
  { id: "c10", name: "State Technical University", kind: "Academia", sector: "Research" },
  { id: "c11", name: "Centre for Water Studies", kind: "Research", sector: "Research" },
  { id: "c12", name: "National Remote Sensing Lab", kind: "Research", sector: "Research" },
];
