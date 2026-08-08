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
    id: "temple-archival",
    title: "Geo-digital archival — Shree Renuka Temple, Mahur",
    caption: "Photos · LiDAR and close range photogrammetry capture",
    type: "image",
    image: heritageImage,
    span: "wide",
  },
  {
    id: "3d-html",
    title: "3D HTML / Three.js outputs",
    caption: "Web-deliverable digital twins and Gaussian splat scenes",
    type: "image",
    image: labImage,
  },
  {
    id: "drone-video",
    title: "Short power films & 360° videography",
    caption: "Videos · Sitaburdi Fort campus, Nagpur",
    type: "video",
    image: lidarImage,
    span: "tall",
  },
  {
    id: "mining-survey",
    title: "Mining block drone survey",
    caption: "Photos · Volume estimation for MoEF clearances",
    type: "image",
    image: miningImage,
  },
  {
    id: "reports",
    title: "PDF reports",
    caption: "Watershed, flood and heritage documentation reports",
    type: "document",
    image: floodImage,
  },
  {
    id: "blogs",
    title: "Blogs & field notes",
    caption: "Notes from survey and capacity building programmes",
    type: "image",
    image: fieldImage,
    span: "wide",
  },
];
