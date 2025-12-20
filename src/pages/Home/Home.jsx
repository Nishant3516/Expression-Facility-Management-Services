import React from "react";
import "./Home.css";
import Services from "../../components/SectorsSection/SectorSection";
import StatsContainer from "../../components/Stats/Stats";
import Benefits from "../../components/Benefits/Benefits";
import SectorsSection from "../../components/Service/ServiceSection";
import ClientSection from "../../components/ClientSection/ClientSection";
import Offers from "../../components/Offers/Offers";
import TopServices from "../../components/TopServices/TopServices";
import heroImage from "../../assets/hero_image.png";
import heroMobileImage from "../../assets/services/mobile/hero_mobile.png";

function Home() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="homeDiv">
      <div className="heroWrapper">
        <img
          src={isMobile ? heroMobileImage : heroImage}
          alt=""
          loading="lazy"
        />
      </div>
      <div>
        <StatsContainer />
        {/* <SectorsSection /> */}
        <TopServices />
        <Benefits />
        <Services />
        <ClientSection />
        <Offers />
      </div>
    </div>
  );
}

export default Home;
