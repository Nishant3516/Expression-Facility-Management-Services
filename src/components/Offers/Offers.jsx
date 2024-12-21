import React from "react";
import { useNavigate } from "react-router-dom";
import "./Offers.css";
import bundleImage from '../../assets/offers/bundle.png';
import loyaltyImage from '../../assets/offers/loyalty.png';
import welcomeImage from '../../assets/offers/welcome.png';

function Offers() {
  const navigate = useNavigate();

  const offers = [
    {
      title: "New Customer Discount",
      description:
        "Get 10% off your first service when you choose any of our offerings—housekeeping, security, linen management, or pest control. We want to welcome you to our family with a special discount on your first experience.",
      image: welcomeImage,
    },
    {
      title: "Bundle & Save",
      description:
        "Save 15% when you opt for our bundled service packages! Choose from any combination of housekeeping, security, linen, and pest control services and enjoy comprehensive coverage at a discounted price.",
      image: bundleImage,
    },
    {
      title: "Loyalty Program",
      description:
        "Enjoy exclusive discounts and priority service with our Loyalty Program. The more services you use, the greater the benefits. After six months of service, get a free deep cleaning or a free pest control treatment for your space!",
      image: loyaltyImage,
    },
  ];

  return (
    <section className="offers-section">
      <h2>Exclusive Offers</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="offer-container"
            style={{
              backgroundImage: `url(${offer.image})`,
            }}
          >
            <div className="offer-overlay">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="see-more-button"
        onClick={() => navigate("/offers")}
      >
        See More
      </button>
    </section>
  );
}

export default Offers;
