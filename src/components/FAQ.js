import React from "react";
import Accordion from "./Accordion";

import content from "../content";

const FAQ = () => {
  return (
    <div
      id="faq"
      className="flex flex-col h-fit w-10/12 items-center mx-auto mb-10 mt-20"
    >
      <h2 className="text-4xl m-10">{content.faq.title}</h2>
      <p className="text-center mb-10 text-sm w-4/6">
        {content.faq.description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
        {content.faq.bullets.map((item, index) => (
          <Accordion key={index} title={item.title} text={item.description} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
