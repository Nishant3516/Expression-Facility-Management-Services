import React from 'react';
import './ServiceSection.css'; // Import styles for the section
import ServiceCard from './ServiceCard'; // Import the new SectorCard component
// Import icons
import bgImage from '../../assets/hero_image.jpeg';

// const topSectorsData = [
//   { title: "Healthcare", icon: tempIcon },
//   { title: "Hotels, Resort & Restaurants", icon: tempIcon },
//   { title: "Malls", icon: tempIcon },
//   { title: "Shop", icon: tempIcon },
// ];

// const bottomSectorsData = [
//   { title: "Home/Office", icon: tempIcon },
//   { title: "Factory", icon: tempIcon },
//   { title: "Construction Building", icon: tempIcon },
// ];

const topSectorsData = [
  { id: 1, title: 'Housekeeping Services', description: 'Description for Service 1', backgroundImage: bgImage },
  { id: 2, title: 'Security Services', description: 'Description for Service 2', backgroundImage: bgImage },
  { id: 3, title: 'Pest Control Services', description: 'Description for Service 3', backgroundImage: bgImage },
];

const bottomSectorsData = [
    { id: 4, title: 'Linen & Laundry Services', description: 'Description for Service 4', backgroundImage: bgImage },
    { id: 5, title: 'Bio Medical Waste', description: 'Description for Service 5', backgroundImage: bgImage },
    { id: 6, title: 'Ward Boy Services', description: 'Description for Service 6', backgroundImage: bgImage },
  ];

function ServiceSection() {
  return (
    <section className="sectors-section">
      <h2 className="sectors-title">Our Services</h2>

      {/* Top sectors grid */}
      <div className="top-sectors-grid">
        {topSectorsData.map((sector, index) => (
          <ServiceCard key={index} title={sector.title} icon={sector.icon} />
        ))}
      </div>

      {/* Bottom sectors grid */}
      <div className="bottom-sectors-grid">
        {bottomSectorsData.map((sector, index) => (
          <ServiceCard key={index} title={sector.title} icon={sector.icon} />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
