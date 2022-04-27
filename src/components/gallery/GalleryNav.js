import React, { useState, useRef } from "react";

import { images } from "../../constants";
import { WalletButton } from "../../lib";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const GalleryNav = () => {
	const [active, setActive] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);
	const [height, setHeight] = useState("0px");

	const contentSpace = useRef(null);

	const toggleMenu = () => {
		setMenuOpen((prevState) => !prevState);
		setHeight(menuOpen ? "0px" : `${contentSpace.current.scrollHeight}px`);
	};

	return (
		<div className='relative z-10 top-0 right-0 bg-transparent h-28 pt-2 max-w-[1500px] mx-auto w-full'>
			<div className='flex flex-row justify-between items-center w-10/12 h-full mx-auto text-white'>
				<Link to='/'>
					<img
						src={images.babybossf}
						alt='baby boss logo'
						className='h-24 object-contain'
					/>
				</Link>

				<button
					className='flex 550:hidden w-10 h-10 items-center justify-center'
					onClick={toggleMenu}>
					<GiHamburgerMenu className='h-10 w-10' />
				</button>
				<div className='hidden 550:flex flex-row h-full items-center justify-center'>
					<WalletButton className='pr-6 pl-6 pt-2 pb-2 w-50 bg-[#1e50ff] text-sm rounded-full hover:ring-2 ring-white text-white'>
						Connect Wallet
					</WalletButton>
				</div>
			</div>
			<div className='relative w-10/12 xl:w-8/12 mx-auto'>
				<div
					ref={contentSpace}
					style={{ maxHeight: `${height}` }}
					className='absolute top right-0 bg-[#28299f] shadow-lg text-white transition-max-height duration-700 ease-in-out overflow-hidden pl-5 pr-5 rounded-2xl'>
					<div className='flex flex-col justify-center mb-1 items-center pb-2 pt-2 text-md sm:text-lg'>
						<WalletButton className='pr-6 pl-6 pt-2 pb-2 w-50 bg-[#1e50ff] text-sm rounded-full hover:ring-2 ring-white text-white'>
							Connect Wallet
						</WalletButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GalleryNav;
