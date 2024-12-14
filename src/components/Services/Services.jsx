import React from 'react';
import Service from './Service';
import './Services.css';
import bgImage from '../../assets/hero_image.jpeg';

const Services = () => {
  const serviceData = [
    { title: 'Housekeeping Services', description: 'Description for Service 1', backgroundImage:bgImage },
    { title: 'Security Services', description: 'Description for Service 2', backgroundImage:bgImage },
    { title: 'Pest Control Services', description: 'Description for Service 3', backgroundImage:bgImage },
    { title: 'Linen & Laundry Services', description: 'Description for Service 4', backgroundImage:bgImage },
    { title: 'Bio Medical Waste', description: 'Description for Service 5', backgroundImage:bgImage },
    { title: 'Ward Boy Services', description: 'Description for Service 6', backgroundImage:bgImage },
  ];

  return (
    <div className="services-grid">
      {serviceData.map((service, index) => (
        <Service key={index} title={service.title} description={service.description} backgroundImage={service.backgroundImage}/>
      ))}
    </div>
  );
};

export default Services;