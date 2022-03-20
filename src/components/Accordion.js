import React, { useState, useRef } from "react";

const Accordion = ({ title, text }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [height, setHeight] = useState("0px");

  const contentSpace = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
    setHeight(menuOpen ? "0px" : `${contentSpace.current.scrollHeight}px`);
  };
  return (
    <div className="flex flex-col w-full h-fit text-sm">
      <div className="rounded-2xl w-full bg-gradient-to-r p-[1px] from-pink-600 via-gray-400 to-teal-400">
        <div className="flex flex-row justify-between items-center bg-[#28299f] p-6 rounded-2xl">
          <h3>{title}</h3>
          <button
            className="flex items-center justify-center bg-[#d41efc] rounded-full w-5 h-5 ml-2"
            onClick={toggleMenu}
          >
            {menuOpen ? "-" : "+"}
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className=" text-white transition-max-height duration-700 ease-in-out overflow-hidden"
        >
          <div className="pt-5 pb-5 pl-5 pr-5 text-justify">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
