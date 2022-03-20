import { useState } from "react";

import { Input, Button, Card } from "../lib/Primitives";

import { formatEther } from "ethers/lib/utils";
import { useMintQuery, useMintAdminState } from "../queries";
import { signWhitelist, usePriorityProvider } from "../lib";
import { useContracts } from "../hooks";

export default function AdminPanel() {
  const signer = usePriorityProvider()?.getSigner();
  const { erc721, handleTx, handleTxError } = useContracts();

  const [baseURIInput, setBaseURIInput] = useState();
  const [unrevealedURIInput, setUnrevealedURIInput] = useState();

  const [{ owner, auctionActive }, updateMintState] = useMintQuery();
  const [
    {
      name,
      symbol,
      baseURI,
      unrevealedURI,
      balance,
      decrementAmount,
      decrementInterval,
      revealTime,
    },
    updateAdminInfo,
  ] = useMintAdminState();

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
    <Card className="w-[500px] pb-5">
      <p className="text-gray-200 text-center">Admin Panel</p>
      <Input label="Address" value={erc721?.address} />
      <Input label="Owner" value={owner} />
      <div className="flex">
        <Input className="w-full mr-2" label="Name" value={name} />
        <Input className="w-full ml-2" label="Symbol" value={symbol} />
      </div>
      <Input label="Auction active" value={auctionActive ? "live" : "paused"}>
        {auctionActive ? (
          <Button
            onClick={() => {
              callContractNoArg(
                erc721.connect(signer).stopAuction(),
                updateAdminInfo
              );
            }}
            className="text-white bg-[#8b514c] hover:ring-1 ring-white"
          >
            Stop
          </Button>
        ) : (
          <Button
            onClick={() => {
              callContractNoArg(
                erc721.connect(signer).startAuction(),
                updateAdminInfo
              );
            }}
            className="text-white bg-[#8b514c] hover:ring-1 ring-white"
          >
            Start
          </Button>
        )}
      </Input>
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
          className="text-white bg-[#8b514c] hover:ring-1 ring-white"
          disabled={!signer}
        >
          withdraw
        </Button>
      </Input>
      <Input
        label="Base URI"
        value={baseURIInput ?? baseURI}
        placeholder={baseURI ?? "ipfs://QYGFW../"}
        onChange={(event) => setBaseURIInput(event.target.value)}
        className="text-white"
      >
        <Button
          onClick={() =>
            callContractFunction(
              erc721.connect(signer).setBaseURI(baseURIInput),
              updateAdminInfo
            )
          }
          className="text-white bg-[#8b514c] hover:ring-1 ring-white"
          disabled={!signer || !baseURIInput}
        >
          {baseURI === "" ? "reveal" : "set"}
        </Button>
      </Input>
      <Input
        label="Unrevealed URI"
        value={unrevealedURIInput ?? unrevealedURI}
        placeholder={unrevealedURI ?? "ipfs://QYGFW../"}
        onChange={(event) => setUnrevealedURIInput(event.target.value)}
        className="text-white"
      >
        <Button
          onClick={() =>
            callContractFunction(
              erc721.connect(signer).setUnrevealedURI(unrevealedURIInput),
              updateAdminInfo
            )
          }
          className="text-white bg-[#8b514c] hover:ring-1 ring-white"
          disabled={!signer || !unrevealedURIInput}
        >
          {"set"}
        </Button>
      </Input>
      {/* </details> */}
    </Card>
  );
}
