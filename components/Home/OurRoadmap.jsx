import Image from "next/image";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import {
  blurTransition,
  transitionDuration,
  upTransitions,
  viewPort,
} from "../../constants/animations";

import { pageLinks } from "../../constants/pageLinks";
import { roadmaps } from "../../constants/roadmap";
import RoadmapItem from "./RoadmapItem";

const OurRoadmap = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 150;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 150;
    }
  };

  return (
    <section
      id={pageLinks.roadmap.replace("#", "")}
      className="py-16 text-white relative flex flex-col gap-20"
    >
      <Image
        src="/static/roadmap-bg.png"
        alt="ourroadmap-background"
        fill
        className="z-10"
        priority
      />
      <motion.div
        className="relative z-20 flex flex-col gap-2 items-center px-4"
        initial={blurTransition.initialState}
        whileInView={blurTransition.viewTransition}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wider uppercase">
          Our <span className="text-secondary ">Roadmap</span>
        </h1>
        <p className="text-white uppercase text-center text-lg tracking-wide ">
          How we are bringing the arcade to the metaverse
        </p>
      </motion.div>
      <motion.div
        className="w-full group relative z-20"
        initial={upTransitions.initialState}
        whileInView={upTransitions.animateState}
        transition={transitionDuration}
        viewPort={viewPort}
      >
        <div
          ref={sliderRef}
          className="pl-4 pr-10  w-full pt-14 max-w-7xl mx-auto flex   overflow-x-auto   scroll-smooth scrollbar-hide "
        >
          {roadmaps.length && (
            <IoIosArrowBack
              onClick={slideLeft}
              className="text-4xl bg-primary rounded-full cursor-pointer opacity-50 text-white absolute left-10 top-[50%] -translate-y-[50%] hover:opacity-100 hidden group-hover:sm:block z-50"
            />
          )}

          {roadmaps.map((roadmap, index) => (
            <RoadmapItem
              key={index}
              title={roadmap.title}
              description={roadmap.description}
              current={roadmap.current}
            />
          ))}
          {roadmaps.length && (
            <IoIosArrowForward
              onClick={slideRight}
              className="text-4xl bg-primary rounded-full cursor-pointer opacity-50 text-white absolute right-10 top-[50%] -translate-y-[50%] hover:opacity-100 hidden group-hover:sm:block z-50"
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default OurRoadmap;
