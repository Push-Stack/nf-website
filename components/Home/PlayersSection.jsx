import Image from "next/image";
import React from "react";

const PlayersSection = () => {
  return (
    <section className="relative  pt-48 pb-36" id="players-section">
      <Image
        src="/static/player-section-bg.png"
        fill
        alt="player-section-background"
        className="z-10  "
      />
      <div className="absolute z-20 inset-0 h-full w-full bg-black/80" />
      <div className="text-white font-bold max-w-6xl mx-auto text-center uppercase flex flex-col gap-4 relative z-20">
        <h1 className="text-3xl sm:text-5xl text-secondary tracking-wider">
          Where Players come to play
        </h1>
        <h4 className="text-lg sm:text-3xl max-w-3xl mx-auto tracking-widest">
          Play Games, Earn Tickets, &
          <span className="block">Win cash prizes daily</span>
        </h4>
      </div>
    </section>
  );
};

export default PlayersSection;
