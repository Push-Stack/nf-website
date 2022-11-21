import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { blurTransition, viewPort } from "../../constants/animations";
import PlayersSectionBg from "../../public/static/player-section-bg-2.jpg";

const PlayersSection = () => {
  return (
    <motion.section
      className="relative min-h-screen py-64 max-w-full overflow-hidden flex items-center"
      id="players-section"
      initial={blurTransition.initialState}
      whileInView={blurTransition.viewTransition}
      viewport={viewPort}
    >
      <Image
        src={PlayersSectionBg}
        fill
        alt="player-section-background"
        className="z-10 object-fill md:object-cover"
        priority
      />
      <div className="absolute z-20 inset-0 h-full w-full bg-black/80" />
      <div className="text-white font-bold max-w-6xl mx-auto text-center uppercase flex flex-col gap-4 relative z-20">
        <h1 className="text-3xl sm:text-5xl text-secondary tracking-wider">
          Where Players come to play
        </h1>
        <h2 className="text-lg sm:text-3xl max-w-3xl mx-auto tracking-widest">
          Play Games, Earn Tickets, &
          <span className="block">Win cash prizes daily</span>
        </h2>
      </div>
    </motion.section>
  );
};

export default PlayersSection;
