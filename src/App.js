import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { TransactionContextProvider } from "./hooks/useTx";
import { ConfettiProvider } from "./hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "animate.css";
import { WOW } from "wowjs";

import Home from "./components/Home";
import Gallery from "./components/gallery/Gallery";

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
							{/* <Route path='/gallery' element={<Gallery />} /> */}
						</Routes>
					</ConfettiProvider>
				</TransactionContextProvider>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
