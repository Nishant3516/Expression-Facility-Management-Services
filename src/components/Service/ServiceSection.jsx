import React from 'react';
import './ServiceSection.css'; 
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard'; 
import biomedicalImage from '../../assets/services/biomedical.jpg';
// import housekeepingImage from '../../assets/services/housekeeping.jpg'
import housekeepingImage from '../../assets/services/temp_housekeeping_services.jpg'
import lanudryImage from '../../assets/services/laundry.jpg'
import pestImage from '../../assets/services/pest.jpg'
import securityImage from '../../assets/services/security.jpg'
import wardboyImage from '../../assets/services/temp_ward_boy.jpg'
// import wardboyImage from '../../assets/services/wardboy.jpg'


const servicesData = [
  { id: 1, title: 'Housekeeping Services', description: 'Description for Service 1', backgroundImage: housekeepingImage},
  { id: 2, title: 'Security Services', description: 'Description for Service 2', backgroundImage: securityImage },
  { id: 3, title: 'Pest Control Services', description: 'Description for Service 3', backgroundImage: pestImage },
  { id: 4, title: 'Linen & Laundry Services', description: 'Description for Service 4', backgroundImage: lanudryImage },
  { id: 5, title: 'Bio Medical Waste', description: 'Description for Service 5', backgroundImage: biomedicalImage },
  { id: 6, title: 'Ward Boy Services', description: 'Description for Service 6', backgroundImage: wardboyImage },
];


function ServiceSection() {
  return (
    <section className="sectors-section">
      <h1 className="sectors-title">Our Services</h1>
      <div className="top-sectors-grid">
        {servicesData.map((sector, index) => (
          <Link to={`/service/${sector.id}`} style={{textDecoration:'none', color:'black'}} key={sector.id} className="service-link">
          <ServiceCard key={index} title={sector.title} icon={sector.icon} backgroundImage={sector.backgroundImage} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
