import React from "react";
import content from "../content";

const Footer = () => {
  return (
    <div className="relative z-10 flex flex-col bg-[#25279e] h-fit pt-2 pb-10 overflow-hidden sm:overflow-visible">
      <div className="flex flex-col md:flex-row justify-between items-center w-10/12 h-full mx-auto text-white mb-5">
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
      <p className="text-[10px] text-center mx-2">
        Nothing here is investment advice. NFTs do not necessarily have any
        intrinsic value. They also might be illiquid. If you buy an NFT, you are
        not necessarily going to be able to sell it for much later, or gain any
        specific utility from it. You are welcome to buy NFTs if it would make
        you happy to own them! But there is no implied economic return
        associated with doing so. There are no refunds for NFTs, and we will not
        field customer complaints. Please only buy NFTs if you understand that
        doing so does not necessarily give any direct economic value. We do not
        recommend purchasing any NFTs for speculative investment purposes. NFTs
        may lose value or have no value and may have no market. Note that if
        applicable law does not allow all or any part of the above limitation of
        liability to apply to you, the limitations will apply to you only to the
        maximum extent permitted by applicable law.
      </p>
    </div>
  );
};

export default Footer;
