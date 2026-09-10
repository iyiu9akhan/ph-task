import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import AvailablePlayers from "./components/AvailablePlayers";
import Footer from "./components/Footer";

function App() {
  const [dollar, setDollar] = useState(500);
  const handleClaimDollar = ():number => {
    const newDollar = dollar + 100;
    setDollar(newDollar);
    return newDollar;
  };
  return (
    <>
      <NavBar dollar={dollar} />
      <Banner claimDollar={handleClaimDollar} dollar={dollar} />
      <AvailablePlayers/>
      <Footer/>
    </>
  );
}

export default App;
