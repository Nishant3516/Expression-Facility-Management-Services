import React from "react";
import "./Home.css";
import heroImgDesktop from "../../assets/hero_image.jpg";
import Services from "../../components/SectorsSection/SectorSection";
import StatsContainer from "../../components/Stats/Stats";
import Benefits from "../../components/Benefits/Benefits";
import SectorsSection from "../../components/Service/ServiceSection";
import ClientSection from "../../components/ClientSection/ClientSection";
import Offers from "../../components/Offers/Offers";

function Home() {
  return (
    <div className="homeDiv">
      <div className="heroWrapper">
        {/* <img className="heroImg" src={heroImgDesktop} alt="Hero" /> */}
      </div>
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
