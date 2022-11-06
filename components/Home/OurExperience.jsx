import Image from "next/image";
import React from "react";

const OurExperience = () => {
  return (
    <section
      className="py-20 flex flex-col items-center gap-10 relative"
      id="our-partners"
    >
      <Image
        src="/static/ourexperience-bg.png"
        alt="ourexperience-background"
        fill
        className="z-10"
      />
      <div className="absolute z-20 inset-0 h-full w-full bg-black/50" />
      <div className="relative z-20 flex flex-col gap-6 items-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-wider uppercase ">
          Our <span className="text-secondary ">Experience</span>
        </h1>
        <p className="text-white uppercase text-center text-xl sm:text-2xl tracking-wide ">
          Here are a few of the brands that we've worked with:
        </p>
      </div>

      <div className="relative px-4  z-20  text-white">
        <Image
          src="/static/our-experience.png"
          alt="our-experience"
          width={750}
          height={538}
        />
      </div>
    </section>
  );
};

export default OurExperience;
