import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { blurTransition, viewPort } from "../../constants/animations";

const OurPartners = () => {
  return (
    <motion.section
      className="py-20 flex flex-col items-center gap-10 relative"
      id="our-partners"
      initial={blurTransition.initialState}
      whileInView={blurTransition.viewTransition}
      viewport={viewPort}
    >
      <Image
        src="/static/ourpartners-background.png"
        alt="ourpartners-background"
        fill
        className="z-10"
        priority
      />
      <div className="absolute z-20 inset-0 h-full w-full bg-black/80" />
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wider uppercase relative z-20">
        Our <span className="text-secondary">Partners</span>
      </h1>
      <div className="relative px-4  z-20  text-white">
        <Image
          src="/static/ourpartners-logo.png"
          alt="ourpartners-logo"
          width={600}
          height={538}
        />
      </div>
    </motion.section>
  );
};

export default OurPartners;
