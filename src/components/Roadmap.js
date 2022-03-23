import React from "react";
import { images } from "../constants";

const Roadmap = () => {
  return (
    <div id="roadmap">
      <div className="flex flex-col items-center h-fit w-10/12 mx-auto text-sm mb-10 mt-10 sm:mt-0">
        <h2 className="text-5xl m-10 uppercase font-retro text-center">
          ROAD MAP
        </h2>
        <p className="text-center mb-4 w-5/6">
          Baby Boss S3L Club, is a collection of 3999 super adorable pixelated{" "}
          <strong>baby NFT's</strong> who are a born on the{" "}
          <strong>Ethereum blockchain.</strong>
        </p>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 mt-44 lg:mt-32 bg-[#d41efc] pointer-events-none"></div>
              </div>
              <div className="w-14 h-14 absolute top-1/2 mt-[-26px] -ml-4">
                <img
                  src={images.rb}
                  alt="roadmap bullet"
                  className="w-14 h-14"
                />
              </div>
              <div className="h-1 w-[300px] z-0 absolute top-1/2 bg-[#d41efc] pointer-events-none"></div>
            </div>

            <div className="wow fadeInRight z-20 col-start-7 col-end-10 lg:col-start-6 lg:col-end-9 my-4 mr-auto shadow-md rounded-2xl bg-gradient-to-r p-[2px] from-[#d41efc] via-gray-400 to-teal-400">
              <div className="order-1 bg-[#28299f] rounded-2xl shadow-xl px-6 py-4 h-full">
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  <span className="font-bold text-[#d41efc]">**Q1 2022** </span>
                  3999 Baby Boss will be born on eth blockchain & begin the
                  journey with their parents
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="wow fadeInLeft z-20 col-start-1 col-end-4 lg:col-start-2 lg:col-end-5 p-[2px] my-4 ml-auto shadow-md rounded-2xl bg-gradient-to-r from-[#d41efc] via-gray-400 to-teal-400">
              <div className="bg-[#28299f] rounded-2xl shadow-xl px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  <span className="font-bold text-[#d41efc]">
                    **25% SOLD**{" "}
                  </span>
                  Community wallet will be create for upcoming holder airdrop
                  and giveaway
                </p>
              </div>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 z-10 bg-[#d41efc] pointer-events-none"></div>
              </div>
              <div className="w-14 h-14 absolute top-1/2 mt-[-26px] -ml-4 z-20">
                <img
                  src={images.rb}
                  alt="roadmap bullet"
                  className="w-14 h-14 z-20"
                />
              </div>
              <div className=" h-1 w-[200px] lg:w-[300px] translate-x-1 md:translate-x-[-100%] z-0 absolute top-1/2 bg-teal-400 pointer-events-none"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-[#d41efc] pointer-events-none"></div>
              </div>
              <div className="w-14 h-14 absolute top-1/2 mt-[-26px] -ml-4 z-20">
                <img
                  src={images.rb}
                  alt="roadmap bullet"
                  className="w-14 h-14 z-20"
                />
              </div>
              <div className="h-1 w-[300px] z-0 absolute top-1/2 bg-[#d41efc] pointer-events-none"></div>
            </div>

            <div className="wow fadeInRight z-20 col-start-7 col-end-10 lg:col-start-6 lg:col-end-9 my-4 mr-auto shadow-md rounded-2xl bg-gradient-to-r p-[2px] from-[#d41efc] via-gray-400 to-teal-400">
              <div className="order-1 bg-[#28299f] rounded-2xl shadow-xl px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  <span className="font-bold text-[#d41efc]">
                    **50% SOLD**{" "}
                  </span>
                  Airdrop Baby Boss to holder S3L NFT (id 1-100) and OG S3L Club
                  role
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="wow fadeInLeft z-20 col-start-1 col-end-4 lg:col-start-2 lg:col-end-5 p-[2px] my-4 w-full ml-auto shadow-md rounded-2xl bg-gradient-to-r from-[#d41efc] via-gray-400 to-teal-400">
              <div className="bg-[#28299f] rounded-2xl shadow-xl px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  <span className="font-bold text-[#d41efc]">
                    **40% SOLD**{" "}
                  </span>
                  Collaboration with other NFT project
                </p>
              </div>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 z-10 bg-[#d41efc] pointer-events-none"></div>
              </div>
              <div className="w-14 h-14 absolute top-1/2 mt-[-26px] -ml-4 z-20">
                <img
                  src={images.rb}
                  alt="roadmap bullet"
                  className="w-14 h-14 z-20"
                />
              </div>
              <div className="h-1 w-[200px] lg:w-[300px] translate-x-1 md:translate-x-[-100%] z-0 absolute top-1/2 bg-teal-400 pointer-events-none"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-[#d41efc] pointer-events-none"></div>
              </div>
              <div className="w-14 h-14 absolute top-1/2 mt-[-26px] -ml-4 z-20">
                <img
                  src={images.rb}
                  alt="roadmap bullet"
                  className="w-14 h-14 z-20"
                />
              </div>
              <div className="h-1 w-[300px] z-0 absolute top-1/2 bg-[#d41efc] pointer-events-none"></div>
            </div>

            <div className="wow fadeInRight z-20 col-start-7 col-end-10 lg:col-start-6 lg:col-end-9 my-4 mr-auto shadow-md rounded-2xl bg-gradient-to-r p-[2px] from-[#d41efc] via-gray-400 to-teal-400">
              <div className="order-1 bg-[#28299f] rounded-2xl shadow-xl px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  <span className="font-bold text-[#d41efc]">
                    **60% SOLD**{" "}
                  </span>
                  Baby Boss merch unlock and 2% sales goes to charity
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="wow fadeInLeft z-20 col-start-1 col-end-4 lg:col-start-2 lg:col-end-5 p-[2px] my-4 ml-auto shadow-md rounded-2xl bg-gradient-to-r from-[#d41efc] via-gray-400 to-teal-400">
              <div className="bg-[#28299f] rounded-2xl shadow-xl px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  <span className="font-bold text-[#d41efc]">
                    **70% SOLD**{" "}
                  </span>
                  1 x NFT (value 1 ETH) and 10 x WABC will be randomly airdrop
                  to Baby Boss holders
                  <br />
                  Giveaways 3 ETH split to 30 x Baby Boss holders
                </p>
              </div>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full z-10 w-1 bg-[#d41efc] pointer-events-none"></div>
              </div>
              <div className="w-14 h-14 absolute top-1/2 mt-[-26px] -ml-4 z-20">
                <img
                  src={images.rb}
                  alt="roadmap bullet"
                  className="w-14 h-14 z-20"
                />
              </div>
              <div className="h-1 w-[200px] lg:w-[300px] translate-x-1 md:translate-x-[-100%] z-0 absolute top-1/2 bg-teal-400 pointer-events-none"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-[#d41efc] pointer-events-none"></div>
              </div>
              <div className="w-14 h-14 absolute top-1/2 mt-[-26px] -ml-4 z-20">
                <img
                  src={images.rb}
                  alt="roadmap bullet"
                  className="w-14 h-14 z-20"
                />
              </div>
              <div className="h-1 w-[300px] z-0 absolute top-1/2 bg-[#d41efc] pointer-events-none"></div>
            </div>

            <div className="wow fadeInRight z-20 col-start-7 col-end-10 lg:col-start-6 lg:col-end-9 my-4 mr-auto shadow-md rounded-2xl bg-gradient-to-r p-[2px] from-[#d41efc] via-gray-400 to-teal-400">
              <div className="order-1 bg-[#28299f] rounded-2xl shadow-xl px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  <span className="font-bold text-[#d41efc]">
                    **80% SOLD**{" "}
                  </span>
                  Will settle the rarity rank with rarity sniper and rarity
                  tools
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="wow fadeInLeft z-20 col-start-1 col-end-4 lg:col-start-2 lg:col-end-5 p-[2px] my-4 ml-auto shadow-md rounded-2xl bg-gradient-to-r from-[#d41efc] via-gray-400 to-teal-400">
              <div className="bg-[#28299f] rounded-2xl shadow-xl px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  <span className="font-bold text-[#d41efc]">
                    **90% SOLD**{" "}
                  </span>
                  The purchasing of estate in the sandbox game for our upcoming
                  p2e game
                </p>
              </div>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 z-10 bg-[#d41efc] pointer-events-none"></div>
              </div>
              <div className="w-14 h-14 absolute top-1/2 mt-[-26px] -ml-4 z-20">
                <img
                  src={images.rb}
                  alt="roadmap bullet"
                  className="w-14 h-14 z-20"
                />
              </div>
              <div className="h-1 w-[200px] lg:w-[300px] translate-x-1 md:translate-x-[-100%] z-0 absolute top-1/2 bg-teal-400 pointer-events-none"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full mb-36 lg:mb-32 w-1 bg-[#d41efc] pointer-events-none"></div>
              </div>
              <div className="w-14 h-14 absolute top-1/2 mt-[-26px] -ml-4 z-20">
                <img
                  src={images.rb}
                  alt="roadmap bullet"
                  className="w-14 h-14 z-20"
                />
              </div>
              <div className="h-1 w-[300px] z-0 absolute top-1/2 bg-[#d41efc] pointer-events-none"></div>
            </div>

            <div className="wow fadeInRight z-20 col-start-7 col-end-10 lg:col-start-6 lg:col-end-9 w-full my-4 mr-auto shadow-md rounded-2xl bg-gradient-to-r p-[2px] from-[#d41efc] via-gray-400 to-teal-400">
              <div className="order-1 bg-[#28299f] h-full rounded-2xl shadow-xl px-6 py-4">
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  <span className="font-bold text-[#d41efc]">
                    **100% SOLD**{" "}
                  </span>
                  Will reveal after 24 hours
                  <br />
                  Roadmap v2.0 will be start to layout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
