import React, { useState, useEffect } from "react";
import GalleryNav from "./GalleryNav";
import NFTAttributes from "../../assets/metadata";
import Card from "./Card";
import DetailedView from "./DetailedView";
import GalleryAccordion from "./GalleryAccordion";
import Checkbox from "./Checkbox";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Modal } from "../../lib";

const traits = [
	{
		trait_type: "Collab 1/1",
		values: [
			"Aku Napie",
			"Bad Ape",
			"Catverse",
			"Gamer Punks",
			"Konfederasi",
			"Pami Izmail",
			"Rich Cats Nation",
			"Roachpunk",
			"Sanuri Zulkefli",
		],
	},
	{
		trait_type: "Skin",
		values: [
			"Alien",
			"Robot",
			"Amethyst",
			"Ape",
			"Zombie",
			"Tan",
			"Sawo",
			"Gold",
			"Pale",
			"Albino",
		],
	},
	{
		trait_type: "Mouth",
		values: [
			"Vape",
			"Cigarette",
			"Chocolate",
			"Bored",
			"Happy",
			"Amaze",
			"Purple Pacifier",
			"Pink Pacifier",
			"Black Pacifier",
			"Red Pacifier",
			"Green Pacifier",
			"Blood",
			"Rabbit Teeth",
			"Pipe",
			"Medical Mask",
			"Buck Teeth",
			"Green Vomit",
			"Yellow Vomit",
			"Rainbow Vomit",
			"Lipstick",
			"Bubblegum",
			"KN95",
		],
	},
	{
		trait_type: "Head",
		values: [
			"Gold Crown",
			"Diamond Crown",
			"Fedora",
			"Beanie",
			"Afro",
			"Ninja",
			"Orange Cap",
			"Purple Cap",
			"Top Hat",
			"Blonde",
			"Black Hoodie",
			"Yellow Hoodie",
			"Red Hoodie",
			"Raincoat",
			"Flat Cap",
			"Halo",
			"Frog",
			"Long Black Hair",
			"Red Punk Hair",
			"Purple Punk Hair",
			"Green Punk Hair",
			"Black Punk Hair",
			"Dread",
			"Astronaut",
			"Crocs",
			"Cloche",
			"Knitted Cap",
			"Cowboy",
			"Bandana",
			"Roach",
			"Devil",
			"Party Hat",
			"White Hair",
			"Headphone",
			"Red Ninja",
			"Shaved",
			"None",
		],
	},
	{
		trait_type: "Eyes",
		values: [
			"VR",
			"3D Glass",
			"Thin",
			"Ski Goggles",
			"Hipster Shade",
			"Big Shade",
			"4 Eyes",
			"Nerd Glass",
			"Happy",
			"Blue",
			"One Eye", // doesn't work
			"Bored",
			"Diamond",
			"Small",
			"Pointed",
			"Pink Eye Shadow",
			"Big Eyes",
			"Small Shade",
			"Blue Beam",
			"Red Beam",
			"Closed",
			"Red Eyes",
			"Cyclops",
			"Stare",
			"Pirate",
			"Annoying",
		],
	},
	{
		trait_type: "Accessories 1",
		values: [
			"Choker",
			"Gold Chain",
			"Silver Chain",
			"Diamond Chain",
			"Ruby chain",
			"None",
		],
	},
	{
		trait_type: "Accessories 2",
		values: [
			"Gold Earrings",
			"Silver Earrings",
			"Diamond Earrings",
			"Ruby Earrings",
			"None",
		],
	},
	{
		trait_type: "Background",
		values: ["0x", "Blue", "Purple Pink", "Mint", "S3L"],
	},
];

const Gallery = () => {
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [NFTs, setNFTs] = useState([]);
	const [offset, setOffset] = useState(0);
	const [id, setId] = useState("");
	const [openModal, setOpenModal] = useState(false);
	const [selectedNFT, setSelectedNFT] = useState();
	const sortedNFTs = NFTAttributes.sort((a, b) => (a.id > b.id ? 1 : -1));

	const onChangeHandler = (value) => {
		if (selectedFilters.includes(value)) {
			setSelectedFilters(selectedFilters.filter((item) => item !== value));
		} else {
			setSelectedFilters([...selectedFilters, value]);
		}
	};

	useEffect(() => {
		if (selectedFilters.length === 0 && !id) {
			setNFTs(sortedNFTs);
			setOffset(0);
		} else if (selectedFilters.length > 0 && !id) {
			setNFTs(
				sortedNFTs.filter((item) =>
					selectedFilters.every((v) => item.attributes.includes(v))
				)
			);
			setOffset(0);
		} else {
			setNFTs(
				sortedNFTs.filter((item) => item.id.toString() === id.toString())
			);
		}
	}, [selectedFilters, id]);

	return (
		<div className='bg-background bg-cover bg-no-repeat text-white font-retro h-fit'>
			<div className='flex flex-col h-fit min-h-screen'>
				<GalleryNav />
				<div className='flex w-11/12 sm:w-10/12 mx-auto'>
					{openModal && (
						<Modal open={openModal} onClose={() => setOpenModal(false)}>
							<DetailedView NFT={selectedNFT} />
						</Modal>
					)}
					<div className='flex flex-col w-2/5 550:w-1/4 mr-10'>
						<h2 className='uppercase mb-5 text-xl'>Filter</h2>
						<div className='flex flex-col'>
							<h2 className='mb-2'>Filter by ID:</h2>
							<input
								value={id}
								onChange={(e) => setId(e.target.value)}
								className='border-2 rounded-lg mb-4 bg-transparent text-white text-center'
							/>
						</div>
						{traits.map((trait, index) => (
							<div key={index} className='mb-2'>
								<GalleryAccordion title={trait.trait_type}>
									<div className='flex flex-col'>
										{trait.values.map((item, index) => {
											return (
												<Checkbox
													value={item}
													key={index}
													onChangeHandler={onChangeHandler}
												/>
											);
										})}
									</div>
								</GalleryAccordion>
							</div>
						))}
					</div>
					<div className='w-3/5 550:w-3/4'>
						<h2 className='uppercase mb-5 text-xl'>Gallery</h2>
						<div className='grid grid-cols-2 550:grid-cols-3 sm:grid-cols-4'>
							{NFTs.filter(
								(item, index) => index >= offset && index - offset < 16
							).map((item, index) => (
								<button
									key={index}
									onClick={() => {
										setSelectedNFT(item);
										setOpenModal(true);
									}}>
									<Card id={item.id} />
								</button>
							))}
						</div>
						<div className='flex items-center justify-center mb-10'>
							{offset !== 0 && (
								<button
									onClick={() => {
										offset !== 0 ? setOffset(offset - 16) : setOffset(offset);
									}}
									className='hover:scale-105 '>
									<BsFillArrowLeftCircleFill className='text-4xl m-2 shadow-lg shadow-black/20 rounded-full' />
								</button>
							)}

							{offset + 16 < NFTs.length && (
								<button
									onClick={() => {
										offset < NFTs.length
											? setOffset(offset + 16)
											: setOffset(offset);
									}}
									className='hover:scale-105 '>
									<BsFillArrowRightCircleFill className='text-4xl m-2 shadow-lg shadow-black/20 rounded-full' />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
