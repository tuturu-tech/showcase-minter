import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useContracts, useParty } from "../hooks";
import { useMintQuery } from "../queries";
import { WalletButton } from "../lib";
import { usePriorityIsActive, usePriorityProvider } from "../lib/connectors";
import { LoadingButton } from "../lib/Primitives";

import { images } from "../constants";

const Mint = () => {
	const [amount, setAmount] = useState(1);
	const [isMinting, setIsMinting] = useState(false);

	const provider = usePriorityProvider();
	const { erc721, handleTxError, handleTx } = useContracts();
	const [{ maxSupply, pricePS, totalSupply, maxMint }, updateMintState] =
		useMintQuery();

	const startParty = useParty();

	const signer = provider?.getSigner();

	const amountLeft =
		(totalSupply && maxSupply - totalSupply?.toNumber()) || "loading...";
	const isSoldOut = amountLeft === 0;

	const onMintHandler = () => {
		setIsMinting(true);
		erc721
			.connect(signer)
			.mint(amount, { value: pricePS.mul(amount) })
			.then(handleTx)
			.then(startParty)
			.then(updateMintState)
			.catch(handleTxError)
			.finally(() => {
				setTimeout(() => setIsMinting(false), 300);
			});
	};

	return (
		<div
			id='mint'
			className='flex flex-col items-center min-h-screen h-fit w-10/12 mx-auto max-w-[1500px] max-h-[1000px]'>
			<img
				src='https://pbs.twimg.com/media/FEaFK4OWUAAlgiV?format=jpg&name=900x900'
				alt='mint'
				className='h-[300px] w-[300px] mb-10 rounded-lg border-4 border-primary'
			/>
			{signer && pricePS && (
				<div className='flex flex-col items-center flex-1 mb-20'>
					<h2 className='uppercase text-4xl mb-4 text-center'>MINT AN NFT</h2>

					<p className='mb-4 text-center'>
						{totalSupply ? totalSupply?.toString() : "loading..."}/
						{maxSupply ? maxSupply.toString() : "loading..."} Minted at each{" "}
						{pricePS
							? ethers.utils.formatEther(pricePS) + " ETH"
							: "loading..."}
					</p>
					<p className='text-center'>
						Welcome to this NFT showcase
						<br />
						Mint your own and check how the UI works.
					</p>
					<div className='flex flex-col items-center mt-10'>
						<div className='flex flex-row items-center mb-4 '>
							<button
								className='bg-primary text-black rounded-full w-10 h-10 mr-2 border-b-8 border-[#89ae00] active:border-b-0 ease-in-out duration-200'
								onClick={() => {
									setAmount((prevAmount) => {
										if (prevAmount > 1) {
											return prevAmount - 1;
										} else {
											return prevAmount;
										}
									});
								}}>
								-
							</button>
							<input
								type='text'
								value={amount}
								readOnly
								className='rounded-full max-w-[60px] bg-transparent mr-2 text-center'
							/>
							<button
								className='bg-primary text-black rounded-full w-10 h-10 mr-2 border-b-8 border-[#89ae00] active:border-b-0 ease-in-out duration-200'
								onClick={() => {
									setAmount((prevAmount) => {
										if (prevAmount < 20) {
											return prevAmount + 1;
										} else {
											return prevAmount;
										}
									});
								}}>
								+
							</button>
						</div>

						<div className='flex flex-col items-center gap-y-2'>
							<LoadingButton
								loading={isMinting}
								disabled={!signer || isMinting || isSoldOut}
								className='bg-primary text-black rounded-full w-40 p-2 border-b-8 border-[#89ae00] active:border-b-0 ease-in-out duration-200'
								onClick={onMintHandler}>
								MINT
							</LoadingButton>
							<p className='block'>
								Mint limit: {maxMint ? Number(maxMint) : "0"}
							</p>
						</div>
					</div>
				</div>
			)}
			{signer && !pricePS && (
				<div className='flex flex-col flex-1 items-center justify-center mb-20 md:mb-0'>
					<h2 className='uppercase text-4xl mb-4 text-center'>MINT AN NFT</h2>
					<svg
						role='status'
						className='mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
						viewBox='0 0 100 101'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
							fill='currentColor'
						/>
						<path
							d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
							fill='currentFill'
						/>
					</svg>
				</div>
			)}
			{!signer && (
				<div className='flex flex-col flex-1 items-center justify-start mb-20 md:mb-0'>
					<h2 className='uppercase text-4xl mb-4 text-center'>MINT AN NFT</h2>
					<p className='text-center mb-4'>
						Welcome to this NFT showcase
						<br />
						Mint your own and check how the UI works.
					</p>
					<WalletButton className='uppercase p-2 w-50 pt-3 pb-3 pr-6 pl-6 bg-primary rounded-full text-sm text-black border-b-8 border-[#89ae00] active:border-b-0 ease-in-out duration-200'>
						Connect Wallet
					</WalletButton>
				</div>
			)}
		</div>
	);
};

export default Mint;
