import React from "react";
import "./Footer.css";
import logo from "../../assets/expression_without_bg_logo.png";

const Footer = () => {
    return (
        <footer className="footer-container">
            {/* Column 1: Logo and Description */}
            <div className="footerMainContainer">
            <div className="footer-column">
                <img src={logo} alt="Company Logo" className="footer-logo" />
                <p>
                    Expression Facility Management Services offers comprehensive solutions in
                    electronic and physical security, facility operation, and pest control.
                </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About Us</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </div>

            {/* Column 3: Contact Details */}
            <div className="footer-column">
                <h3>Contacts</h3>
                <p>Address: Siliguri, West Bengal</p>
                <h4>Email-Us</h4>
                <p>Email: info@expressionfacility.com</p>
                <h4>Call Now</h4>
                <p>Phone: +91 12345 67890</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
