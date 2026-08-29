import krishnaGhatImage from "@/assets/projects/1. Krishna Ghat Restoration and Rejuvenation..JPG.jpeg";
import sitaburdiFortImage from "@/assets/projects/2. DRONE Mapping and Geotagged Videography of Sitaburdi Fort campus, UMANG HQ, Nagpur.JPG.jpeg";
import baranjWatershedImage from "@/assets/projects/3. Preparation of Integrated Watershed Management Plan using RS, GIS and SWAT Analysis @ Baranj Coal Mine Bhadrawati.JPG.jpeg";
import gandhiVidyalayaImage from "@/assets/projects/4. Drone based Heritage Documentation of Gandhi Vidyalaya Arvi.JPG.jpeg";
import nagarParishadImage from "@/assets/projects/5. Drone based Heritage Documentation of Nagar Parishad Building Arvi.JPG.jpeg";
import chikhalgaonImage from "@/assets/projects/6. IBM guidelines-based DRONE survey of Bauxite and Laterite mine Lease at Chikhalgaon, Dapoli Ratnagiri.JPG.jpeg";
import sataraLeasesImage from "@/assets/projects/7. DGPS and DRONE Survey of 3 leases in Satara district as pilot task for volume estimation..JPG (1).jpeg";
import gosekhurdPaddyImage from "@/assets/projects/8. Data recording, Mapping, analysis of Summer Paddy from the Water of Gosekhurd Dam and preparation of power documentary as visual evid.JPG.jpeg";
import jehangirMahalImage from "@/assets/projects/9. GPR Survey at Jehnagir Mahal (State protected monument) Orchha Distt Niwari, Madhya Pradesh..JPG.jpeg";
import yavatmalQuarriesImage from "@/assets/projects/10. Drone Survey of Stone Quarries at Mouza Ner and Narsala, Yavatmal for volume Estimation.JPG.jpeg";
import baranjCoalBlockImage from "@/assets/projects/12. Baranj Coal Block, Bhadrawati, M.S. DRONE SURVEY.JPG.jpeg";
import takliJenaImage from "@/assets/projects/13. Takli Jena Bellora block, Bhadrawati, M. S. DRONE SURVEY.JPG.jpeg";
import ameliyaCoalBlockImage from "@/assets/projects/14 Ameliya Coal Block, Siddhi District, M. P. DRONE SURVEY.JPG.jpeg";
import warwatkarLimestoneImage from "@/assets/projects/15. Warwatkar Limetone Mine, Wani, M. S.  DRONE SURVEY.JPG.jpeg";
import markiMangliImage from "@/assets/projects/16. Marki Mangli Virgin Green Field Mining Block Wani Tahsil Chandrapur M.S. DRONE SURVEY.JPG.jpeg";
import maldiMorparImage from "@/assets/projects/17. Maldi Morpar Block , Chattisgarh,  Bhatapara Block Chattisgarh, Karamdih Block  DRONE SURVEY (2).JPG.jpeg";
import turbheStoneImage from "@/assets/projects/18. Turbhe Stone Quarry Mining Cluster, Navi Mumbai , M. S.  DRONE SURVEY.JPG.jpeg";

/*
 * ============================================================
 * MANDIRAYAN PROJECT IMAGES
 * ============================================================
 */

import renukaTempleImage from "@/assets/projects2/1. Geodigital Archival of Shree Renuka Temple, Mahur Gadmandir, Mahur, Nanded using DGPS and DRONE survey.JPG.jpeg";
import matrutirthaImage from "@/assets/projects2/2. Geodigital Archival of Shree Matrutirtha Heritage tank at Mahur, Nanded using DGPS and DRONE survey.JPG.jpeg";
import anandeshwarImage from "@/assets/projects2/3. Drone Survey & Videography of Anandeshwar Temple and Surrounding  Integrated approach using DRONE and LiDAR..JPG.jpeg";
import bhavaniMandirImage from "@/assets/projects2/4. Drone-Based Documentation of Heritage Building of Bhavani Mandir, Bhatala, Warora(M.H).JPG.jpeg";
import mahadeoMandirImage from "@/assets/projects2/5. Drone-Based Documentation of Heritage Building of Mahadeo Mandir, Bhatala, Warora(M.H).JPG.jpeg";
import markandeshwarImage from "@/assets/projects2/6. Drone Survey & Videography of Markandeshwar Temple, Chamorshi, Gadchiroli and Surrounding Integrated approach usin..jpeg";
import ramtekGadMandirImage from "@/assets/projects2/7. Drone Survey & Videography of Ramtek Gad Mandir temple complex Integrated approach using DRONE.JPG.jpeg";
import kalyaneshwarImage from "@/assets/projects2/8. Drone Survey & Videography of Kalyaneshwar temple complex - Integrated approach using DRONE and LiDAR.JPG.jpeg";
import murlidharImage from "@/assets/projects2/9. Drone Survey & Videography of Murlidhar Temple Nagpur temple complex Integrated approach using.JPG.jpeg";


