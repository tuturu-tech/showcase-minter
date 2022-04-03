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
      className="flex flex-col md:flex-row items-center h-fit md:h-screen w-10/12 mx-auto max-w-[1500px] max-h-[1000px]"
    >
      <img
        src={images.mint}
        alt="mint"
        className="lg:ml-10 flex-1 w-1/2 lg:w-full"
      />
      {signer && saleState === 0 && (
        <div className="flex flex-col items-center flex-1 mb-20 md:mb-0">
          <h2 className="uppercase text-4xl mb-4 text-center">MINT A BABY</h2>

          <p className="text-center mb-4">
            Welcome to BabyBoss exclusive club.
            <br />
            Join the revolution by purchasing one of your own!
          </p>
          <p className="text-center">
            Unfortunately our mint is not live yet,
            <br /> please check the mint dates in the FAQ.
          </p>
        </div>
      )}
      {signer && pricePS && (
        <div className="flex flex-col items-center md:items-start flex-1 mb-20 md:mb-0">
          <h2 className="uppercase text-4xl mb-4 text-center">MINT A BABY</h2>

          <p className="mb-4 text-center md:text-left">
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
                    if (prevAmount < 20) {
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
                <p className={`${saleState !== 3 ? "hidden" : "block"}`}>
                  Mint limit: {maxMint ? Number(maxMint) : "0"}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      {signer && !pricePS && (
        <div className="flex flex-col flex-1 items-center justify-center mb-20 md:mb-0">
          <h2 className="uppercase text-4xl mb-4 text-center">MINT A BABY</h2>
          <p className="text-center md:text-left">
            Welcome to BabyBoss exclusive club.
            <br />
            Join the revolution by purchasing one of your own!
          </p>
          <svg
            role="status"
            className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
      {!signer && (
        <div className="flex flex-col flex-1 items-center justify-center mb-20 md:mb-0">
          <h2 className="uppercase text-4xl mb-4 text-center">MINT A BABY</h2>
          <p className="text-center md:text-left mb-4">
            Welcome to BabyBoss exclusive club.
            <br />
            Join the revolution by purchasing one of your own!
          </p>
          <WalletButton className="uppercase p-2 w-50 pt-3 pb-3 pr-6 pl-6 bg-[#1e50ff] rounded-full text-sm hover:ring-2 ring-white text-white">
            Connect Wallet
          </WalletButton>
        </div>
      )}
    </div>
  );
};

export default Mint;
