const { _contractConfig: configOverrides } = window;

export const config = {
  maxSupply: 1000,
  purchaseLimit: 20,
  erc721Address: "0x47bbd59EBF969A77BC8CD22617257946fc41EA08", // Change to correct address
  chainId: 4,
  validChainname: "Rinkeby Testnet",
  links: {
    opensea: "https://opensea.io/",
    discord: "https://discord.com/",
    twitter: "https://twitter.com/home",
    instagram: "https://www.instagram.com/",
  },
  launchDate:
    "Thu Feb 20 2022 23:00:00 GMT+0100 (Central European Standard Time)",
  ...configOverrides,
};
