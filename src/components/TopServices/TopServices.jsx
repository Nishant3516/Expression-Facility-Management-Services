import React from "react";
import "./TopServices.css";
import { useNavigate } from "react-router-dom";
import housekeepingImage from "../../assets/services/housekeeping.jpg";
import securityImage from "../../assets/services/security.jpg";
import wardboyImage from "../../assets/services/wardboy.jpg";

const services = [
  {
    id: 1,
    title: "House Keeping Services",
    description:
      "Our housekeeping services ensure a clean, safe environment for your healthcare facility. We clean patient rooms, common areas, and medical equipment, following strict industry standards. Whether daily upkeep or deep cleaning, our team delivers reliable, efficient cleanliness for a healthier atmosphere.",
    image: housekeepingImage,
  },
  {
    id: 2,
    title: "Security Services",
    description:
      "Our top-tier security services provide a safe environment for your healthcare facility. With trained personnel, 24/7 surveillance, access control, and emergency response, we prioritize the safety of patients and staff. Our customized security plans protect both property and personnel while maintaining a welcoming atmosphere. Trust us to safeguard your facility with professionalism and discretion.",
    image: securityImage,
  },
  {
    id: 6,
    title: "Ward Boy (GDA) Services",
    description:
      "Our ward boy services provide essential support to healthcare facilities by assisting with tasks like patient mobility, meal delivery, room cleanliness, and general help to healthcare teams. With a focus on compassion and efficiency, our trained staff contribute to a comfortable, well-organized environment. Trust our professionals to support your medical team, allowing them to focus on delivering quality healthcare.",
    image: wardboyImage,
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
                <button
                  className="learn-more-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/service/${service.id}`);
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopServices;
