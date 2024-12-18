import React from 'react';
import { useParams } from 'react-router-dom';
import './ServicePage.css'; // Optional: styles for the service page
import bgImage from '../../assets/hero_image.jpeg'; // Default image, use real images for each service

const ServicePage = () => {
  const { serviceId } = useParams(); // Extract serviceId from URL

  // Simulate service data (you can replace this with an API call or dynamic data)
  const serviceData = [
    { id: 1, title: 'Housekeeping Services', description: 'Detailed description for Housekeeping Service', backgroundImage: bgImage },
    { id: 2, title: 'Security Services', description: 'Detailed description for Security Service', backgroundImage: bgImage },
    { id: 3, title: 'Pest Control Services', description: 'Detailed description for Pest Control Service', backgroundImage: bgImage },
    { id: 4, title: 'Linen & Laundry Services', description: 'Detailed description for Linen & Laundry Service', backgroundImage: bgImage },
    { id: 5, title: 'Bio Medical Waste', description: 'Detailed description for Bio Medical Waste Service', backgroundImage: bgImage },
    { id: 6, title: 'Ward Boy Services', description: 'Detailed description for Ward Boy Service', backgroundImage: bgImage },
  ];

  const service = serviceData.find(s => s.id === parseInt(serviceId)); // Find the selected service by id

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
