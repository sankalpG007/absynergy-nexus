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
import ramtekRopewayImage from "@/assets/projects/11. project-heritage.jpg";
import baranjCoalBlockImage from "@/assets/projects/12. Baranj Coal Block, Bhadrawati, M.S. DRONE SURVEY.JPG.jpeg";
import takliJenaImage from "@/assets/projects/13. Takli Jena Bellora block, Bhadrawati, M. S. DRONE SURVEY.JPG.jpeg";
import ameliyaCoalBlockImage from "@/assets/projects/14 Ameliya Coal Block, Siddhi District, M. P. DRONE SURVEY.JPG.jpeg";
import warwatkarLimestoneImage from "@/assets/projects/15. Warwatkar Limetone Mine, Wani, M. S.  DRONE SURVEY.JPG.jpeg";
import markiMangliImage from "@/assets/projects/16. Marki Mangli Virgin Green Field Mining Block Wani Tahsil Chandrapur M.S. DRONE SURVEY.JPG.jpeg";
import maldiMorparImage from "@/assets/projects/17. Maldi Morpar Block , Chattisgarh,  Bhatapara Block Chattisgarh, Karamdih Block  DRONE SURVEY (2).JPG.jpeg";
import turbheStoneImage from "@/assets/projects/18. Turbhe Stone Quarry Mining Cluster, Navi Mumbai , M. S.  DRONE SURVEY.JPG.jpeg";

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
 * PROJECT FILTERS
 *
 * Keep the category text exactly the same as the
 * category values used in the projects below.
 */
export const projectCategories = [
  "All",
  "Vasudhayan",
  "Mandirayan ™",
] as const;


/*
 * PROJECTS
 *
 * 18 Vasudhayan projects are currently populated
 * with the images supplied by the client.
 *
 * Mandirayan projects can be added later when the
 * remaining 9 images are received.
 */
export const projects: Project[] = [
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
    id: "ramtek-ropeway-hia",
    title:
      "Drone Survey for Heritage Impact Assessment of Ramtek Gad Mandir Ropeway",
    category: "Vasudhayan",
    image: ramtekRopewayImage,
    client: "NHAI",
    technologies: [
      "DRONE",
      "Heritage Impact Assessment",
      "Spatial Analysis",
    ],
    description:
      "Drone-based spatial survey supporting the heritage impact assessment of the proposed Ramtek Gad Mandir ropeway.",
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
   * ============================================================
   * MANDIRAYAN PROJECTS
   * ============================================================
   *
   * The 9 Mandirayan photographs have not been added yet.
   *
   * When the client provides them, add the projects below
   * without changing the Projects.tsx component.
   */
];