import React from "react";
import "./Home.css";
import Services from "../../components/SectorsSection/SectorSection";
import StatsContainer from "../../components/Stats/Stats";
import Benefits from "../../components/Benefits/Benefits";
import SectorsSection from "../../components/Service/ServiceSection";
import ClientSection from "../../components/ClientSection/ClientSection";
import Offers from "../../components/Offers/Offers";

function Home() {
  return (
    <div className="homeDiv">
      <div className="heroWrapper"></div>
      <div>
        <StatsContainer />
        <SectorsSection />
        <Benefits />
        <Services />
        <ClientSection />
        <Offers />
      </div>
    </div>
  );
}

export default Home;
