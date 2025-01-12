import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, backgroundImage }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={backgroundImage} alt={title} loading="lazy" />
      </div>
      <span className="title">{title}</span>
    </div>
  );
};

export default ServiceCard;
