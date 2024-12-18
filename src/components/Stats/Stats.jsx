import React from 'react';
import './Stats.css';
import tempLogo from "../../assets/hero_image.jpeg";

const MedicalAchievementHealthProtection = () => {
  return (
    <div className="container">
      <div className="header-content">
        <img src={tempLogo} alt="Icon" />
        <h1>Expression Facility<br/>Management Services</h1>
        <div className="stats-container">
          <div className="stat">
            <span className="stat-value">15+</span>
            <span className="stat-label">Satisfied Patients</span>
          </div>
          <div className="stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">Satisfaction Rates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalAchievementHealthProtection;