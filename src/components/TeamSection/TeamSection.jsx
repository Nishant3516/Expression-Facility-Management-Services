import React from "react";
import "./TeamSection.css";
import ownerImage from "../../assets/owner/gyan_prakash.jpg";

const TeamSection = () => {
  return (
    <div className="teamSectionDiv">
      <section className="team-section">
        <h2 style={{ color: "white" }}>Meet Our Team</h2>
        <p>
          Our team comprises dedicated professionals with extensive experience
          across various domains. Each member is committed to driving innovation
          and delivering excellence.
        </p>

        <div className="team-layout">
          <div className="owner-section">
            <div className="owner-image">
              <img src={ownerImage} alt="Adv. Gyan Prakash" />
            </div>
            <div className="owner-info">
              <h3>Adv. Gyan Prakash</h3>
              <p className="ownerMainP">Chairman</p>
              <p>
                Expression Facility is a dynamic and innovative company
                established by Adv. Gyan Prakash, a distinguished legal
                professional with a Master in Law from Kolkata University. With
                a vision to revolutionize Facility sector, our company is
                committed to delivering exceptional services and solutions that
                meet the evolving needs of our clients.
              </p>
              <p>
                Adv. Gyan Prakash serves as the Chairman of Expression. Known
                for his energetic approach and strategic foresight, he is
                dedicated to fostering a culture of excellence and integrity
                within the organization. His extensive legal background equips
                him with unique insights that guide the company's operations and
                growth.
              </p>
            </div>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <h3>Mr Kamal Kant Bhagat</h3>
              <p>[Branch Head]</p>
            </div>

            <div className="team-member">
              <h3>Miss Anwara Khatun</h3>
              <p>[Operations & Training Head]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
