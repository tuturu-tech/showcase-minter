import React from "react";
import { images } from "../constants";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center h-fit w-11/12 800:w-10/12 mx-auto max-w-[1500px]">
      <div className="rounded-2xl bg-gradient-to-r p-[6px] from-pink-600 via-gray-400 to-teal-400 w-11/12 shadow-2xl shadow-white/10 mb-10 min-h-full">
        <div className="flex flex-col items-centerw-full h-full bg-[#28299f] rounded-2xl shadow-inner shadow-black/50 min-h-fit">
          <h2 className="uppercase text-3xl md:text-5xl mt-16 mb-16 text-center font-04b mx-2">
            BABY BOSS
          </h2>
          {/* <img src={images.babybossf} alt="babyboss logo" /> */}
          <div className="flex flex-row items-center justify-center divide-x-[1px] divide-solid divide-[#d41efc] mb-16">
            <div className="flex flex-col items-center justify-center uppercase p-2 pr-4">
              <h4 className="text-sm md:text-xl font-bold text-center">
                3999 NFT
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center uppercase p-2 pr-4">
              <h4 className="text-sm md:text-xl font-bold text-center">
                113 UNIQUE TRAITS
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center uppercase p-2">
              <h4 className="text-sm md:text-xl font-bold text-center">
                9 1/1 ARTISTS
              </h4>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center uppercase">
            <div className="flex flex-col items-center justify-center mb-4 mr-2 sm:mr-4 self-start">
              <h4 className="text-xs md:text-[16px] font-bold text-center mt-2 mb-4">
                total supply
              </h4>
              <h4 className="text-xs md:text-[16px] font-bold text-center">
                3,999
              </h4>
            </div>
            <div className="w-[1px] h-20 bg-[#d41efc] self-start"></div>
            <div className="flex flex-col items-center justify-center mb-4 mr-2 ml-2 sm:mr-4 sm:ml-4 self-start">
              <h4 className="text-xs md:text-[16px] font-bold text-center mt-2 mb-4">
                mint price
              </h4>
              <div className="flex flex-col items-center">
                <h4 className="text-xs md:text-[16px] font-bold text-center mb-2">
                  S3L holder
                </h4>
                <h4 className="text-xs md:text-[16px] font-bold text-center mb-4">
                  0.055ETH
                </h4>
                <h4 className="text-xs md:text-[16px] font-bold text-center mb-2">
                  Presale
                </h4>
                <h4 className="text-xs md:text-[16px] font-bold text-center mb-4">
                  0.066ETH
                </h4>
                <h4 className="text-xs md:text-[16px] font-bold text-center mb-2">
                  Public sale
                </h4>
                <h4 className="text-xs md:text-[16px] font-bold text-center mb-2">
                  0.088ETH
                </h4>
              </div>
            </div>
            <div className="w-[1px] h-20 bg-[#d41efc] self-start"></div>
            <div className="flex flex-col items-center justify-center mb-4 ml-2 sm:ml-4 self-start">
              <h4 className="text-xs md:text-[16px] font-bold text-center mt-2 mb-4">
                date of release
              </h4>
              <h4 className="text-xs md:text-[16px] font-bold text-center">
                9th - 12th of April
              </h4>
            </div>
          </div>
          <div className="hidden md:flex flex-row items-center justify-center w-fit lg:w-10/12 uppercase mt-10 mb-10 md:mb-20 mx-auto h-fit">
            <div className="flex flex-1 flex-col items-center justify-center bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 min-h-[88px] md:mx-2">
              <h4 className="text-[10px] lg:text-xs font-bold text-center mb-2">
                token type
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                ERC721
              </h4>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 min-h-[88px] md:mx-2">
              <h4 className="text-[10px] lg:text-xs font-bold text-center mb-2">
                royalty fee
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                7.5 %
              </h4>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 min-h-[88px] md:mx-2">
              <h4 className="font-bold text-center text-[10px] lg:text-xs mb-2">
                Reveal after
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                48 hours
              </h4>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 min-h-[88px] md:mx-2">
              <h4 className="text-[10px] lg:text-xs font-bold text-center mb-2">
                file hosting
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                ipfs
              </h4>
            </div>
          </div>
          <div className="flex md:hidden flex-col items-center justify-center w-fit nax-w-[92%] lg:max-w-[75%] lg:w-9/12 uppercase mt-10 mb-10 md:mb-20 mx-auto h-fit">
            <div className="flex flex-row flex-1 items-center my-2">
              <div className="flex flex-1 flex-col items-center justify-center bg-[#d41efc] rounded-full px-4 sm:px-10 py-1 min-h-[64px] mx-2">
                <h4 className="text-[10px] lg:text-xs font-bold text-center mb-2">
                  token type
                </h4>
                <h4 className="text-[12px] lg:text-[16px] font-bold text-center">
                  ERC721
                </h4>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center bg-[#d41efc] rounded-full px-4 sm:px-10 py-1 min-h-[64px] mx-2">
                <h4 className="text-[10px] lg:text-xs font-bold text-center mb-2">
                  royalty fee
                </h4>
                <h4 className="text-[12px] lg:text-[16px] font-bold text-center">
                  7.5 %
                </h4>
              </div>
            </div>
            <div className="flex flex-row flex-1 items-center my-2">
              <div className="flex flex-1 flex-col items-center justify-center bg-[#d41efc] rounded-full px-4 sm:px-10 py-1 min-h-[64px] mx-2">
                <h4 className="font-bold text-center text-[10px] lg:text-xs mb-2">
                  Reveal after
                </h4>
                <h4 className="text-[12px] lg:text-[16px] font-bold text-center">
                  48 hours
                </h4>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center bg-[#d41efc] rounded-full px-4 sm:px-10 py-1 min-h-[64px] mx-2">
                <h4 className="text-[10px] lg:text-xs font-bold text-center mb-2">
                  file hosting
                </h4>
                <h4 className="text-[12px] lg:text-[16px] font-bold text-center">
                  ipfs
                </h4>
              </div>
            </div>
          </div>
          {/*  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-3 items-center justify-between w-11/12 lg:w-9/12 uppercase mb-10 md:mb-20 min-w-0 min-h-0 mx-auto">
            <div className="flex flex-col items-center justify-center bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 h-full">
              <h4 className="text-[10px] lg:text-xs font-bold text-center mb-2">
                token type
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                ERC721
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 h-full">
              <h4 className="text-[10px] lg:text-xs font-bold text-center mb-2">
                royalty fee
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                7.5 %
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 h-full">
              <h4 className="font-bold text-center text-[10px] lg:text-xs mb-2">
                Reveal after
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                48 hours
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 h-full">
              <h4 className="text-[10px] lg:text-xs font-bold text-center mb-2">
                file hosting
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                ipfs
              </h4>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
