import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { BusinessUnits } from "@/components/sections/BusinessUnits";
import { Career } from "@/components/sections/Career";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Domains } from "@/components/sections/Domains";
import { Faq } from "@/components/sections/Faq";
import { Forms } from "@/components/sections/Forms";
import { Founder } from "@/components/sections/Founder";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { ScrollProgress } from "@/components/site/ScrollProgress";

const title = "ABSynergy — Geospatial & Scientific Technology Consulting";
const description =
  "ABSynergy delivers GIS, remote sensing, drone survey, LiDAR and digital twin engineering for government, industry and research across mining, water, environment and heritage.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ABSynergy",
          legalName: "ABSynergy Technologies",
          description,
          email: "connect@absynergy.in",
          telephone: "+91 98400 00000",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4th Floor, Sigma Tech Park, Guindy",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600032",
            addressCountry: "IN",
          },
          subOrganization: [
            { "@type": "Organization", name: "Vasudhayan" },
            { "@type": "Organization", name: "Mandirayan" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Founder />
        <Technologies />
        <Domains />
        <BusinessUnits />
        <Projects />
        <Career />
        <Partners />
        <Clients />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
        <Forms />
      </main>
      <Footer />
    </>
  );
}
