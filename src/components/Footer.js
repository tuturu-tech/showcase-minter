import React from "react";
import Link from "react-scroll/modules/components/Link";
import content from "../content";
import { images } from "../constants";

const Footer = () => {
  return (
    <div className="relative z-10 flex flex-col bg-[#25279e] h-fit pt-2 pb-5 overflow-hidden sm:overflow-visible max-w-[1500px] mx-auto">
      <div className="flex flex-col 900:flex-row justify-between items-center w-10/12 h-full mx-auto text-white mb-5">
        {/* <p className="font-bold font-04b">Baby Boss</p> */}
        <img
          src={images.babyboss}
          alt="baby boss logo"
          className="h-24 w-fit"
        />
        <div className="flex flex-col 900:flex-row h-full items-center justify-center">
          <div className="flex flex-row mb-4 900:mb-0  mr-0 900:mr-10">
            {content.nav.links.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                className="p-2 sm:p-3 text-[12px] sm:text-sm cursor-pointer hover:scale-110"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-row">
            {content.nav.social.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white mr-2 w-8 h-8 flex items-center justify-center hover:ring-1 ring-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <h2 className="uppercase text-sm font-bold ml-2">DISCLAIMER</h2>
      <p className="text-[10px] text-left mx-2">
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
