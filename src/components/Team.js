import React from "react";

import content from "../content";
import Card from "./Card";

const Team = () => {
  return (
    <div id="team" className="h-fit flex flex-col items-center w-10/12 mx-auto">
      <h2 className="text-4xl m-10 uppercase text-center">OUR TEAM</h2>
      <p className="text-center mb-10 text-sm w-4/6">
        {content.faq.description}
      </p>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-3 gap-x-5">
        {content.team.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            alt={item.name}
            name={item.name}
            title={item.title}
            description={item.description}
            socials={item.socials}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
