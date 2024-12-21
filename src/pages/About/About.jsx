import React from "react";
import "./About.css";
import heroImage from "../../assets/hero_image.jpg";
import teamPhoto1 from "../../assets/hero_image.jpg"; 
import teamPhoto2 from "../../assets/hero_image.jpg";
import teamPhoto3 from "../../assets/hero_image.jpg";
import clientLogo1 from "../../assets/hero_image.jpg";
import clientLogo2 from "../../assets/hero_image.jpg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <section className="hero-banner">
      <div className="heroDiv">
        <div className="hero-text">
          <h1>About Us</h1>
          <p>
            We combine over 12 years of expertise to deliver world-class facility management services. 
            Our innovative solutions set the standard for excellence across industries.
          </p>
        </div>
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
      </section>

      <section className="company-overview">
        <h2>Who We Are</h2>
        <p>
          Established in Siliguri, West Bengal, Expression Facility Management Services is a trusted provider 
          of customized and practical solutions in electronic and physical security, housekeeping, pest control, 
          and more. Our commitment to quality and innovation drives us to exceed client expectations at every turn.
        </p>
        <p>
          Our leadership team, headed by Khushbu Kumari, leverages over a decade of expertise to provide sustainable 
          and impactful services. From healthcare facilities to corporate offices, we are redefining the standards 
          of facility management.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <ul>
          <li>
            <strong>Comprehensive Solutions:</strong> We are a one-stop destination for all your facility management requirements.
          </li>
          <li>
            <strong>Experienced Professionals:</strong> Our team is trained and certified to deliver exceptional results.
          </li>
          <li>
            <strong>Customer-Centric Approach:</strong> Your satisfaction is at the core of everything we do.
          </li>
          <li>
            <strong>Sustainability:</strong> We prioritize eco-friendly practices, ensuring a positive impact on the environment.
          </li>
          <li>
            <strong>Cost-Effective Services:</strong> Our competitive pricing ensures you get the best value without compromising on quality.
          </li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          Our team comprises dedicated professionals with extensive experience across various domains. 
          Each member is committed to driving innovation and delivering excellence.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <img src={teamPhoto1} alt="Khushbu Kumari" />
            <h3>Khushbu Kumari</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={teamPhoto2} alt="Shyam Prasad" />
            <h3>Shyam Prasad</h3>
            <p>Regional Head</p>
          </div>
          <div className="team-member">
            <img src={teamPhoto3} alt="Kamal Kant Bhagat" />
            <h3>Kamal Kant Bhagat</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </section>

      {/* Achievements
      <section className="achievements">
        <h2>Our Achievements</h2>
        <p>
          We take pride in serving leading organizations such as Ambuja Neotia, Vive Healthcare, 
          and Sacred Heart School. Our ability to adapt and innovate has made us a trusted partner across industries.
        </p>
        <div className="client-logos">
          <img src={clientLogo1} alt="Client 1" />
          <img src={clientLogo2} alt="Client 2" />
        </div>
      </section> */}

      <section className="call-to-action">
        <h2>Get in Touch</h2>
        <p>
          Ready to transform your facilities? Partner with us to experience unparalleled facility management services.
        </p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </section>
    </div>
  );
}

export default AboutUs;
