import React from "react";
import "./About.css";
import aboutImage from "../../assets/about_hero_image.png";
import QualityStandard from "../../components/QualityStandard/QualityStandard";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import TeamSection from "../../components/TeamSection/TeamSection";

function AboutUs() {
  return (
    <div className="about-us">
      <section className="hero-banner">
        <div className="heroImageDiv">
          <img src={aboutImage} alt="" srcset="" />
        </div>
      </section>
      <section className="company-overview">
        <h2>Who We Are</h2>
        <p>
          Established in Siliguri, West Bengal, Expression Facility Management
          Services is a trusted provider of customized and practical solutions
          in electronic and physical security, housekeeping, pest control, and
          more. Our commitment to quality and innovation drives us to exceed
          client expectations at every turn.
        </p>
        <p>
          At Expression Facility Management Service, we take pride in our
          reputation for excellence. Our team of seasoned professionals is
          committed to providing innovative and reliable solutions that enhance
          security, streamline operations, and maintain a safe and hygienic
          environment. As part of the Expression Group, we manage a diverse
          portfolio of services across multiple sectors, ensuring a seamless
          experience for all our clients.
        </p>
      </section>
      <div className="about-us-content">
        <h2>Values We Follow</h2>
        <div className="values-list-about">
          <div className="value-item-about">
            <div className="value-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Customer-Focused Success</h3>
          </div>

          <div className="value-item-about">
            <div className="value-icon-about">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Solution-Oriented Approach</h3>
          </div>

          <div className="value-item-about">
            <div className="value-icon-about">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Careful and Considerate Actions</h3>
          </div>
        </div>
      </div>
      <QualityStandard />
      <WhyChooseUs />
      <TeamSection />
    </div>
  );
}

export default AboutUs;
