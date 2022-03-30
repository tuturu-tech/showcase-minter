import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center h-screen w-11/12 md:w-10/12 mx-auto">
      <div className="rounded-2xl bg-gradient-to-r p-[6px] from-pink-600 via-gray-400 to-teal-400 w-11/12 shadow-2xl shadow-white/10 mb-10">
        <div className="flex flex-col items-center gap-y-16 w-full h-full bg-[#28299f] rounded-2xl shadow-inner shadow-black/50">
          <h2 className="uppercase text-2xl md:text-4xl mt-16 text-center">
            BABY BOSS
          </h2>
          <div className="flex flex-row items-center justify-between divide-x-[1px] divide-solid divide-[#d41efc]">
            <div className="flex flex-col items-center justify-center uppercase p-2 pr-4">
              <h4 className="text-sm md:text-xl font-bold">3999 NFT</h4>
            </div>
            <div className="flex flex-col items-center justify-center uppercase p-2 pr-4">
              <h4 className="text-sm md:text-xl font-bold">113 UNIQUE TRAIT</h4>
            </div>
            <div className="flex flex-col items-center justify-center uppercase p-2">
              <h4 className="text-sm md:text-xl font-bold">10 1/1 ARTIST</h4>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-3/4 uppercase">
            <div className="flex flex-col items-center justify-center gap-y-3">
              <h4 className="text-xs md:text-[16px] font-bold text-center">
                total supply
              </h4>
              <h4 className="text-xs md:text-[16px] font-bold text-center">
                3,999
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <h4 className="text-xs md:text-[16px] font-bold text-center">
                mint price
              </h4>
              <h4 className="text-xs md:text-[16px] font-bold text-center">
                0.055 ETH to 0.077 ETH
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <h4 className="text-xs md:text-[16px] font-bold text-center">
                date of release
              </h4>
              <h4 className="text-xs md:text-[16px] font-bold text-center">
                9th - 12th of April
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-3 items-center justify-between w-11/12 lg:w-9/12 uppercase mb-20 ">
            <div className="flex flex-col items-center justify-center gap-y-2 bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 h-full">
              <h4 className="text-[10px] lg:text-xs font-bold text-center">
                token type
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                ERC721
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 h-full">
              <h4 className="text-[10px] lg:text-xs font-bold text-center">
                royalty fee
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                7.5 %
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 h-full">
              <h4 className="font-bold text-center text-[10px] lg:text-xs">
                Reveal after
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                48 hours
              </h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 bg-[#d41efc] rounded-full pr-10 pl-10 pt-1 pb-1 h-full">
              <h4 className="text-[10px] lg:text-xs font-bold text-center">
                file hosting
              </h4>
              <h4 className="text-sm lg:text-[16px] font-bold text-center">
                ipfs
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
