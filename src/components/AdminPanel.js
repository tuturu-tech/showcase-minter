import { useState } from "react";

import { Input, Button, Card } from "../lib/Primitives";

import { formatEther } from "ethers/lib/utils";
import { useMintQuery, useMintAdminState } from "../queries";
import { signWhitelist, usePriorityProvider } from "../lib";
import { useContracts } from "../hooks";
import { ethers } from "ethers";

export default function AdminPanel() {
  const signer = usePriorityProvider()?.getSigner();
  const { erc721, handleTx, handleTxError } = useContracts();

  const [baseURIInput, setBaseURIInput] = useState();
  const [unrevealedURIInput, setUnrevealedURIInput] = useState();
  const [collabURIInput, setCollabURIInput] = useState();
  const [withdrawalAddressInput, setWithdrawalAddressInput] = useState();
  const [maxMintInput, setMaxMintInput] = useState();
  const [revealTimeInput, setRevealTimeInput] = useState();
  const [pricePSInput, setPricePSInput] = useState();
  const [priceWLInput, setPriceWLInput] = useState();
  const [priceGenesisInput, setPriceGenesisInput] = useState();
  const [airdropAddress, setAirdropAddress] = useState();
  const [airdropAmount, setAirdropAmount] = useState();
  const [ownerInput, setOwnerInput] = useState();
  const [airdropAddresses, setAirdropAddresses] = useState();
  const [batchAmount, setBatchAmount] = useState();

  const [
    {
      name,
      symbol,
      baseURI,
      unrevealedURI,
      collabURI,
      balance,
      revealTime,
      reserveMinted,
      withdrawalAddress,
      reserved,
    },
    updateAdminInfo,
  ] = useMintAdminState();

  const [
    { owner, pricePS, priceWL, priceGenesis, saleState, maxMint, totalSupply },
    updateMintState,
  ] = useMintQuery();

  const callContractFunction = (someFunction, someValue, update) => {
    return someFunction(...someValue)
      .then(handleTx)
      .then(update)
      .catch(handleTxError);
  };

  const callContractNoArg = (someFunction, update) => {
    someFunction().then(handleTx).then(update).catch(handleTxError);
  };

  return (
    <Card className="min-w-[320px] max-w-[500px] pb-5 h-screen overflow-scroll scrollbar scrollbar-thumb-[#d41efc] scrollbar-thin">
      <p className="text-gray-200 text-center">Admin Panel</p>
      <div className="flex">
        <Input label="Reveal time" value={revealTime} />
        <Input label="Reserve Minted" value={reserveMinted} />
        <Input label="Total reserved" value={reserved} />
        <Input label="Max mint" value={maxMint} />
      </div>
      <div className="flex">
        <Input label="Total minted" value={totalSupply} />
        <Input
          label="Price public"
          value={ethers.utils.formatEther(pricePS) + " ETH"}
        />
        <Input
          label="Price genesis"
          value={ethers.utils.formatEther(priceGenesis) + " ETH"}
        />
        <Input
          label="Price WL"
          value={ethers.utils.formatEther(priceWL) + " ETH"}
        />
      </div>
      <Input label="Address" value={erc721?.address} />
      <Input label="Owner" value={owner} />

      <Input label="Withdrawal address" value={withdrawalAddress} />
      <div className="flex">
        <Input className="w-full mr-2" label="Name" value={name} />
        <Input className="w-full ml-2" label="Symbol" value={symbol} />
      </div>
      <Input
        label="Sale state"
        readOnly={true}
        value={
          saleState?.toString() === "0"
            ? "paused"
            : saleState?.toString() === "1"
            ? "genesis"
            : saleState?.toString() === "2"
            ? "presale"
            : "public sale"
        }
      ></Input>
      <div className="flex mt-2">
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).setSaleState,
              [0],
              updateMintState
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
        >
          Pause
        </Button>
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).setSaleState,
              [1],
              updateMintState
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
        >
          Start Genesis
        </Button>
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).setSaleState,
              [2],
              updateMintState
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
        >
          Start Presale
        </Button>
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).setSaleState(3),
              [3],
              updateMintState
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
        >
          Start Public sale
        </Button>
      </div>

      <Input
        label="Balance"
        value={" Ξ " + parseFloat(formatEther("" + balance)).toFixed(4)}
      >
        <Button
          onClick={() =>
            erc721
              .connect(signer)
              .withdraw()
              .then(handleTx)
              .then(updateAdminInfo)
              .catch(handleTxError)
          }
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer}
        >
          withdraw
        </Button>
      </Input>
      <Input
        label="Base URI"
        value={baseURIInput ?? baseURI}
        placeholder={"ipfs://QYGFW../"}
        onChange={(event) => setBaseURIInput(event.target.value)}
        className="text-white"
      >
        <Button
          onClick={() =>
            callContractFunction(
              erc721.connect(signer).setBaseURI,
              [baseURIInput],
              updateAdminInfo
            )
          }
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer || !baseURIInput}
        >
          {baseURI === "" ? "reveal" : "set"}
        </Button>
      </Input>
      <Input
        label="Unrevealed URI"
        value={unrevealedURIInput ?? unrevealedURI}
        placeholder={"ipfs://QYGFW../"}
        onChange={(event) => setUnrevealedURIInput(event.target.value)}
        className="text-white"
      >
        <Button
          onClick={() =>
            callContractFunction(
              erc721.connect(signer).setUnrevealedURI,
              [unrevealedURIInput],
              updateAdminInfo
            )
          }
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer || !unrevealedURIInput}
        >
          {"set"}
        </Button>
      </Input>
      <Input
        label="Collab URI"
        value={collabURIInput ?? collabURI}
        placeholder={"ipfs://QYGFW../"}
        onChange={(event) => setCollabURIInput(event.target.value)}
        className="text-white"
      >
        <Button
          onClick={() =>
            callContractFunction(
              erc721.connect(signer).setCollabURI,
              [collabURIInput],
              updateAdminInfo
            )
          }
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer || !collabURIInput}
        >
          set
        </Button>
      </Input>
      <div className="flex items-center">
        <Input
          label="Address"
          placeholder={"0x000..."}
          value={airdropAddress}
          onChange={(event) => setAirdropAddress(event.target.value)}
        />
        <Input
          label="Amount"
          placeholder={"Number"}
          value={airdropAmount}
          onChange={(event) => setAirdropAmount(event.target.value)}
        />
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).airdrop,
              [airdropAddress, airdropAmount],
              updateAdminInfo
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2 self-end"
          disabled={!signer || !airdropAddress || !airdropAmount}
        >
          Airdrop
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <Input
          label="Addresses"
          placeholder={"0x000...,0x000...,0x000..."}
          value={airdropAddresses}
          onChange={(event) =>
            setAirdropAddresses(event.target.value.split(","))
          }
        />
        <div className="flex items-center">
          <Input
            label="Amount"
            placeholder={"Number"}
            value={batchAmount}
            onChange={(event) => setBatchAmount(event.target.value)}
          />
          <Button
            onClick={() => {
              callContractFunction(
                erc721.connect(signer).airdropBatch,
                [airdropAddresses, batchAmount],
                updateAdminInfo
              );
            }}
            className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2 self-end"
            disabled={!signer || !airdropAddresses || !batchAmount}
          >
            Airdrop Batch
          </Button>
        </div>
      </div>

      <Input
        label="Max mint"
        placeholder={"Number"}
        value={maxMintInput}
        onChange={(event) => setMaxMintInput(event.target.value)}
      >
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).setMaxMint,
              [maxMintInput],
              updateMintState
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer || !maxMintInput}
        >
          Set
        </Button>
      </Input>
      <Input
        label="Reveal time"
        placeholder="UNIX timestamp"
        value={revealTimeInput}
        onChange={(event) => setRevealTimeInput(event.target.value)}
      >
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).setRevealTime,
              [revealTimeInput],
              updateAdminInfo
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer || !revealTimeInput}
        >
          Set
        </Button>
      </Input>
      <Input
        label="Withdrawal address"
        placeholder={"0x000..."}
        value={withdrawalAddressInput}
        onChange={(event) => setWithdrawalAddressInput(event.target.value)}
      >
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).setWithdrawalAddress,
              [withdrawalAddressInput],
              updateAdminInfo
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer || !withdrawalAddressInput}
        >
          Set
        </Button>
      </Input>
      <Input
        label="Price PS"
        placeholder={"In ETH"}
        value={pricePSInput}
        onChange={(event) => setPricePSInput(event.target.value)}
      >
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).setPricePS,
              [ethers.utils.parseEther(pricePSInput)],
              updateMintState
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer || !pricePSInput}
        >
          Set
        </Button>
      </Input>
      <Input
        label="Price Genesis"
        placeholder={"In ETH"}
        value={priceGenesisInput}
        onChange={(event) => setPriceGenesisInput(event.target.value)}
      >
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).setPriceGenesis,
              [ethers.utils.parseEther(priceGenesisInput)],
              updateMintState
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer || !priceGenesisInput}
        >
          Set
        </Button>
      </Input>
      <Input
        label="Price WL"
        placeholder={"In ETH"}
        value={priceWLInput}
        onChange={(event) => setPriceWLInput(event.target.value)}
      >
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).setPriceWL,
              [ethers.utils.parseEther(priceWLInput)],
              updateMintState
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer || !priceWLInput}
        >
          Set
        </Button>
      </Input>
      <Input
        label="Transfer ownership"
        placeholder={"0x000..."}
        value={ownerInput}
        onChange={(event) => setOwnerInput(event.target.value)}
      >
        <Button
          onClick={() => {
            callContractFunction(
              erc721.connect(signer).transferOwnership,
              [ownerInput],
              updateMintState
            );
          }}
          className="text-white bg-[#1e50ff] hover:ring-1 ring-white text-sm mx-2"
          disabled={!signer || !ownerInput}
        >
          Set
        </Button>
      </Input>
      {/* </details> */}
    </Card>
  );
}
