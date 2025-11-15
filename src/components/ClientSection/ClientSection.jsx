import React from "react";
import "./ClientSection.css";
// import neotiaLogo from "../../assets/clients/neotia_logo.webp";
import fortuneLogo from "../../assets/clients/fortune_logo_wbg.png";
import thalamusLogo from "../../assets/clients/thalamus_logo.png";
import sacredLogo from "../../assets/clients/sacred_logo_wbg.png";
import kinsLogo from "../../assets/clients/kins_logo.png";
import fordLogo from "../../assets/clients/ford_logo.png";
import varshaLogo from "../../assets/clients/varsha_logo.png";
import pamLogo from "../../assets/clients/pam_logo.png";
import mayoorLogo from "../../assets/clients/mayoor_logo.png";
import mathurLogo from "../../assets/clients/mathura.png";
import siliguriClubLogo from "../../assets/clients/siliguri_club.png";

const ClientSection = () => {
  const clients = [
    // neotiaLogo,
    fortuneLogo,
    thalamusLogo,
    sacredLogo,
    kinsLogo,
    fordLogo,
    varshaLogo,
    pamLogo,
    mayoorLogo,
    mathurLogo,
    siliguriClubLogo,
  ];

  return (
    <section className="client-section">
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Our Clients</h1>
      <div className="client-grid">
        {clients.map((logo, index) => (
          <div className="client-logo" key={index}>
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
