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
		const pricePS = await erc721.price();
		const maxMint = await erc721.maxMint();

		const isContractOwner =
			account && owner && account.toLowerCase() === owner.toLowerCase();

		return {
			owner,
			maxSupply,
			pricePS,
			totalSupply,
			isContractOwner,
			maxMint,
		};
	};
	return useChainQuery({ key, fetchState });
}
