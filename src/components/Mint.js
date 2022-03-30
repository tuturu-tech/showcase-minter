import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useContracts, useParty } from "../hooks";
import { useMintQuery } from "../queries";
import { WalletButton } from "../lib";
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
      wlSig,
      wlLimit,
      isWhitelisted,
      gSig,
      gLimit,
      isGenesis,
    },
    updateMintState,
  ] = useMintQuery();

  const startParty = useParty();

  const signer = provider?.getSigner();

  const amountLeft =
    (totalSupply && maxSupply - totalSupply?.toNumber()) || "loading...";
  const isSoldOut = amountLeft === 0;

  let filter = erc721.filters.Transfer(
    "0x0000000000000000000000000000000000000000"
  );

  useEffect(() => {
    if (provider !== undefined && pricePS) {
      erc721.on(filter, async () => {
        await updateMintState();
      });
    }
  }, [signer]);

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
      .whitelistMint(wlSig, amount, wlLimit, { value: priceWL.mul(amount) })
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
      .genesisMint(gSig, amount, gLimit, { value: priceGenesis.mul(amount) })
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
      {signer && (
        <div className="flex flex-col items-center md:items-start flex-1 mb-20 md:mb-0">
          <h2 className="uppercase text-4xl mb-4 text-center">MINT A BABY</h2>

          <p className="mb-4 text-center">
            {totalSupply ? totalSupply?.toString() : "loading..."}/
            {maxSupply ? maxSupply.toString() : "loading..."} Minted at each{" "}
            {pricePS
              ? ethers.utils.formatEther(pricePS) + " ETH"
              : "loading..."}
          </p>
          <p className="text-center md:text-left">
            Welcome to BabyBoss exclusive club.
            <br />
            Join the revolution by purchasing one of your own!
          </p>
          <div className="flex flex-col md:flex-row items-center mt-10">
            <div className="flex flex-row items-center mb-4 md:mb-0">
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
            </div>

            {isWhitelisted && saleState === 2 ? (
              <div className="flex flex-col md:flex-row items-center justify-center gap-y-2 md:gap-x-2">
                <LoadingButton
                  loading={isMinting}
                  disabled={!signer || isMinting || isSoldOut}
                  className="bg-[#d41efc] rounded-full w-52 p-2 hover:ring-2 ring-white"
                  onClick={WLMint}
                >
                  Whitelist mint
                </LoadingButton>
                <p>Mint limit: {wlLimit ? wlLimit : "0"}</p>
              </div>
            ) : isGenesis && saleState === 1 ? (
              <div className="flex flex-col md:flex-row items-center gap-y-2 md:gap-x-2">
                <LoadingButton
                  loading={isMinting}
                  disabled={!signer || isMinting || isSoldOut}
                  className="bg-[#d41efc] rounded-full w-52 p-2 hover:ring-2 ring-white"
                  onClick={genesisMint}
                >
                  Genesis mint
                </LoadingButton>
                <p>Mint limit: {gLimit ? gLimit : "0"}</p>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center gap-y-2 md:gap-x-2">
                <LoadingButton
                  loading={isMinting}
                  disabled={
                    !signer || isMinting || isSoldOut || saleState !== 3
                  }
                  className="bg-[#d41efc] rounded-full w-40 p-2 hover:ring-2 ring-white"
                  onClick={onMintHandler}
                >
                  {saleState === 3 ? "Mint A Baby" : "Mint not live"}
                </LoadingButton>
                <p>Mint limit: {maxMint ? Number(maxMint) : "0"}</p>
              </div>
            )}
          </div>
        </div>
      )}
      {!signer && (
        <div className="flex flex-col flex-1 items-center justify-center mb-20 md:mb-0">
          <WalletButton className="uppercase p-2 w-50 pt-3 pb-3 pr-6 pl-6 bg-[#1e50ff] rounded-full text-sm hover:ring-2 ring-white text-white">
            Connect Wallet
          </WalletButton>
        </div>
      )}
    </div>
  );
};

export default Mint;
