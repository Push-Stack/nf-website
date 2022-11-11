import Image from "next/image";
import React from "react";

const ImageItem = ({ src, alt, mainText, spanText }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className="z-10 rounded-md shadow shadow-black object-cover"
      />
      <div className="absolute text-white  inset-0 top-[15.5rem] left-0 sm:-left-6 ">
        <p className="bg-primary rounded-sm uppercase py-1 px-[10%] w-[60%]    text-xl sm:text-2xl font-bold">
          {mainText}
          <span className="font-normal block">{spanText}</span>
        </p>
      </div>
    </>
  );
};

export default ImageItem;
