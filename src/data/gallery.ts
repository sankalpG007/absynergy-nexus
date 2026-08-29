import fieldImage from "@/assets/gallery-field.jpg";

import lidarImage from "@/assets/gallery-lidar.jpg";

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
    href: " https://absynergy4.pixieset.com",

    span: "wide",
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
    id: "reports",
    title: "PDF reports",
    caption: "Watershed, flood and heritage documentation reports",
    type: "document",
    image: floodImage,

    // Replace with your actual Google Drive folder
    href: "https://drive.google.com/drive/folders/1ErkDJp_3jppVUtZwzeeETJmUpnBxU7B7?usp=sharing",
  },

  {
    id: "blogs",
    title: "Blogs & field notes",
    caption: "Notes from survey and capacity building programmes",
    type: "image",
    image: fieldImage,

    // Replace with your actual Medium publication/profile
    href: "https://drive.google.com/drive/folders/1ErkDJp_3jppVUtZwzeeETJmUpnBxU7B7?usp=sharing",

    span: "wide",
  },
];