import React, { useState, useRef, useEffect } from "react";
import GalleryNav from "./GalleryNav";
import NFTAttributes from "../assets/metadata";
import { nftImages } from "../assets/NFTImages";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";

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
			"Pink", // doesn't work
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

const Checkbox = ({ value, onChangeHandler }) => {
	return (
		<div className='flex items-start mb-6'>
			<div className='flex items-center h-5'>
				<input
					id='remember'
					aria-describedby='remember'
					type='checkbox'
					value={value}
					onChange={() => onChangeHandler(value)}
					className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
					required
				/>
			</div>
			<div className='ml-3 text-sm'>
				<label
					htmlFor='remember'
					className='font-medium text-white dark:text-gray-300'>
					{value}
				</label>
			</div>
		</div>
	);
};

const GalleryAccordion = ({ title, text, children }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [height, setHeight] = useState("0px");

	const contentSpace = useRef(null);

	const toggleMenu = () => {
		setMenuOpen((prevState) => !prevState);
		setHeight(menuOpen ? "0px" : `${contentSpace.current.scrollHeight}px`);
	};
	return (
		<div className='flex flex-col w-full h-fit text-sm'>
			<div className='rounded-2xl w-full bg-gradient-to-r p-[1px] from-pink-600 via-gray-400 to-teal-400'>
				<div className='flex flex-row justify-between items-center bg-[#28299f] p-2  rounded-2xl'>
					<h3>{title}</h3>
					<button
						className='flex items-center justify-center bg-[#d41efc] rounded-full w-5 h-5 ml-2'
						onClick={toggleMenu}>
						{menuOpen ? "-" : "+"}
					</button>
				</div>
			</div>
			<div className='relative'>
				<div
					ref={contentSpace}
					style={{ maxHeight: `${height}` }}
					className='bg-black/20 rounded-lg text-white transition-max-height duration-700 ease-in-out overflow-hidden'>
					<div className='p-5 text-justify'>{children}</div>
				</div>
			</div>
		</div>
	);
};

const Card = ({ id, image }) => {
	return (
		<div className='flex flex-col items-center m-2'>
			<img
				src={nftImages[`img${id}`]}
				alt='nft'
				className='hover:scale-105 shadow-lg shadow-black/50 rounded-lg transition-all duration-100'
			/>
			<h2 className='uppercase mt-2'>Babyboss</h2>
			<h2>No. {id}</h2>
		</div>
	);
};

const Gallery = () => {
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [NFTs, setNFTs] = useState([]);
	const [offset, setOffset] = useState(0);
	const sortedNFTs = NFTAttributes.sort((a, b) => (a.id > b.id ? 1 : -1));

	console.log(selectedFilters);

	const onChangeHandler = (value) => {
		if (selectedFilters.includes(value)) {
			setSelectedFilters(selectedFilters.filter((item) => item !== value));
		} else {
			setSelectedFilters([...selectedFilters, value]);
		}
	};

	useEffect(() => {
		if (selectedFilters.length === 0) {
			setNFTs(sortedNFTs);
			setOffset(0);
		} else {
			setNFTs(
				sortedNFTs.filter((item) =>
					selectedFilters.every((v) => item.attributes.includes(v))
				)
			);
			setOffset(0);
		}
	}, [selectedFilters]);

	return (
		<div className='bg-background bg-cover bg-no-repeat text-white font-retro h-fit'>
			<div className='flex flex-col h-fit min-h-screen'>
				<GalleryNav />
				<div className='flex w-10/12 mx-auto'>
					<div className='flex flex-col w-1/4 mr-10'>
						<h2 className='uppercase mb-5 text-xl'>Filter</h2>
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
					<div className='w-3/4'>
						<h2 className='uppercase mb-5 text-xl'>Gallery</h2>
						<div className='grid grid-cols-4'>
							{NFTs.filter(
								(item, index) => index >= offset && index - offset < 16
							).map((item, index) => (
								<Card key={index} id={item.id} />
							))}
						</div>
						<div className='flex items-center justify-center'>
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
