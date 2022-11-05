import Faqs from "../components/Home/Faqs";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import ImagesSection from "../components/Home/ImagesSection";
import OurExperience from "../components/Home/OurExperience";
import OurPartners from "../components/Home/OurPartners";
import OurRoadmap from "../components/Home/OurRoadmap";
import PlayersSection from "../components/Home/PlayersSection";
import PrizePool from "../components/Home/PrizePool";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      {/* <ImagesSection />
      <PlayersSection />
      <PrizePool />
      <OurPartners />
      <OurRoadmap />
      <OurExperience />
      <Faqs />
      <Footer /> */}
    </div>
  );
}
