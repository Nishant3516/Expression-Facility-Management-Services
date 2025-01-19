import React from "react";
import "./ServiceSection.css";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import biomedicalImage from "../../assets/services/biomedical.jpg";
import housekeepingImage from "../../assets/services/housekeeping.jpg";
import laundryImage from "../../assets/services/laundry.jpg";
import pestImage from "../../assets/services/pest.jpg";
import securityImage from "../../assets/services/security.jpg";
import wardboyImage from "../../assets/services/wardboy.jpg";

const servicesData = [
  { id: 1, title: "Housekeeping Services", backgroundImage: housekeepingImage },
  { id: 2, title: "Security Services", backgroundImage: securityImage },
  { id: 3, title: "Pest Control Services", backgroundImage: pestImage },
  { id: 4, title: "Linen & Laundry Services", backgroundImage: laundryImage },
  { id: 5, title: "Bio Medical Waste", backgroundImage: biomedicalImage },
  { id: 6, title: "Ward Boy Services", backgroundImage: wardboyImage },
];

function ServiceSection() {
  return (
    <section className="sectors-section">
      <h1 className="sectors-title">Our Services</h1>
      <div className="top-sectors-grid">
        {servicesData.map((sector, index) => (
          <Link
            to={`/service/${sector.id}`}
            style={{ textDecoration: "none", color: "black" }}
            key={sector.id}
            className="service-link"
          >
            <ServiceCard
              key={index}
              title={sector.title}
              icon={sector.icon}
              backgroundImage={sector.backgroundImage}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
