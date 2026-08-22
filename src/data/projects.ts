import miningImage from "@/assets/project-mining.jpg";
import floodImage from "@/assets/project-flood.jpg";
import heritageImage from "@/assets/wai_project_infographic.jpeg";
import lidarImage from "@/assets/gallery-lidar.jpg";
import fieldImage from "@/assets/gallery-field.jpg";
import labImage from "@/assets/gallery-lab.jpg";

export type Project = {
  id: string;
  title: string;
  category: "Vasudhayan" | "Mandirayan ™";
  image: string;
  client: string;
  technologies: string[];
  description: string;
};

export const projectCategories = ["All", "Vasudhayan", "Mandirayan™"] as const;

export const projects: Project[] = [
  {
    id: "krishna-ghat",
    title: "Krishna Ghat Restoration and Rejuvenation",
    category: "Vasudhayan",
    image: heritageImage,
    client: "World Monument Fund India",
    technologies: ["DRONE", "Close Range Photogrammetry", "GIS"],
    description:
      "Geospatial documentation and analysis supporting the restoration and rejuvenation of the Krishna Ghat.",
  },
  {
    id: "sitaburdi-fort",
    title: "DRONE Mapping & Geotagged Videography of Sitaburdi Fort Campus",
    category: "Vasudhayan",
    image: lidarImage,
    client: "HQ Sitaburdi Fort, Nagpur",
    technologies: ["DRONE", "360 Video", "GIS"],
    description:
      "Drone mapping and geotagged videography of the Sitaburdi Fort campus, Nagpur.",
  },
  {
    id: "baranj-watershed",
    title: "Integrated Watershed Management Plan @ Baranj Coal Mine Bhadrawati",
    category: "Vasudhayan",
    image: fieldImage,
    client: "Karnataka Emta Coal Mine",
    technologies: ["Remote Sensing", "SWAT", "GIS"],
    description:
      "Preparation of an integrated watershed management plan for the Baranj coal mine area at Bhadrawati.",
  },
  {
    id: "gandhi-vidyalaya-arvi",
    title: "Drone-Based Heritage Documentation of Gandhi Vidyalaya Arvi",
    category: "Vasudhayan",
    image: heritageImage,
    client: "Nagar Parishad Arvi",
    technologies: ["DRONE", "Close Range Photogrammetry"],
    description: "Drone-based heritage documentation of Gandhi Vidyalaya, Arvi.",
  },
  {
    id: "nagar-parishad-arvi",
    title: "Drone-Based Heritage Documentation of Nagar Parishad Building Arvi",
    category: "Vasudhayan",
    image: labImage,
    client: "Nagar Parishad Arvi",
    technologies: ["DRONE", "3D Digital Twin"],
    description: "Drone-based heritage documentation of the Nagar Parishad building, Arvi.",
  },
  {
    id: "chikhalgaon-dapoli",
    title: "IBM Guidelines-Based DRONE Survey of Mine Lease at Chikhalgaon, Dapoli",
    category: "Vasudhayan",
    image: miningImage,
    client: "Srushti Seva Pvt Ltd",
    technologies: ["DRONE", "DGPS", "Volumetrics"],
    description:
      "Mine lease survey at Chikhalgaon, Dapoli, carried out as per Indian Bureau of Mines guidelines.",
  },
  {
    id: "satara-volumes",
    title: "DGPS and DRONE Survey for Volume Estimation across 3 Leases",
    category: "Vasudhayan",
    image: miningImage,
    client: "Collectorate & Mining Dept, Satara",
    technologies: ["DGPS", "DRONE", "Volumetrics"],
    description:
      "DGPS and drone survey for volume estimation across three mining leases in Satara district.",
  },
  {
    id: "gosekhurd-paddy",
    title: "Summer Paddy Mapping & Analysis from Gosekhurd Dam Water",
    category: "Vasudhayan",
    image: fieldImage,
    client: "Gondwana University, Gadchiroli",
    technologies: ["Remote Sensing", "GIS"],
    description:
      "Mapping and analysis of summer paddy cultivation irrigated from Gosekhurd dam water.",
  },
  {
    id: "jehangir-mahal-gpr",
    title: "GPR Survey at Jehangir Mahal (State Protected Monument), Orchha",
    category: "Vasudhayan",
    image: heritageImage,
    client: "MP Heritage Department",
    technologies: ["GPR", "Below Ground 3D Modelling"],
    description:
      "Ground penetrating radar survey at Jehangir Mahal, Orchha, a state protected monument.",
  },
  {
    id: "yavatmal-quarries",
    title: "Drone Survey of Stone Quarries at Mouza Ner & Narsala for Volume Estimation",
    category: "Vasudhayan",
    image: miningImage,
    client: "Collectorate & Mining Dept, Yavatmal",
    technologies: ["DRONE", "Volumetrics", "GIS"],
    description:
      "Drone survey of stone quarries at Mouza Ner and Narsala for volume estimation.",
  },
  {
    id: "ramtek-ropeway-hia",
    title: "Drone Survey for Heritage Impact Assessment of Ramtek Gad Mandir Ropeway",
    category: "Vasudhayan",
    image: lidarImage,
    client: "NHAI",
    technologies: ["DRONE", "Heritage Impact Assessment"],
    description:
      "Drone survey supporting the heritage impact assessment for the proposed Ramtek Gad Mandir ropeway.",
  },
  {
    id: "moef-mining-blocks",
    title: "Mining Block DRONE Surveys for MoEF Clearances",
    category: "Vasudhayan",
    image: miningImage,
    client: "Multiple mining operators",
    technologies: ["DRONE", "DGPS", "GIS"],
    description:
      "Drone surveys for MoEF clearances covering Baranj Coal Block, Takli Jena Bellora Block, Ameliya Coal Block (Siddhi, M.P.), Warwatkar Limestone Mine, Marki Mangli Mining Block, Maldi Morpar / Bhatapara / Karamdih Blocks (Chattisgarh) and Turbhe Stone Quarry Mining Cluster (Navi Mumbai).",
  },
  {
    id: "mahur-renuka",
    title: "Geodigital Archival of Shree Renuka Temple, Mahur Gadmandir",
    category: "Mandirayan ™",
    image: heritageImage,
    client: "Shree Renuka Mata Temple Trust Mahur",
    technologies: ["LiDAR", "DRONE", "Close Range Photogrammetry"],
    description:
      "Geo-digital archival of the Shree Renuka Temple at Mahur Gadmandir.",
  },
  {
    id: "mahur-matrutirtha",
    title: "Geodigital Archival of Shree Matrutirtha Heritage Tank, Mahur",
    category: "Mandirayan ™",
    image: floodImage,
    client: "Shree Renuka Mata Temple Trust Mahur",
    technologies: ["Bathymetry", "DRONE", "Photogrammetry"],
    description: "Geo-digital archival of the Shree Matrutirtha heritage tank at Mahur.",
  },
  {
    id: "anandeshwar",
    title: "Drone Survey & Videography of Anandeshwar Temple (ASI Protected)",
    category: "Mandirayan ™",
    image: heritageImage,
    client: "MSRDC",
    technologies: ["DRONE", "360 Video"],
    description:
      "Drone survey and videography of the ASI protected Anandeshwar Temple.",
  },
  {
    id: "bhavani-bhatala",
    title: "Drone-Based Documentation of Bhavani Mandir, Bhatala, Warora",
    category: "Mandirayan ™",
    image: labImage,
    client: "State Archaeology, Maharashtra",
    technologies: ["DRONE", "Photogrammetry"],
    description: "Drone-based documentation of Bhavani Mandir at Bhatala, Warora.",
  },
  {
    id: "mahadeo-bhatala",
    title: "Drone-Based Documentation of Mahadeo Mandir, Bhatala, Warora",
    category: "Mandirayan ™",
    image: heritageImage,
    client: "State Archaeology, Maharashtra",
    technologies: ["DRONE", "Photogrammetry"],
    description: "Drone-based documentation of Mahadeo Mandir at Bhatala, Warora.",
  },
  {
    id: "markandeshwar",
    title: "Drone Survey & Videography of Markandeshwar Temple, Chamorshi (ASI Protected)",
    category: "Mandirayan ™",
    image: lidarImage,
    client: "MSRDC",
    technologies: ["DRONE", "360 Video"],
    description:
      "Drone survey and videography of the ASI protected Markandeshwar Temple at Chamorshi.",
  },
  {
    id: "ramtek-gad-mandir",
    title: "Drone Survey & Videography of Ramtek Gad Mandir Temple Complex",
    category: "Mandirayan ™",
    image: heritageImage,
    client: "NHAI",
    technologies: ["DRONE", "360 Video", "GIS"],
    description: "Drone survey and videography of the Ramtek Gad Mandir temple complex.",
  },
  {
    id: "kalyaneshwar",
    title: "Drone Survey & Videography of Kalyaneshwar Temple Complex",
    category: "Mandirayan ™",
    image: fieldImage,
    client: "Shewalkar Builders, Nagpur",
    technologies: ["DRONE", "Photogrammetry"],
    description: "Drone survey and videography of the Kalyaneshwar temple complex.",
  },
  {
    id: "murlidhar",
    title: "Drone Survey & Videography of Murlidhar Temple Complex, Nagpur",
    category: "Mandirayan ™",
    image: labImage,
    client: "VIPL, Nagpur",
    technologies: ["DRONE", "360 Video"],
    description: "Drone survey and videography of the Murlidhar temple complex, Nagpur.",
  },
];
