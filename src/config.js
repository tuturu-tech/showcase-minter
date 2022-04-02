const { _contractConfig: configOverrides } = window;

export const config = {
  maxSupply: 3999,
  purchaseLimit: 10,
  erc721Address: "0x0000000000000000000000000000000000000000", //"0x41978f599F793Bd4f697E3eAD1f5FB62BC5BcFC9", // "0x2DF5fDa90A29dED58c01eC5C8B1AB9113Fb990AF", // Change to correct address
  chainId: 1,
  validChainname: "Ethereum Mainnet",
  ...configOverrides,
};
