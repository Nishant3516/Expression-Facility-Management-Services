import React from 'react';
import { Link } from 'react-router-dom';
import Service from './Service'; // Assuming Service is in the same folder as Services.js
import './Services.css'; // The styles for Services component
import bgImage from '../../assets/hero_image.jpeg'; // You can change this to specific service images

const Services = () => {
  const serviceData = [
    { id: 1, title: 'Housekeeping Services', description: 'Description for Service 1', backgroundImage: bgImage },
    { id: 2, title: 'Security Services', description: 'Description for Service 2', backgroundImage: bgImage },
    { id: 3, title: 'Pest Control Services', description: 'Description for Service 3', backgroundImage: bgImage },
    { id: 4, title: 'Linen & Laundry Services', description: 'Description for Service 4', backgroundImage: bgImage },
    { id: 5, title: 'Bio Medical Waste', description: 'Description for Service 5', backgroundImage: bgImage },
    { id: 6, title: 'Ward Boy Services', description: 'Description for Service 6', backgroundImage: bgImage },
  ];

  return (
    <div className="services-container">
      <h1 style={{ textAlign: 'center', marginBottom: "30px" }}>Services</h1>
      <div className="services-grid">
        {serviceData.map((service) => (
          <Link to={`/service/${service.id}`} key={service.id} className="service-link">
            <Service
              title={service.title}
              description={service.description}
              backgroundImage={service.backgroundImage}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
