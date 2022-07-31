const { _contractConfig: configOverrides } = window;

export const config = {
	maxSupply: 10000,
	purchaseLimit: 10,
	erc721Address: "0x6AFD8D76aAf368ed51249c8a0702104AFeA6efA5", //"0x41978f599F793Bd4f697E3eAD1f5FB62BC5BcFC9", // "0x2DF5fDa90A29dED58c01eC5C8B1AB9113Fb990AF", // Change to correct address
	chainId: 4,
	validChainname: "Rinkeby Testnet",
	...configOverrides,
};
