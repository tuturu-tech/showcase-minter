import React, { useRef, useState } from "react";

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
				<div className='flex flex-row justify-between items-center bg-[#28299f] p-2 rounded-2xl'>
					<h3 className='text-[10px] 800:text-[14px]'>{title}</h3>
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

export default GalleryAccordion;
