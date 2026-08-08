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
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { ScrollProgress } from "@/components/site/ScrollProgress";

const title = "ABsynergy — Scientific and Technical Consultancy, Nagpur";
const description =
  "ABsynergy combines Remote Sensing, Drone Surveys, LiDAR, GPR and Spatial Analytics to deliver data-driven intelligence for geo-environmental, heritage and infrastructural challenges.";

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
          name: "ABsynergy",
          legalName: "ABsynergy",
          description,
          foundingDate: "2014",
          email: "absynergy.nagpur@gmail.com",
          telephone: "+91 7720046490",
          url: "https://absynergy.com",
          founder: { "@type": "Person", name: "Dr. Ajay Deshpande" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "\"Shaishavaha\", First Floor, 53, Nav-Nirman Society, Pratap Nagar",
            addressLocality: "Nagpur",
            addressRegion: "Maharashtra",
            postalCode: "440022",
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
        <Faq />
        <Contact />
        <Forms />
      </main>
      <Footer />
    </>
  );
}
