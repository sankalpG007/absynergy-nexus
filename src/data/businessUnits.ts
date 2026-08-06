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
    subtitle: "Geo-Spatial Intelligence",
    description:
      "Vasudhayan delivers earth observation, survey and analytics programmes for land, water and infrastructure. It operates ABSynergy's acquisition fleet, processing pipelines and spatial decision platforms.",
    focus: ["Remote sensing", "UAV & LiDAR survey", "Hydrological modelling", "Spatial decision systems"],
    href: "/vasudhayan",
  },
  {
    id: "mandirayan",
    name: "Mandirayan",
    subtitle: "Temple Ecosystem Solutions",
    description:
      "Mandirayan applies precision documentation and digital twin technology to temple complexes — conserving structures, mapping land assets and modernising administration without disturbing tradition.",
    focus: ["Heritage 3D documentation", "Temple land records", "Conservation planning", "Visitor & facility systems"],
    href: "/mandirayan",
  },
];
