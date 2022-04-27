import React from "react";
import {
	Navigation,
	Header,
	Countdown,
	Mint,
	MintImages,
	Dashboard,
	Roadmap,
	Team,
	Collab,
	FAQ,
	Footer,
} from "./";

const Home = () => {
	return (
		<div className='bg-background bg-cover bg-no-repeat text-white font-retro'>
			<Navigation />
			<Header />
			<Countdown />
			<Mint />
			<MintImages />
			<Dashboard />
			<Roadmap />
			<Team />
			<Collab />
			<FAQ />
			<Footer />
		</div>
	);
};

export default Home;
