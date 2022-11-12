import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ImageItem from "./ImageItem";
import { transitionDuration, upTransitions } from "../../constants/animations";
import ImageSectionBg from "../../public/static/image-section-bg.png";
import PlayGames from "../../public/static/play-games.png";
import EarnTickets from "../../public/static/earn-tickets.png";
import WinMoney from "../../public/static/win-money.png";

const ImagesSection = () => {
  return (
    <section
      className="relative py-28 max-w-full overflow-hidden"
      id="images-section"
    >
      <Image
        src={ImageSectionBg}
        fill
        alt="image-section-background"
        className="z-10 object-cover"
        priority
      />
      <motion.div
        className="w-full flex-wrap flex flex-col px-4 items-center justify-center sm:flex-row gap-10 lg:gap-16 relative z-20"
        initial={upTransitions.initialState}
        whileInView={upTransitions.animateState}
        transition={transitionDuration}
        viewport={{ once: true }}
      >
        <div className="relative max-w-xs ">
          <ImageItem
            src={PlayGames}
            alt="play-games"
            mainText="Play"
            spanText="Games"
          />
        </div>
        <div className="relative max-w-xs ">
          <ImageItem
            src={EarnTickets}
            alt="earn-tickets"
            mainText="Earn"
            spanText="Tickets"
          />
        </div>

        <div className="relative max-w-xs ">
          <ImageItem
            src={WinMoney}
            alt="win-money"
            mainText="Win"
            spanText="Money"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ImagesSection;
