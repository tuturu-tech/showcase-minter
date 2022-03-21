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
    const pricePS = await erc721.pricePS();
    const priceWL = await erc721.priceWL();
    const priceGenesis = await erc721.priceGenesis();
    const maxMint = await erc721.maxMint();

    const saleState = await erc721.saleState();

    const isContractOwner =
      account && owner && account.toLowerCase() === owner.toLowerCase();

    return {
      owner,
      maxSupply,
      pricePS,
      priceWL,
      priceGenesis,
      saleState,
      totalSupply,
      isContractOwner,
      maxMint,
    };
  };
  return useChainQuery({ key, fetchState });
}
