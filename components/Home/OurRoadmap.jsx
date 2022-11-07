import Image from "next/image";
import React from "react";
import { roadmaps } from "../../constants/roadmap";
import RoadmapItem from "./RoadmapItem";

const OurRoadmap = () => {
  return (
    <section
      id="roadmap"
      className="py-16 text-white relative flex flex-col gap-20"
    >
      <Image
        src="/static/roadmap-bg.png"
        alt="ourroadmap-background"
        fill
        className="z-10"
        priority
      />
      <div className="relative z-20 flex flex-col gap-2 items-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wider uppercase ">
          Our <span className="text-secondary ">Roadmap</span>
        </h1>
        <p className="text-white uppercase text-center text-lg tracking-wide ">
          How we are bringing the arcade to the metaverse
        </p>
      </div>
      <div className="px-4  w-full pt-14 max-w-7xl mx-auto flex   overflow-x-auto relative z-20 scroll-smooth scrollbar-hide">
        {roadmaps.map((roadmap, index) => (
          <RoadmapItem
            key={index}
            title={roadmap.title}
            description={roadmap.description}
            current={roadmap.current}
          />
        ))}
      </div>
    </section>
  );
};

export default OurRoadmap;
