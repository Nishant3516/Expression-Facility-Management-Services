import React from "react";
import "./TopServices.css";
import housekeepingHeroImage from "../../assets/services/house_kepping_hero_image.png";
import securityHeroImage from "../../assets/services/security_hero_image.png";
import wardboyHeroImage from "../../assets/services/ward_boy_hero_image.png";
import housekeepingMobileHeroImage from "../../assets/services/mobile/housekeeping_mobile.png";
import securityMobileHeroImage from "../../assets/services/mobile/security_mobile.png";
import wardboyMobileHeroImage from "../../assets/services/mobile/wardboy_mobile.png";
import { useNavigate } from "react-router-dom";

const isMobile = window.innerWidth <= 768;

const services = [
  {
    id: 1,
    title: "House Keeping Services",
    description:
      "Our professional housekeeping services ensure a clean, safe, and comfortable environment for your healthcare facility. With a focus on hygiene and patient care, we provide thorough cleaning of all areas, including patient rooms, common spaces, and medical equipment. Our experienced team follows strict protocols to meet industry standards, ensuring a spotless and sanitized environment. Whether it's daily upkeep or deep cleaning, our services contribute to a healthier and more pleasant atmosphere for both patients and staff. Trust us to maintain your facility's cleanliness with reliability and efficiency.",
    image: isMobile ? housekeepingMobileHeroImage : housekeepingHeroImage,
    linkURL: "/service/1",
  },
  {
    id: 2,
    title: "Security Services",
    description:
      "Our top-tier security services are designed to provide a safe and secure environment for your healthcare facility. With highly trained security personnel, we offer 24/7 surveillance, access control, and emergency response. We prioritize patient and staff safety by implementing customized security plans that align with your facility's needs. Our team ensures the protection of both property and personnel while maintaining a welcoming atmosphere. Rely on our expert security services to safeguard your healthcare environment with professionalism and discretion.",
    image: isMobile ? securityMobileHeroImage : securityHeroImage,
  },
  {
    id: 6,
    title: "Ward Boy (GDA) Services",
    description:
      "Our ward boy services provide essential support to healthcare facilities by ensuring smooth operations and enhancing patient care. Our trained staff assist with daily tasks such as patient mobility, delivering meals, maintaining cleanliness in patient rooms, and offering general assistance to healthcare teams. With a focus on compassion and efficiency, our ward boys contribute to a comfortable and well-organized environment for patients and staff. Rely on our dedicated professionals to provide reliable support, allowing your medical team to focus on delivering top-quality healthcare.",
    image: isMobile ? wardboyMobileHeroImage : wardboyHeroImage,
  },
];

const TopServices = () => {
  const navigate = useNavigate();

  return (
    <div className="topServicesMain">
      <section className="top-services-section">
        <h2 className="section-title">Top 3 Services</h2>
        <div className="top-services">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-item ${
                index % 2 === 0 ? "image-first" : "text-first"
              }`}
              onClick={() => navigate(`/service/${service.id}`)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <div className="service-description">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopServices;
