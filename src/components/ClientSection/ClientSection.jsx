import React from "react";
import "./ClientSection.css";
import clientLogo1 from "../../assets/expression_logo.jpg";

const ClientSection = () => {
    const clients = [
        clientLogo1,
        clientLogo1,
        clientLogo1,
        clientLogo1,
        clientLogo1,
        clientLogo1,
        clientLogo1,
        clientLogo1,
    ];

    return (
        <section className="client-section">
            <h2>Our Clients</h2>
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
