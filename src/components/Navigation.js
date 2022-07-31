import React, { useState, useRef } from "react";

import { useMintQuery } from "../queries";
import content from "../content";
import { WalletButton } from "../lib";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [height, setHeight] = useState("0px");
	const [{ isContractOwner, loaded }] = useMintQuery();

	const contentSpace = useRef(null);

	return (
		<div className='relative z-10 top-0 right-0 bg-transparent h-28 pt-2 max-w-[1500px] mx-auto'>
			<div className='flex flex-row justify-between items-center w-10/12 h-full mx-auto text-primary'>
				<p className='font-logo font-bold text-lg uppercase'>MINT</p>

				<div className='flex flex-row h-full items-center justify-center'>
					<div className='flex-row mr-6 hidden md:flex'>
						{content.nav.social.map((item, index) => (
							<a
								key={index}
								href=''
								target='_blank'
								rel='noreferrer'
								className='rounded-full bg-primary mr-2 w-8 h-8 flex items-center justify-center hover:ring-1 ring-black hover:scale-105'>
								{item.icon}
							</a>
						))}
					</div>
					<WalletButton className='pr-6 pl-6 pt-2 pb-2 w-50 bg-primary text-black text-sm rounded-full hover:ring-2 ring-white'>
						Connect Wallet
					</WalletButton>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
