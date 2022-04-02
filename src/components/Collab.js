import React from "react";
import content from "../content";

const Collab = () => {
  return (
    <div
      id="collab"
      className="flex flex-col h-fit w-10/12 items-center mx-auto mb-10 mt-20 max-w-[1500px]"
    >
      <h2 className="text-4xl m-10 text-center">Collab</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {content.collab.map((item, index) => (
          <a
            key={index}
            href=""
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center hover:ring-1 ring-white rounded-lg"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="object-contain max-h-52"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Collab;
