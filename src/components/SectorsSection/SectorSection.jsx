import React from 'react';
import SectorCard from './SectorCard'; // Assuming Service is in the same folder as Services.js
import './SectorSection.css'; // The styles for Services component
import tempIcon from '../../assets/hero_image.jpeg'; // You can change this to specific service images

const SectorSection = () => {
  // const serviceData = [
  //   { id: 1, title: 'Housekeeping Services', description: 'Description for Service 1', backgroundImage: bgImage },
  //   { id: 2, title: 'Security Services', description: 'Description for Service 2', backgroundImage: bgImage },
  //   { id: 3, title: 'Pest Control Services', description: 'Description for Service 3', backgroundImage: bgImage },
  //   { id: 4, title: 'Linen & Laundry Services', description: 'Description for Service 4', backgroundImage: bgImage },
  //   { id: 5, title: 'Bio Medical Waste', description: 'Description for Service 5', backgroundImage: bgImage },
  //   { id: 6, title: 'Ward Boy Services', description: 'Description for Service 6', backgroundImage: bgImage },
  // ];
  const topServiceData = [
    { title: "Healthcare", icon: tempIcon },
    { title: "Hotels, Resort & Restaurants", icon: tempIcon },
    { title: "Malls", icon: tempIcon },
    { title: "Shop", icon: tempIcon },
    { title: "Home/Office", icon: tempIcon },
    { title: "Factory", icon: tempIcon },
    { title: "Construction Building", icon: tempIcon },
  ];
  
  // const bottomServicesData = [
  // ];

  return (
    <div className="services-container">
      <h1 style={{ textAlign: 'center', marginBottom: "30px" }}>Our Sectors</h1>
      <div className="services-grid">
        {topServiceData.map((service) => (
            <SectorCard
              title={service.title}
              description={service.description}
              backgroundImage={service.backgroundImage}
            />
        ))}
      </div>
    </div>
  );
};

export default SectorSection;
