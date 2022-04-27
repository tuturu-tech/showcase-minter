import React from "react";
import { nftImages } from "../../assets/NFTImages";

const DetailedView = ({ NFT }) => {
	return (
		<div className='flex flex-col bg-[#1e50ff]/90 p-10 rounded-lg text-white font-retro'>
			<img
				src={nftImages[`img${NFT.id}`]}
				className='rounded-lg object-contain max-w-[250px] mx-auto 550:max-w-xs'
			/>
			<div className='flex flex-col items-center'>
				<h2 className='text-lg sm:text-2xl my-5'>No. {NFT.id}</h2>
				<table className='text-sm'>
					<thead className=''>
						<tr>
							<th className='content-center'>Background</th>
							<th className='w-5'></th>
							<th>Skin</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='text-center'>{NFT.attributes[0]}</td>
							<td className='w-5'></td>
							<td className='text-center'>{NFT.attributes[1]}</td>
						</tr>
						<tr className='h-5'></tr>
					</tbody>
					<thead>
						<tr>
							<th>Head</th>
							<th className='w-5'></th>
							<th className='text-center'>Mouth</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='text-center'>{NFT.attributes[4]}</td>
							<td className='w-5'></td>
							<td className='text-center'>{NFT.attributes[5]}</td>
						</tr>
						<tr className='h-5'></tr>
					</tbody>
					<thead>
						<tr>
							<th className='text-center'>Accessory 1</th>
							<th className='w-5'></th>
							<th className='text-center'>Accessory 2</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='text-center'>{NFT.attributes[2]}</td>
							<td className='w-5'></td>
							<td className='text-center'>{NFT.attributes[3]}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DetailedView;
