import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useContracts, useParty } from "../hooks";
import { useMintQuery } from "../queries";
import { usePriorityIsActive, usePriorityProvider } from "../lib/connectors";
import { LoadingButton } from "../lib/Primitives";

import { images } from "../constants";

const Mint = () => {
  const [amount, setAmount] = useState(1);
  const [isMinting, setIsMinting] = useState(false);

  const provider = usePriorityProvider();
  const { erc721, handleTxError, handleTx } = useContracts();
  const [
    {
      owner,
      maxSupply,
      pricePS,
      priceWL,
      priceGenesis,
      saleState,
      totalSupply,
      isContractOwner,
      maxMint,
    },
    updateMintState,
  ] = useMintQuery();

  const startParty = useParty();

  const signer = provider?.getSigner();

  const amountLeft =
    (totalSupply && maxSupply - totalSupply?.toNumber()) || "loading...";
  const isSoldOut = amountLeft === 0;

  const onMintHandler = () => {
    setIsMinting(true);
    erc721
      .connect(signer)
      .mint(amount, { value: pricePS.mul(amount) })
      .then(handleTx)
      .then(startParty)
      .then(updateMintState)
      .catch(handleTxError)
      .finally(() => {
        setTimeout(() => setIsMinting(false), 300);
      });
  };

  const WLMint = () => {
    setIsMinting(true);
    erc721
      .connect(signer)
      .whitelistMint(amount, { value: priceWL.mul(amount) })
      .then(handleTx)
      .then(startParty)
      .then(updateMintState)
      .catch(handleTxError)
      .finally(() => {
        setTimeout(() => setIsMinting(false), 300);
      });
  };

  const genesisMint = () => {
    setIsMinting(true);
    erc721
      .connect(signer)
      .genesisMint(amount, { value: priceGenesis.mul(amount) })
      .then(handleTx)
      .then(startParty)
      .then(updateMintState)
      .catch(handleTxError)
      .finally(() => {
        setTimeout(() => setIsMinting(false), 300);
      });
  };

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
        <p className="mb-4">
          {totalSupply ? totalSupply?.toString() : "loading..."}/
          {maxSupply ? maxSupply.toString() : "loading..."} Minted at each{" "}
          {pricePS ? ethers.utils.formatEther(pricePS) + " ETH" : "loading..."}
        </p>
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
          <LoadingButton
            loading={isMinting}
            disabled={!signer || isMinting || isSoldOut}
            className="bg-[#d41efc] rounded-full w-40 p-2 hover:ring-2 ring-white"
            onClick={onMintHandler}
          >
            Mint A Baby
          </LoadingButton>
        </div>
      </div>
    </div>
  );
};

export default Mint;
