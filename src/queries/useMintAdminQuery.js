import { useContracts } from "../hooks";
import { useChainQuery } from "../hooks/useChainQuery";

const key = "MintAdminState";

const initialState = {
  name: "",
  symbol: "",
  baseURI: "",
  unrevealedURI: "",
  balance: "0",
  decrementAmount: "0",
  decrementInterval: "0",
  revealTime: "0",
};

export function useMintAdminState() {
  const { erc721 } = useContracts();

  const fetchState = async () => ({
    name: await erc721.name(),
    symbol: await erc721.symbol(),
    baseURI: await erc721.baseURI(),
    balance: await erc721?.provider.getBalance(erc721.address),
    decrementInterval: await erc721.decrementInterval(),
    decrementAmount: await erc721.decrementAmount(),
    revealTime: await erc721.revealTime(),
  });

  return useChainQuery({ key, fetchState, initialState });
}
