import React from 'react';
import { Link } from 'react-router-dom';
import './CTAButton.css';

function CTAButton() {
  return (
    <div className="cta-container">
      <Link to="/contact">
        <button className="cta-button">
          Know more
          <span className="cta-icon">
            <i className="fas fa-arrow-right"></i> {/* Font Awesome Icon */}
          </span>
        </button>
      </Link>
    </div>
  );
}

export default CTAButton;