export type Project = {
  id: string;
  title: string;
  category: "Vasudhayan" | "Mandirayan ™";
  image: string;
  client: string;
  technologies: string[];
  description: string;
};


/*
 * ============================================================
 * PROJECT FILTERS
 * ============================================================
 */

export const projectCategories = [
  "All",
  "Vasudhayan",
  "Mandirayan ™",
] as const;


/*
 * ============================================================
 * PROJECTS
 * ============================================================
 */

export const projects: Project[] = [

  /*
   * ==========================================================
   * VASUDHAYAN PROJECTS
   * ==========================================================
   */

  {
    id: "krishna-ghat",
    title: "Krishna Ghat Restoration and Rejuvenation",
    category: "Vasudhayan",
    image: krishnaGhatImage,
    client: "World Monument Fund India",
    technologies: [
      "DRONE",
      "Close Range Photogrammetry",
      "GIS",
    ],
    description:
      "Geospatial documentation and analysis supporting the restoration and rejuvenation of Krishna Ghat.",
  },

  {
    id: "sitaburdi-fort",
    title:
      "DRONE Mapping and Geotagged Videography of Sitaburdi Fort Campus, UMANG HQ, Nagpur",
    category: "Vasudhayan",
    image: sitaburdiFortImage,
    client: "HQ Sitaburdi Fort, Nagpur",
    technologies: [
      "DRONE",
      "Geotagged Videography",
      "GIS",
      "360° Recording",
    ],
    description:
      "Drone mapping and geotagged videography of the Sitaburdi Fort campus at UMANG HQ, Nagpur.",
  },

  {
    id: "baranj-watershed",
    title:
      "Preparation of Integrated Watershed Management Plan at Baranj Coal Mine, Bhadrawati",
    category: "Vasudhayan",
    image: baranjWatershedImage,
    client: "Karnataka EMTA Coal Mine",
    technologies: [
      "Remote Sensing",
      "GIS",
      "SWAT Analysis",
      "Watershed Management",
    ],
    description:
      "Preparation of an integrated watershed management plan using Remote Sensing, GIS and SWAT analysis for the Baranj Coal Mine area at Bhadrawati.",
  },

  {
    id: "gandhi-vidyalaya-arvi",
    title:
      "Drone-Based Heritage Documentation of Gandhi Vidyalaya, Arvi",
    category: "Vasudhayan",
    image: gandhiVidyalayaImage,
    client: "Nagar Parishad Arvi",
    technologies: [
      "DRONE",
      "Heritage Documentation",
      "Photogrammetry",
    ],
    description:
      "Drone-based heritage documentation and spatial recording of Gandhi Vidyalaya, Arvi.",
  },

  {
    id: "nagar-parishad-arvi",
    title:
      "Drone-Based Heritage Documentation of Nagar Parishad Building, Arvi",
    category: "Vasudhayan",
    image: nagarParishadImage,
    client: "Nagar Parishad Arvi",
    technologies: [
      "DRONE",
      "Heritage Documentation",
      "3D Modelling",
    ],
    description:
      "Drone-based documentation and spatial recording of the historic Nagar Parishad building at Arvi.",
  },

  {
    id: "chikhalgaon-dapoli",
    title:
      "IBM Guidelines-Based DRONE Survey of Bauxite and Laterite Mine Lease at Chikhalgaon, Dapoli, Ratnagiri",
    category: "Vasudhayan",
    image: chikhalgaonImage,
    client: "Srushti Seva Pvt Ltd",
    technologies: [
      "DRONE",
      "DGPS",
      "IBM Guidelines",
      "Volumetrics",
    ],
    description:
      "Drone survey of the Bauxite and Laterite mine lease at Chikhalgaon, Dapoli, Ratnagiri, following IBM guidelines.",
  },

  {
    id: "satara-volumes",
    title:
      "DGPS and DRONE Survey of Three Leases in Satara District for Volume Estimation",
    category: "Vasudhayan",
    image: sataraLeasesImage,
    client: "Collectorate & Mining Department, Satara",
    technologies: [
      "DGPS",
      "DRONE",
      "Volume Estimation",
      "Survey",
    ],
    description:
      "DGPS and drone survey of three mining leases in Satara district as a pilot task for volume estimation.",
  },

  {
    id: "gosekhurd-paddy",
    title:
      "Data Recording, Mapping and Analysis of Summer Paddy from Gosekhurd Dam Water",
    category: "Vasudhayan",
    image: gosekhurdPaddyImage,
    client: "Gondwana University, Gadchiroli",
    technologies: [
      "Remote Sensing",
      "GIS",
      "Agricultural Mapping",
      "Data Analysis",
    ],
    description:
      "Data recording, mapping and analysis of summer paddy cultivation supported by water from Gosekhurd Dam.",
  },

  {
    id: "jehangir-mahal-gpr",
    title:
      "GPR Survey at Jehangir Mahal, Orchha — State Protected Monument",
    category: "Vasudhayan",
    image: jehangirMahalImage,
    client: "MP Heritage Department",
    technologies: [
      "GPR",
      "Subsurface Survey",
      "3D Modelling",
      "Heritage Documentation",
    ],
    description:
      "Ground Penetrating Radar survey at Jehangir Mahal, a state protected monument in Orchha, Madhya Pradesh.",
  },

  {
    id: "yavatmal-quarries",
    title:
      "Drone Survey of Stone Quarries at Mouza Ner and Narsala, Yavatmal",
    category: "Vasudhayan",
    image: yavatmalQuarriesImage,
    client: "Collectorate & Mining Department, Yavatmal",
    technologies: [
      "DRONE",
      "Volume Estimation",
      "GIS",
      "Photogrammetry",
    ],
    description:
      "Drone survey of stone quarries at Mouza Ner and Narsala, Yavatmal for volume estimation.",
  },

  

  {
    id: "baranj-coal-block",
    title:
      "Baranj Coal Block, Bhadrawati — DRONE Survey",
    category: "Vasudhayan",
    image: baranjCoalBlockImage,
    client: "Mining Sector Client",
    technologies: [
      "DRONE",
      "Mining Survey",
      "GIS",
      "Volumetrics",
    ],
    description:
      "Drone survey and spatial documentation of the Baranj Coal Block at Bhadrawati.",
  },

  {
    id: "takli-jena-bellora",
    title:
      "Takli Jena Bellora Block, Bhadrawati — DRONE Survey",
    category: "Vasudhayan",
    image: takliJenaImage,
    client: "Mining Sector Client",
    technologies: [
      "DRONE",
      "Mining Survey",
      "GIS",
      "Volumetrics",
    ],
    description:
      "Drone survey and spatial documentation of the Takli Jena Bellora mining block at Bhadrawati.",
  },

  {
    id: "ameliya-coal-block",
    title:
      "Ameliya Coal Block, Sidhi District, Madhya Pradesh — DRONE Survey",
    category: "Vasudhayan",
    image: ameliyaCoalBlockImage,
    client: "Mining Sector Client",
    technologies: [
      "DRONE",
      "Mining Survey",
      "GIS",
      "Volumetrics",
    ],
    description:
      "Drone survey and spatial documentation of the Ameliya Coal Block in Sidhi District, Madhya Pradesh.",
  },

  {
    id: "warwatkar-limestone",
    title:
      "Warwatkar Limestone Mine, Wani, Maharashtra — DRONE Survey",
    category: "Vasudhayan",
    image: warwatkarLimestoneImage,
    client: "Mining Sector Client",
    technologies: [
      "DRONE",
      "Mining Survey",
      "GIS",
      "Volumetrics",
    ],
    description:
      "Drone survey and spatial documentation of the Warwatkar Limestone Mine at Wani, Maharashtra.",
  },

  {
    id: "marki-mangli",
    title:
      "Marki Mangli Virgin Green Field Mining Block, Wani, Chandrapur",
    category: "Vasudhayan",
    image: markiMangliImage,
    client: "Mining Sector Client",
    technologies: [
      "DRONE",
      "Mining Survey",
      "GIS",
      "Environmental Mapping",
    ],
    description:
      "Drone survey and spatial documentation of the Marki Mangli Virgin Green Field Mining Block in Wani Tahsil, Chandrapur.",
  },

  {
    id: "maldi-morpar",
    title:
      "Maldi Morpar, Bhatapara and Karamdih Blocks, Chhattisgarh — DRONE Survey",
    category: "Vasudhayan",
    image: maldiMorparImage,
    client: "Mining Sector Client",
    technologies: [
      "DRONE",
      "Mining Survey",
      "GIS",
      "Volumetrics",
    ],
    description:
      "Drone survey and spatial documentation covering the Maldi Morpar, Bhatapara and Karamdih mining blocks in Chhattisgarh.",
  },

  {
    id: "turbhe-stone-quarry",
    title:
      "Turbhe Stone Quarry Mining Cluster, Navi Mumbai — DRONE Survey",
    category: "Vasudhayan",
    image: turbheStoneImage,
    client: "Mining Sector Client",
    technologies: [
      "DRONE",
      "Mining Survey",
      "GIS",
      "Volumetrics",
    ],
    description:
      "Drone survey and spatial documentation of the Turbhe Stone Quarry Mining Cluster in Navi Mumbai, Maharashtra.",
  },


  /*
   * ==========================================================
   * MANDIRAYAN PROJECTS
   * ==========================================================
   */

  {
    id: "mahur-renuka",
    title:
      "Geodigital Archival of Shree Renuka Temple, Mahur Gadmandir, Mahur, Nanded",
    category: "Mandirayan ™",
    image: renukaTempleImage,
    client: "Shree Renuka Mata Temple Trust, Mahur",
    technologies: [
      "DGPS",
      "DRONE",
      "Geo-digital Archival",
      "Photogrammetry",
    ],
    description:
      "Geo-digital archival of Shree Renuka Temple, Mahur Gadmandir, Mahur, Nanded using DGPS and drone survey.",
  },

  {
    id: "mahur-matrutirtha",
    title:
      "Geodigital Archival of Shree Matrutirtha Heritage Tank at Mahur, Nanded",
    category: "Mandirayan ™",
    image: matrutirthaImage,
    client: "Shree Renuka Mata Temple Trust, Mahur",
    technologies: [
      "DGPS",
      "DRONE",
      "Geo-digital Archival",
      "Heritage Documentation",
    ],
    description:
      "Geo-digital archival of the Shree Matrutirtha Heritage Tank at Mahur, Nanded using DGPS and drone survey.",
  },

  {
    id: "anandeshwar",
    title:
      "Drone Survey & Videography of Anandeshwar Temple and Surrounding Area",
    category: "Mandirayan ™",
    image: anandeshwarImage,
    client: "Maharashtra State Road Development Corporation",
    technologies: [
      "DRONE",
      "LiDAR",
      "Videography",
      "Heritage Documentation",
    ],
    description:
      "Drone survey and videography of Anandeshwar Temple and its surrounding area using an integrated drone and LiDAR approach.",
  },

  {
    id: "bhavani-bhatala",
    title:
      "Drone-Based Documentation of Heritage Building of Bhavani Mandir, Bhatala, Warora",
    category: "Mandirayan ™",
    image: bhavaniMandirImage,
    client: "State Archaeology, Maharashtra",
    technologies: [
      "DRONE",
      "LiDAR",
      "Heritage Documentation",
      "3D Modelling",
    ],
    description:
      "Drone-based documentation of the heritage building of Bhavani Mandir at Bhatala, Warora, Maharashtra.",
  },

  {
    id: "mahadeo-bhatala",
    title:
      "Drone-Based Documentation of Heritage Building of Mahadeo Mandir, Bhatala, Warora",
    category: "Mandirayan ™",
    image: mahadeoMandirImage,
    client: "State Archaeology, Maharashtra",
    technologies: [
      "DRONE",
      "LiDAR",
      "Heritage Documentation",
      "3D Modelling",
    ],
    description:
      "Drone-based documentation of the heritage building of Mahadeo Mandir at Bhatala, Warora, Maharashtra.",
  },

  {
    id: "markandeshwar",
    title:
      "Drone Survey & Videography of Markandeshwar Temple, Chamorshi, Gadchiroli",
    category: "Mandirayan ™",
    image: markandeshwarImage,
    client: "Maharashtra State Road Development Corporation",
    technologies: [
      "DRONE",
      "LiDAR",
      "Videography",
      "Heritage Documentation",
    ],
    description:
      "Drone survey and videography of Markandeshwar Temple, Chamorshi, Gadchiroli and its surrounding area using an integrated approach.",
  },

  {
    id: "ramtek-gad-mandir",
    title:
      "Drone Survey & Videography of Ramtek Gad Mandir Temple Complex",
    category: "Mandirayan ™",
    image: ramtekGadMandirImage,
    client: "NHAI",
    technologies: [
      "DRONE",
      "Videography",
      "Heritage Documentation",
      "Spatial Analysis",
    ],
    description:
      "Drone survey and videography of the Ramtek Gad Mandir temple complex using an integrated drone-based approach.",
  },

  {
    id: "kalyaneshwar",
    title:
      "Drone Survey & Videography of Kalyaneshwar Temple Complex",
    category: "Mandirayan ™",
    image: kalyaneshwarImage,
    client: "Shewalkar Builders, Nagpur",
    technologies: [
      "DRONE",
      "LiDAR",
      "Videography",
      "Heritage Documentation",
    ],
    description:
      "Drone survey and videography of the Kalyaneshwar temple complex using an integrated drone and LiDAR approach.",
  },

  {
    id: "murlidhar",
    title:
      "Drone Survey & Videography of Murlidhar Temple Complex, Nagpur",
    category: "Mandirayan ™",
    image: murlidharImage,
    client: "VIPL, Nagpur",
    technologies: [
      "DRONE",
      "Videography",
      "Heritage Documentation",
      "Spatial Documentation",
    ],
    description:
      "Drone survey and videography of the Murlidhar Temple complex in Nagpur using an integrated approach.",
  },
];