import React from 'react';
import './QualityStandard.css'; 

const QualityStandard = () => {
  return (
    <div className="quality-standard-container">
      {/* <div className="quality-standard-header">
        <h1>Quality Standard</h1>
        <p>Our commitment to quality ensures excellence in all aspects of our work.</p>
      </div> */}

      <div className="quality-standard-content">
        <h2>Standards We Pursue</h2>
        <div className="quality-list">
          <div className="quality-item">
            <div className="quality-icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h3>Regular Training</h3>
          </div>

          <div className="quality-item">
            <div className="quality-icon">
              <i className="fas fa-tasks"></i>
            </div>
            <h3>Ongoing Monitoring</h3>
          </div>

          <div className="quality-item">
            <div className="quality-icon">
              <i className="fas fa-file-medical"></i>
            </div>
            <h3>NABH Audit Support</h3>
          </div>

          <div className="quality-item">
            <div className="quality-icon">
              <i className="fas fa-broom"></i>
            </div>
            <h3>High-Quality Cleaning Standards</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityStandard;
