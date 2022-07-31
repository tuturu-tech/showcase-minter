// eslint-disable-next-line import/no-anonymous-default-export
import { images } from "../constants";
import {
	RiFacebookFill,
	RiGoogleFill,
	RiTwitterFill,
	RiInstagramLine,
	RiDiscordFill,
} from "react-icons/ri";

export default {
	nav: {
		links: [
			{ text: "Home", to: "home", icon: images.discord },
			{ text: "Roadmap", to: "roadmap", icon: images.twitter },
			{ text: "Mint", to: "mint", icon: images.opensea },
			{ text: "Team", to: "team", icon: images.opensea },
			{ text: "Collab", to: "collab", icon: images.opensea },
			{ text: "FAQ", to: "faq", icon: images.opensea },
		],
		social: [
			{
				icon: (
					<img
						src={images.opensea}
						alt='opensea'
						className='h-10 w-10 p-2 text-[#28299f]'
					/>
				),
				link: "https://opensea.io",
				alt: "opensea",
			},
			{
				icon: (
					<img
						src={images.etherscan}
						alt='opensea'
						className='h-10 w-10 p-2 text-[#28299f]'
					/>
				),
				link: "https://etherscan.io/",
				alt: "etherscan",
			},
			{
				icon: <RiTwitterFill className='h-10 w-10 p-2 text-[#28299f]' />,
				link: "https://twitter.com/",
				alt: "twitter",
			},
			{
				icon: <RiInstagramLine className='h-10 w-10 p-2 text-[#28299f]' />,
				link: "https://instagram.com/",
				alt: "instagram",
			},
			{
				icon: <RiDiscordFill className='h-10 w-10 p-2 text-[#28299f]' />,
				link: "https://discord.com/",
				alt: "discord",
			},
		],
	},
};
