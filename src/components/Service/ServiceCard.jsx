import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, name, icon, backgroundImage }) => {
  console.log(backgroundImage);
  return (
    <div className="card" >
      <div className="image">
        <img src={backgroundImage} alt="" srcset="" />
        {/* <span className="text">{title}</span> */}
      </div>
      <span className="title">{title}</span>
      {/* <span className="price">$100</span> */}
    </div>
  );
}

export default ServiceCard;
