import React, { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import { useMintQuery } from "../queries";
import { Button, Modal } from "../lib/Primitives";
import AdminPanel from "./AdminPanel";

import { WalletButton } from "../lib";
import { images } from "../constants";
import video from "../assets/headerVideo.mp4";
import { RiPlayCircleFill } from "react-icons/ri";

const Header = () => {
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [controls, setControls] = useState(false);
  const headerVideo = document.getElementById("headerVideo");
  const [{ isContractOwner }, updateMintState] = useMintQuery();

  return (
    <div
      id="home"
      className="flex flex-col items-center h-fit w-10/12 mx-auto text-sm mb-10 max-w-[1500px]"
    >
      <div className="flex flex-col items-center w-3/4 mx-auto">
        <img src={images.header1} alt="Baby boss header" className=" mt-10" />
        {/* <img src={images.header2} alt="Baby boss header" className="" /> */}
        <div className="border-[1px] border-white w-full"></div>
        <h2 className="font-04b text-4xl 500:text-5xl md:text-7xl xl:text-8xl mt-6 mb-6">
          BabyBoss
        </h2>
        <div className="border-[1px] border-white w-full"></div>
      </div>

      <p className="text-center mb-4 w-5/6 text-xs md:text-sm mt-10">
        Baby Boss S3L Club, is a collection of 3990 + 9 collaboration 1/1 art
        super adorable pixelated <strong>baby NFT's</strong> that were born on
        the <strong>Ethereum blockchain.</strong>
      </p>
      <p className="text-center mb-4 w-5/6 text-xs md:text-sm">
        Own, play, earn and connect with the <strong>community</strong> from all
        over the world where we envision to create a place without a boundless
        communication regardless of our differences.
      </p>
      <p className="text-center mb-10 w-5/6 text-xs md:text-sm">
        We want to represent a healthy and <strong>positive vibes</strong>{" "}
        community and build a long lasting presence in the{" "}
        <strong>metaverse.</strong>
      </p>
      <div className="relative rounded-2xl bg-gradient-to-r p-[6px] from-pink-600 via-gray-400 to-teal-400  md:w-3/4 shadow-2xl shadow-white/10 mb-20">
        <div
          className={`${
            controls ? "hidden" : "block"
          } absolute z-10 rounded-2xl top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-r viol from-violet-900/80 to-violet-500/80`}
        >
          <button
            onClick={() => {
              setControls(true);
              headerVideo.play();
            }}
            className="z-20"
          >
            <RiPlayCircleFill className="h-20 w-20" />
          </button>
        </div>
        <video
          id="headerVideo"
          controls={controls}
          width="100%"
          height="100%"
          className="rounded-2xl"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2">
        <Link
          to="mint"
          smooth={true}
          className="bg-[#d41efc] rounded-full w-50 pt-3 pb-3 pr-6 pl-6 hover:ring-2 text-sm ring-white cursor-pointer"
        >
          Mint A Baby
        </Link>
        <WalletButton className="uppercase p-2 w-50 pt-3 pb-3 pr-6 pl-6 bg-[#1e50ff] rounded-full text-sm hover:ring-2 ring-white text-white">
          Connect Wallet
        </WalletButton>
        {isContractOwner && (
          <div className="m-8">
            <Button
              className="uppercase bg-[#8b514c] rounded-full hover:ring-2 ring-white font-[Helvetica_Neue] font-bold text-white"
              onClick={() => setAdminModalOpen(true)}
            >
              Admin Panel
            </Button>
            {adminModalOpen && (
              <>
                <Modal
                  open={adminModalOpen}
                  onClose={() => setAdminModalOpen(false)}
                >
                  <AdminPanel />
                </Modal>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
