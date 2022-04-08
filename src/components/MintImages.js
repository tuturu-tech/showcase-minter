import React from "react";
import content from "../content";

const MintImages = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 h-fit mb-20 w-10/12 mx-auto">
      {content.mintImages.images.map((image, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center flex-1 rounded-2xl m-2 h-full group"
        >
          <div className="absolute inset-0 bg-blue-400 rounded-2xl group-hover:animate-glow group-hover:scale-105"></div>
          <div className="relative flex flex-col items-center flex-1 bg-white rounded-2xl p-2 h-full group-hover:scale-105">
            <img
              src={image}
              alt={content.mintImages.alt}
              className="rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MintImages;
