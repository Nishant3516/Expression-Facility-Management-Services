import React from 'react';
import { useParams } from 'react-router-dom';
import './ServicePage.css'; 
import bgImage from '../../assets/hero_image.jpg';
import housekeepingImage from '../../assets/services/housekeeping.jpg'
import lanudryImage from '../../assets/services/laundry.jpg'
import pestImage from '../../assets/services/pest.jpg'
import securityImage from '../../assets/services/security.jpg'
import wardboyImage from '../../assets/services/wardboy.jpg'


const ServicePage = () => {
  const { serviceId } = useParams(); 

  const serviceData = [
    { id: 1, title: 'Housekeeping Services', description: 'Description for Service 1', backgroundImage: housekeepingImage},
    { id: 2, title: 'Security Services', description: 'Description for Service 2', backgroundImage: securityImage },
    { id: 3, title: 'Pest Control Services', description: 'Description for Service 3', backgroundImage: pestImage },
    { id: 4, title: 'Linen & Laundry Services', description: 'Description for Service 4', backgroundImage: lanudryImage },
    { id: 5, title: 'Bio Medical Waste', description: 'Description for Service 5', backgroundImage: bgImage },
    { id: 6, title: 'Ward Boy Services', description: 'Description for Service 6', backgroundImage: wardboyImage },
  ];

  const service = serviceData.find(s => s.id === parseInt(serviceId)); 

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="service-page-container">
      <h1>{service.title}</h1>
      <div
        className="service-page-image"
        style={{
          backgroundImage: `url(${service.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      ></div>
      <div className="service-page-content">
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServicePage;
