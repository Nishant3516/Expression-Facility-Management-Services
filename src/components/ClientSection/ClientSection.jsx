import React from "react";
import "./ClientSection.css";
import neotiaLogo from "../../assets/clients/neotia_logo.webp";
import fortuneLogo from "../../assets/clients/fortune_logo_wbg.png";
import thalamusLogo from "../../assets/clients/thalamus_logo.png";
import sacredLogo from "../../assets/clients/sacred_logo_wbg.png";
import kinsLogo from "../../assets/clients/kins_logo.png";
import fordLogo from "../../assets/clients/ford_logo.png";
import varshaLogo from "../../assets/clients/varsha_logo.png";
import clientLogo1 from "../../assets/expression_logo.jpg";

const ClientSection = () => {
    const clients = [
        neotiaLogo,
        fortuneLogo,
        thalamusLogo,
        sacredLogo,
        kinsLogo,
        fordLogo,
        varshaLogo,
        clientLogo1,
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
