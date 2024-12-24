import React from 'react';
import './TeamSection.css';  // Import the CSS file

// Dummy image import for owner (replace with actual image path)
import teamPhoto1 from '../../assets/hero_image.jpg'; // Owner's image

const TeamSection = () => {
  return (
    <div className="teamSectionDiv">
    <section className="team-section">

      <h2>Meet Our Team</h2>
      <p>
        Our team comprises dedicated professionals with extensive experience across various domains. 
        Each member is committed to driving innovation and delivering excellence.
      </p>

      {/* Team Section Layout */}
      <div className="team-layout">
        
        {/* Owner Section */}
        <div className="owner-section">
          <div className="owner-image">
            <img src={teamPhoto1} alt="Khushbu Kumari" />
          </div>
          <div className="owner-info">
            <h3>Khushbu Kumari</h3>
            <p className='ownerMainP'>Founder & CEO</p>
            <p>The company was founded by Khushbu Kumari, an energetic and driven businesswoman. Khushbu holds a degree in Economics (Honours), demonstrating a strong foundation in economic principles, and has also completed DMLT (Diploma in Medical Laboratory Technology), showcasing her diverse skill set and knowledge. Her dynamic approach and enthusiasm have been key factors in the company's growth and success.</p>
          </div>
        </div>

        {/* Team Members Section (2x2 Grid) */}
        <div className="team-grid">
          <div className="team-member">
            <h3>Shyam Prasad</h3>
            <p>Branch Head</p>
          </div>
          <div className="team-member">
            <h3>Kamal Kant Bhagat</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-member">
            <h3>Mithun Bhagat</h3>
            <p>Linen Management Specialist</p>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
};

export default TeamSection;
