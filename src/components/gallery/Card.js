import React from "react";
import { nftImages } from "../../assets/NFTImages";

const Card = ({ id }) => {
	return (
		<div className='flex flex-col items-center m-2'>
			<img
				src={nftImages[`img${id}`]}
				alt='nft'
				className='hover:scale-105 shadow-lg shadow-black/50 rounded-lg transition-all duration-100'
			/>
			<h2 className='uppercase mt-2 text-[10px] md:text-sm'>Babyboss</h2>
			<h2 className='text-[10px] md:text-sm'>No. {id}</h2>
		</div>
	);
};

export default Card;
