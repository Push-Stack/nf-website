import Image from "next/image";
import React from "react";

const OurRoadmap = () => {
  return (
    <div className="py-14 text-white relative">
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
    </div>
  );
};

export default OurRoadmap;
