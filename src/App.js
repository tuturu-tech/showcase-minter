import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { TransactionContextProvider } from "./hooks/useTx";
import { ConfettiProvider } from "./hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "animate.css";
import { WOW } from "wowjs";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import Mint from "./components/Mint";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Roadmap from "./components/Roadmap";
import Collab from "./components/Collab";
import MintImages from "./components/MintImages";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";

function App() {
	useEffect(() => {
		new WOW({ live: false }).init();
	}, []);

	// if mint active, show mint page
	return (
		<RecoilRoot>
			<BrowserRouter>
				<TransactionContextProvider>
					<ConfettiProvider>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/gallery' element={<Gallery />} />
						</Routes>
					</ConfettiProvider>
				</TransactionContextProvider>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
