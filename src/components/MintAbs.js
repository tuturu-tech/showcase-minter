import React, { useEffect, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { ethers } from "ethers";
import { useContracts, useParty } from "../hooks";
import { useMintQuery } from "../queries";
import { config } from "../config";
import { usePriorityIsActive, usePriorityProvider } from "../lib/connectors";
import content from "../content";
import { images } from "../constants";

import { LoadingButton } from "../lib/Primitives";

import { WalletButton } from "../lib";

const renderer = ({ minutes, seconds }) => {
  return (
    <span className="text-5xl font-bold text-[#8b514c]">
      {minutes}:{zeroPad(seconds)}
    </span>
  );
};

const MintAbs = () => {
  const provider = usePriorityProvider();
  const { erc721, handleTxError, handleTx } = useContracts();
  const [
    {
      maxSupply,
      price,
      startingPrice,
      minimumPrice,
      decrementInterval,
      decrementAmount,
      auctionActive,
      auctionStart,
      totalSupply,
      timeLeft,
    },
    updateMintState,
  ] = useMintQuery();

  const [loaded, setLoaded] = useState(false);
  const [countDown, setCountDown] = useState();
  const [amount, setAmount] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const percentage = (totalSupply?.toString() / maxSupply?.toString()) * 100;

  const startParty = useParty();

  const signer = provider?.getSigner();

  const amountLeft =
    (totalSupply && maxSupply - totalSupply?.toNumber()) || "loading...";
  const isSoldOut = amountLeft === 0;

  useEffect(() => {
    if (timeLeft && !loaded) {
      setCountDown(Date.now() + timeLeft.toString() * 1000);
      setLoaded(true);
    }
  }, [timeLeft]);

  const onMintHandler = () => {
    setIsMinting(true);
    erc721
      .connect(signer)
      .mint(amount, { value: price.mul(amount) })
      .then(handleTx)
      .then(startParty)
      .then(updateMintState)
      .catch(handleTxError)
      .finally(() => {
        setTimeout(() => setIsMinting(false), 300);
      });
  };

  return (
    <div className="bg-black">
      <div className="h-fit w-full flex flex-col items-center bg-paper bg-cover">
        <div className="flex flex-col-reverse md:flex-row items-center w-12/12 lg:w-10/12 xl:w-8/12 mt-48 mb-20 pl-10 pr-10 ">
          <div className="flex flex-col flex-1 justify-self-start mr-10">
            <img
              src={images.DutchAuction}
              alt="Dutch auction header"
              className="w-full md:w-5/6"
            />
            <div className="mt-8 text-sm sm:text-[16px]">
              <div className="flex flex-row mb-12">
                <div className="flex flex-col mr-10 xl:mr-20">
                  {content.minting.titles.map((item, index) => (
                    <p className="text-black h-full">{item}</p>
                  ))}
                </div>
                <div className="flex flex-col ml-5">
                  <p className="h-full">6pm EST on 3/28/2022</p>
                  <p className="h-full">
                    5.0<span className="font-sans">Ξ</span>
                  </p>
                  <p className="h-full">
                    0.2<span className="font-sans">Ξ</span> until sold out or
                    rests at 0.4<span className="font-sans">Ξ</span>
                  </p>
                  <p className="h-full">Every 5 minutes</p>
                  <p className="h-full">10 per transaction, 20 per wallet</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-20 md:mb-0 md:flex-1 items-center justify-self-end">
            <WalletButton className="uppercase p-3 m-2 mb-4 w-2/4 bg-[#8b514c] rounded-full hover:ring-2 ring-white font-[Helvetica_Neue] font-bold text-white">
              Connect Wallet
            </WalletButton>
            {signer && (
              <div className="flex flex-col items-center w-11/12 justify-center bg-gray-200 rounded-[50px] pl-8 pr-8 pt-3 pb-3">
                <img src={images.clock} alt="clock" className="h-14 w-14" />
                {price?.toString() !== minimumPrice?.toString() && (
                  <Countdown
                    date={countDown}
                    zeroPadTime={2}
                    key={countDown}
                    renderer={renderer}
                    onComplete={() => {
                      updateMintState();
                      setCountDown(
                        Date.now() + decrementInterval?.toString() * 1000
                      );
                    }}
                  />
                )}
                <p className="uppercase text-xs mb-3">
                  {price?.toString() === minimumPrice?.toString()
                    ? "Minimum price reached"
                    : "next price drop"}
                </p>
                <div className="flex-grow border-t w-full border-gray-400 mb-3"></div>
                <div className="flex flex-row w-full justify-between mb-4">
                  <p className="uppercase">Current price</p>
                  <p>
                    {price
                      ? ethers.utils.formatEther(price?.toString())
                      : "loading..."}
                    <span className="font-sans">Ξ</span>
                  </p>
                </div>
                <div className="flex flex-row w-full justify-between mb-4">
                  <div>
                    <p className="uppercase">Enter quantity</p>
                    <p className="uppercase text-xs text-gray-600">(MAX 10)</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <button
                      onClick={() => {
                        setAmount((prevAmount) => {
                          if (prevAmount > 1) {
                            return prevAmount - 1;
                          } else {
                            return prevAmount;
                          }
                        });
                      }}
                      className="h-6 w-6 rounded-sm mr-2 bg-slate-400 hover:ring-1"
                    >
                      -
                    </button>
                    <button
                      onClick={() => {
                        setAmount((prevAmount) => {
                          if (prevAmount < 10) {
                            return prevAmount + 1;
                          } else {
                            return prevAmount;
                          }
                        });
                      }}
                      className="h-6 w-6 rounded-sm mr-2 bg-slate-400 hover:ring-1"
                    >
                      +
                    </button>
                    <input
                      type="text"
                      value={amount}
                      readOnly
                      className="w-10 h-fit border-0 text-xs"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between mb-4">
                  <p className="uppercase font-bold">total</p>
                  <p>
                    {price
                      ? (
                          ethers.utils.formatEther(price?.toString()) * amount
                        ).toFixed(3)
                      : "loading..."}
                    <span className="font-sans">Ξ</span>
                  </p>
                </div>
                <LoadingButton
                  onClick={onMintHandler}
                  loading={isMinting}
                  disabled={!signer || isMinting || isSoldOut}
                  className="uppercase p-3 w-2/4 mb-2 bg-[#6a6a6a] hover:ring-2 ring-white font-[Helvetica_Neue] font-bold text-white"
                >
                  {isSoldOut ? "SOLD OUT!" : "MINT NOW"}
                </LoadingButton>
                {/* <button className="uppercase p-3 w-2/4 mb-2 bg-[#8b514c] rounded-full hover:ring-2 ring-white font-[Helvetica_Neue] font-bold text-white">
                MINT NOW
              </button> */}
                <div className="flex flex-col w-full">
                  <div className="w-full bg-gray-400 rounded-lg dark:bg-gray-700 my-2 ">
                    <div
                      className="bg-gray-600 h-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
                <p className="uppercase text-sm">
                  {totalSupply?.toString()}/{maxSupply?.toString()} MINTED
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintAbs;
