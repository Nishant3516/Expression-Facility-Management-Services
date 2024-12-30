import React, { useState, useEffect } from "react";
import SectorCard from "./SectorCard";
import "./SectorSection.css";
import healthImage from "../../assets/sectors/health.jpg";
import buildingImage from "../../assets/sectors/building.jpg";
import factoryImage from "../../assets/sectors/factory.jpg";
import hotelImage from "../../assets/sectors/hotel.jpg";
import officeImage from "../../assets/sectors/office.jpg";
import resortImage from "../../assets/sectors/resort.jpg";
import shopImage from "../../assets/sectors/shop.jpg";
import shoppingImage from "../../assets/sectors/shopping.jpg";

const SectorSection = (props) => {
  const topServiceData = props.list ?? [
    { title: "Healthcare", icon: healthImage },
    { title: "Hotels & Restaurants", icon: hotelImage },
    { title: "Resorts", icon: resortImage },
    { title: "Malls", icon: shoppingImage },
    { title: "Shop", icon: shopImage },
    { title: "Home/Office", icon: officeImage },
    { title: "Factory", icon: factoryImage },
    { title: "Construction Building", icon: buildingImage },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerScroll = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerScroll >= topServiceData.length ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [topServiceData]);

  return (
    <div className="services-container">
    <div className="services-main-container">
      <h1 style={{ textAlign: "center", marginBottom: "2rem" , color:"white"}}>Sectors We Serve</h1>
      <div
        className="services-row"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerScroll)}%)`,
        }}
      >
        {topServiceData.map((service, index) => (
          <SectorCard
            key={index}
            title={service.title}
            description={service.description}
            backgroundImage={service.icon}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default SectorSection;
