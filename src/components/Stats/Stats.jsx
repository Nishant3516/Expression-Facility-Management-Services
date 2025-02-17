import React from "react";
import "./Stats.css";

const MedicalAchievementHealthProtection = () => {
  return (
    <div className="container">
      <div className="header-content">
        <h1>
          Global <b style={{ fontSize: 48 }}>Standards</b>,<br />
          At <b style={{ fontSize: 48 }}>Local Care</b>
        </h1>
        <div className="stats-container">
          <div className="stat">
            <span className="stat-value">15+</span>
            <span className="stat-label">Clients</span>
          </div>
          <div className="stat">
            <span className="stat-value">90%</span>
            <span className="stat-label">Satisfaction Rates</span>
          </div>
          <div className="stat">
            <span className="stat-value">2+</span>
            <span className="stat-label">Working States</span>
            {/* <p>Bihar, West Bengal</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalAchievementHealthProtection;
