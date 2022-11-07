import Image from "next/image";
import React from "react";
import ImageItem from "./ImageItem";

const ImagesSection = () => {
  return (
    <section className="relative py-16" id="images-section">
      <Image
        src="/static/image-section-bg.png"
        fill
        alt="image-section-background"
        className="z-10"
        priority
      />
      <div className="w-full flex-wrap flex flex-col px-4 items-center justify-center sm:flex-row gap-10 lg:gap-16 relative z-20">
        <div className="relative">
          <ImageItem
            src="/static/play-games.png"
            alt="play-games"
            mainText="Play"
            spanText="Games"
          />
        </div>
        <div className="relative">
          <ImageItem
            src="/static/earn-tickets.png"
            alt="earn-tickets"
            mainText="Earn"
            spanText="Tickets"
          />
        </div>

        <div className="relative">
          <ImageItem
            src="/static/win-money.png"
            alt="win-money"
            mainText="Win"
            spanText="Money"
          />
        </div>
      </div>
    </section>
  );
};

export default ImagesSection;
