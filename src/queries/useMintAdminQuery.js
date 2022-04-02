import { useContracts } from "../hooks";
import { useChainQuery } from "../hooks/useChainQuery";

const key = "MintAdminState";

const initialState = {
  name: "",
  symbol: "",
  baseURI: "",
  unrevealedURI: "",
  collabURI: "",
  balance: "0",
  revealTime: "0",
  reserveMinted: "0",
  withdrawalAddress: "",
  reserved: "0",
};

export function useMintAdminState() {
  const { erc721 } = useContracts();

  const fetchState = async () => ({
    name: await erc721.name(),
    symbol: await erc721.symbol(),
    baseURI: await erc721.baseURI(),
    unrevealedURI: await erc721.unrevealedURI(),
    collabURI: await erc721.collabURI(),
    balance: await erc721?.provider.getBalance(erc721.address),
    revealTime: await erc721.revealTime(),
    reserveMinted: await erc721.reserveMinted(),
    withdrawalAddress: await erc721.withdrawalAddress(),
    reserved: await erc721.reserved(),
  });

  return useChainQuery({ key, fetchState, initialState });
}
