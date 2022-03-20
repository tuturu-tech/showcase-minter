import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useContracts, useParty } from "../hooks";
import { useMintQuery } from "../queries";
import { usePriorityIsActive, usePriorityProvider } from "../lib/connectors";

import { images } from "../constants";

const Mint = () => {
  const [amount, setAmount] = useState(1);

  return (
    <div
      id="mint"
      className="flex flex-col md:flex-row items-center h-fit md:h-screen w-10/12 mx-auto"
    >
      <img
        src={images.mint}
        alt="mint"
        className="lg:ml-10 flex-1 w-1/2 lg:w-full"
      />
      <div className="flex flex-col items-center md:items-start flex-1 mb-20 md:mb-">
        <h2 className="uppercase text-4xl mb-4">MINT A BABY</h2>
        <p className="mb-4">0/3999 Minted at each 0.01ETH</p>
        <p className="text-center md:text-left">
          Welcome to BabyBoss exclusive clud.
          <br />
          Join the revolution by purchasing one of your own!
        </p>
        <div className="flex flex-row items-center mt-10">
          <button
            className="bg-[#d41efc] rounded-full w-7 h-7 mr-2 hover:ring-2 ring-white"
            onClick={() => {
              setAmount((prevAmount) => {
                if (prevAmount > 1) {
                  return prevAmount - 1;
                } else {
                  return prevAmount;
                }
              });
            }}
          >
            -
          </button>
          <input
            type="text"
            value={amount}
            readOnly
            className="rounded-full max-w-[60px] bg-transparent mr-2 text-center"
          />
          <button
            className="bg-[#d41efc] rounded-full w-7 h-7 mr-2 hover:ring-2 ring-white"
            onClick={() => {
              setAmount((prevAmount) => {
                if (prevAmount < 10) {
                  return prevAmount + 1;
                } else {
                  return prevAmount;
                }
              });
            }}
          >
            +
          </button>
          <button className="bg-[#d41efc] rounded-full w-40 p-2 hover:ring-2 ring-white">
            Mint A Baby
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mint;
