import { useChainQuery, useContracts } from "../hooks";

import { usePriorityAccount } from "../lib/connectors";

const key = "MintState";

export function useMintQuery() {
  const { erc721 } = useContracts();
  const account = usePriorityAccount();

  const fetchState = async () => {
    const owner = await erc721.owner();
    const totalSupply = await erc721.totalSupply();
    const maxSupply = await erc721.maxSupply();
    const price = await erc721.getCurrentPrice();
    const startingPrice = await erc721.startingPrice();
    const minimumPrice = await erc721.minimumPrice();
    const decrementInterval = await erc721.decrementInterval();
    const decrementAmount = await erc721.decrementAmount();
    const auctionStart = await erc721.auctionStart();
    const timeLeft = await erc721.getTimeLeft();

    const auctionActive = await erc721.isActive();

    const isContractOwner =
      account && owner && account.toLowerCase() === owner.toLowerCase();

    return {
      owner,
      maxSupply,
      price,
      startingPrice,
      minimumPrice,
      decrementInterval,
      decrementAmount,
      auctionStart,
      auctionActive,
      totalSupply,
      isContractOwner,
      timeLeft,
    };
  };
  return useChainQuery({ key, fetchState });
}
