import React from 'react';
import './ServiceSection.css'; 
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard'; 
import bgImage from '../../assets/hero_image.jpeg';
import housekeepingImage from '../../assets/services/housekeeping.jpg'
import lanudryImage from '../../assets/services/laundry.jpg'
import pestImage from '../../assets/services/pest.jpg'
import securityImage from '../../assets/services/security.jpg'
import wardboyImage from '../../assets/services/wardboy.jpg'


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
  { id: 1, title: 'Housekeeping Services', description: 'Description for Service 1', backgroundImage: housekeepingImage},
  { id: 2, title: 'Security Services', description: 'Description for Service 2', backgroundImage: securityImage },
  { id: 3, title: 'Pest Control Services', description: 'Description for Service 3', backgroundImage: pestImage },
  { id: 4, title: 'Linen & Laundry Services', description: 'Description for Service 4', backgroundImage: lanudryImage },
  { id: 5, title: 'Bio Medical Waste', description: 'Description for Service 5', backgroundImage: bgImage },
  { id: 6, title: 'Ward Boy Services', description: 'Description for Service 6', backgroundImage: wardboyImage },
];

// const bottomSectorsData = [
//   ];

function ServiceSection() {
  return (
    <section className="sectors-section">
      <h2 className="sectors-title">Our Services</h2>

      <div className="top-sectors-grid">
        {topSectorsData.map((sector, index) => (
          <Link to={`/service/${sector.id}`} style={{textDecoration:'none', color:'black'}} key={sector.id} className="service-link">

          <ServiceCard key={index} title={sector.title} icon={sector.icon} backgroundImage={sector.backgroundImage} />
          </Link>
        ))}
      </div>

      {/* Bottom sectors grid */}
      {/* <div className="bottom-sectors-grid"> */}
        {/* {bottomSectorsData.map((sector, index) => (
          <ServiceCard key={index} title={sector.title} icon={sector.icon} />
        ))}
      </div> */}
    </section>
  );
}

export default ServiceSection;
