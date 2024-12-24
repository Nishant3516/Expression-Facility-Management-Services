import React from 'react';
import './WhyChooseUs.css';  // Import the CSS file

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <div className="why-choose-us-content">
        <h2>Our Key Advantages</h2>
        <div className="why-choose-list">
          <div className="why-choose-item">
            <div className="why-choose-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3>Experienced Leadership</h3>
            <p>12+ years of industry expertise ensuring quality service delivery.</p>
          </div>

          <div className="why-choose-item">
            <div className="why-choose-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Tailored Solutions</h3>
            <p>Customized solutions to meet your unique business challenges.</p>
          </div>

          <div className="why-choose-item">
            <div className="why-choose-icon">
              <i className="fas fa-star"></i>
            </div>
            <h3>Strong Reputation</h3>
            <p>Unwavering focus on quality, safety, and innovation.</p>
          </div>

          <div className="why-choose-item">
            <div className="why-choose-icon">
              <i className="fas fa-network-wired"></i>
            </div>
            <h3>Diverse Service Network</h3>
            <p>Broad range of services with a robust infrastructure.</p>
          </div>

          <div className="why-choose-item">
            <div className="why-choose-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Client-Centric Approach</h3>
            <p>Working closely with clients to understand their needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
