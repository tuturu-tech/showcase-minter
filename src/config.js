const { _contractConfig: configOverrides } = window;

export const config = {
  maxSupply: 3999,
  purchaseLimit: 10,
  erc721Address: "0x2DF5fDa90A29dED58c01eC5C8B1AB9113Fb990AF", //"0x41978f599F793Bd4f697E3eAD1f5FB62BC5BcFC9", // "0x47bbd59EBF969A77BC8CD22617257946fc41EA08", // Change to correct address
  chainId: 4,
  validChainname: "Rinkeby Testnet",
  ...configOverrides,
};
