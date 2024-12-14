import React from 'react';
import './Service.css';

const Service = ({ title, description, backgroundImage }) => {
    return (
        <div className="service-card" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="service-overlay"></div>
            <div className="service-content">
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
            </div>
        </div>
    );
};

export default Service;