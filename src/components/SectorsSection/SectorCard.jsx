import React from 'react';
import './SectorCard.css';

const SectorCard = ({ title, description, backgroundImage }) => {
    return (
        <div className="service-card" >
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                backgroundRepeat: 'no-repeat'
            }}>
                {/* <div className="service-overlay"></div> */}
                {/* <div className="service-content">
                    <p className="service-description">{description}</p>
                </div> */}
            </div>
            {/* <h3 className="service-title">{title}</h3> */}
        </div>
    );
};

export default SectorCard;
