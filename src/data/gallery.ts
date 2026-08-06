import fieldImage from "@/assets/gallery-field.jpg";
import labImage from "@/assets/gallery-lab.jpg";
import lidarImage from "@/assets/gallery-lidar.jpg";
import miningImage from "@/assets/project-mining.jpg";
import floodImage from "@/assets/project-flood.jpg";
import heritageImage from "@/assets/project-heritage.jpg";

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  type: "image" | "video" | "document";
  image: string;
  href?: string;
  span?: "tall" | "wide" | "normal";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "field-survey",
    title: "Wetland embankment survey",
    caption: "UAV and GNSS field acquisition, Palar basin",
    type: "image",
    image: fieldImage,
    span: "wide",
  },
  {
    id: "operations-centre",
    title: "Geospatial operations centre",
    caption: "Processing and quality control desk",
    type: "image",
    image: labImage,
  },
  {
    id: "lidar-corridor",
    title: "Urban LiDAR corridor",
    caption: "Classified point cloud, 420 km road network",
    type: "image",
    image: lidarImage,
    span: "tall",
  },
  {
    id: "mining-flight",
    title: "Opencast lease flight",
    caption: "Quarterly volumetric mission",
    type: "video",
    image: miningImage,
  },
  {
    id: "flood-report",
    title: "Flood vulnerability report",
    caption: "Methodology and accuracy statement (PDF)",
    type: "document",
    image: floodImage,
  },
  {
    id: "heritage-scan",
    title: "Temple scan session",
    caption: "Terrestrial laser scanning at dawn",
    type: "image",
    image: heritageImage,
    span: "wide",
  },
];
