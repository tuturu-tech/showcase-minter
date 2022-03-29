import React from "react";
import { RiTwitterFill, RiInstagramLine } from "react-icons/ri";

const Card = ({ image, alt, name, title, description, socials, hover }) => {
  return (
    <div className="relative flex flex-col items-center flex-1 rounded-2xl m-5 h-full group">
      <div className="absolute inset-0 bg-blue-400 rounded-2xl group-hover:animate-glow group-hover:scale-105"></div>
      <div className="relative flex flex-col items-center flex-1 bg-white rounded-2xl p-5 h-full group-hover:scale-105">
        <img src={image} alt={alt} className="rounded-2xl mb-2" />
        <h2 className="text-black font-bold mb-2 text-xl ">{name}</h2>
        <h2 className="text-purple-500 font-bold mb-2 text-center">{title}</h2>
        <p className="text-blue-900 mb-6 text-center">{description}</p>
        {socials && (
          <div className="absolute flex flex-row gap-x-2 items-center bottom-0 mb-4">
            <a
              href={socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-2 bg-gray-500 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 rounded-full h-10 w-10 hover:ring-1 ring-pink-500"
            >
              <RiTwitterFill className="h-10 w-10 text-white" />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-2 bg-gray-500 group-hover:bg-pink-500 rounded-full h-10 w-10 hover:ring-1 ring-pink-500"
            >
              <RiInstagramLine className="h-10 w-10 text-white" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
