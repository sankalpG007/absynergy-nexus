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

  // External link for the gallery item
  href: string;

  span?: "tall" | "wide" | "normal";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "temple-archival",
    title: "Geo-digital archival — Shree Renuka Temple, Mahur",
    caption: "Photos · LiDAR and close range photogrammetry capture",
    type: "image",
    image: heritageImage,

    // Replace with your actual Pixieset URL
    href: "https://your-pixieset-link-here.com",

    span: "wide",
  },

  {
    id: "3d-html",
    title: "3D HTML / Three.js outputs",
    caption: "Web-deliverable digital twins and Gaussian splat scenes",
    type: "image",
    image: labImage,

    // Replace with your actual Pixieset URL if this belongs to photography
    href: "https://your-pixieset-link-here.com",
  },

  {
    id: "drone-video",
    title: "Short power films & 360° videography",
    caption: "Videos · Sitaburdi Fort campus, Nagpur",
    type: "video",
    image: lidarImage,

    // Replace with your actual YouTube playlist
    href: "https://www.youtube.com/@ABsynergy.Nagpur",

    span: "tall",
  },

  {
    id: "mining-survey",
    title: "Mining block drone survey",
    caption: "Photos · Volume estimation for MoEF clearances",
    type: "image",
    image: miningImage,

    // Replace with your actual Pixieset URL
    href: "https://your-pixieset-link-here.com",
  },

  {
    id: "reports",
    title: "PDF reports",
    caption: "Watershed, flood and heritage documentation reports",
    type: "document",
    image: floodImage,

    // Replace with your actual Google Drive folder
    href: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID",
  },

  {
    id: "blogs",
    title: "Blogs & field notes",
    caption: "Notes from survey and capacity building programmes",
    type: "image",
    image: fieldImage,

    // Replace with your actual Medium publication/profile
    href: "https://medium.com/@YOUR_USERNAME",

    span: "wide",
  },
];