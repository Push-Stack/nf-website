import Faqs from "../components/home/Faqs";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import ImagesSection from "../components/home/ImagesSection";
import OurExperience from "../components/home/OurExperience";
import OurPartners from "../components/home/OurPartners";
import OurRoadmap from "../components/home/OurRoadmap";
import PlayersSection from "../components/home/PlayersSection";
import PrizePool from "../components/home/PrizePool";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <ImagesSection />
      <PlayersSection />
      <PrizePool />
      <OurPartners />
      <OurRoadmap />
      <OurExperience />
      <Faqs />
      <Footer />
    </div>
  );
}
