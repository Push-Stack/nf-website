import React from "react";

const RoadmapItem = ({ title, description, current }) => {
  return (
    <div className=" px-2  flex-none  flex flex-col gap-6  max-w-xs  items-center relative">
      {current && (
        <div className="absolute -top-12 text-secondary">Current Stage</div>
      )}
      <div className="absolute top-2 h-1 w-full bg-primary z-10" />
      <div
        className={`h-[19px] w-[19px] rounded-full border-2 border-white self-center flex-none z-40 ${
          current ? "bg-primary" : "bg-black"
        }`}
      />
      <h1 className="text-center font-bold">{title}</h1>
      <ul className=" h-full w-full leading-relaxed px-2 uppercase text-sm ">
        {description &&
          Array.isArray(description) &&
          description.map((item, index) => <li key={index}>-{item}</li>)}
      </ul>
    </div>
  );
};

export default RoadmapItem;
