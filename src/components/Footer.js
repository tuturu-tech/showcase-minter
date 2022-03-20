import React from "react";
import content from "../content";

const Footer = () => {
  return (
    <div className="relative z-10 top-0 right-0 bg-[#25279e] h-28 pt-2 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-10/12 h-full mx-auto text-white">
        <p className="font-bold">Baby Boss</p>
        <div className="flex flex-col md:flex-row h-full items-center justify-center">
          <div className="flex flex-row mr-10">
            {content.nav.links.map((item, index) => (
              <p key={index} className="p-3 text-sm">
                {item.text}
              </p>
            ))}
          </div>
          <div className="flex flex-row">
            {content.nav.social.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white mr-2 w-8 h-8 flex items-center justify-center"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
