import React from "react";
import "./Footer.css";
import logo from "../../assets/expression_without_bg_logo.png";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footerMainContainer">
                <div className="footer-column">
                    <div className="logo-circle">
                        <img src={logo} alt="Company Logo" className="footer-logo" />
                    </div>
                    <p>
                        Expression Facility Management Services offers comprehensive solutions in
                        electronic and physical security, facility operation, and pest control.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="about">About Us</a></li>
                        <li><a href="services">Services</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com/expression.facility.management.services?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i> 
                        </a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Contacts</h3>
                    <p>Address: Matigara, Siliguri, West Bengal - 734003</p>
                    <h4>Email-Us</h4>
                    <p>Email: expressionfacility2023@gmail.com</p>
                    <h4>Call Now</h4>
                    <p>Phone: +91 96350 67373</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
