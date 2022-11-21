import dynamic from "next/dynamic";

import Header from "../components/Home/Header";
import ImagesSection from "../components/Home/ImagesSection";

const PlayersSection = dynamic(() =>
  import("../components/Home/PlayersSection")
);

const OurPartners = dynamic(() => import("../components/Home/OurPartners"));
const OurRoadmap = dynamic(() => import("../components/Home/OurRoadmap"));
const OurExperience = dynamic(() => import("../components/Home/OurExperience"));
const Faqs = dynamic(() => import("../components/Home/Faqs"));
const Footer = dynamic(() => import("../components/Home/Footer"));

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <ImagesSection />
      <PlayersSection />

      <OurPartners />
      <OurRoadmap />
      <OurExperience />
      <Faqs />
      <Footer />
    </div>
  );
}
