import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { TransactionContextProvider } from "./hooks/useTx";
import { ConfettiProvider } from "./hooks";
import "animate.css";
import { WOW } from "wowjs";

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

function App() {
  useEffect(() => {
    new WOW({ live: false }).init();
  }, []);

  // if mint active, show mint page
  return (
    <RecoilRoot>
      <TransactionContextProvider>
        <ConfettiProvider>
          <div className="bg-background bg-cover bg-no-repeat text-white font-retro">
            <Navigation />
            <Header />
            <Mint />
            <MintImages />
            <Dashboard />
            <Roadmap />
            <Team />
            <Collab />
            <FAQ />
            <Footer />
          </div>
        </ConfettiProvider>
      </TransactionContextProvider>
    </RecoilRoot>
  );
}

export default App;
