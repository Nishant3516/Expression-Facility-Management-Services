import React from "react";
import "./Offers.css";
import tempImage from "../../assets/hero_image.jpg"

function Offers() {
  const offers = [
    {
      title: "New Customer Discount",
      description:
        "Get 10% off your first service when you choose any of our offerings—housekeeping, security, linen management, or pest control. We want to welcome you to our family with a special discount on your first experience.",
      image: tempImage, 
    },
    {
      title: "Bundle & Save",
      description:
        "Save 15% when you opt for our bundled service packages! Choose from any combination of housekeeping, security, linen, and pest control services and enjoy comprehensive coverage at a discounted price.",
      image: tempImage,
    },
    {
      title: "Loyalty Program",
      description:
        "Enjoy exclusive discounts and priority service with our Loyalty Program. The more services you use, the greater the benefits. After six months of service, get a free deep cleaning or a free pest control treatment for your space!",
      image: tempImage,
    },
    {
      title: "Seasonal Offers",
      description:
        "Stay tuned for our seasonal promotions, where we offer limited-time discounts on select services. Keep your facilities spotless and secure with unbeatable prices during our seasonal sales!",
      image: tempImage,
    },
    {
      title: "Referral Program",
      description:
        "Refer a friend or business, and both you and the person you refer will enjoy a 10% discount on your next service. Share the love and help others experience the quality of our services while saving!",
      image: tempImage,
    },
    {
      title: "Holiday Special",
      description:
        "Enjoy up to 20% off on all services during major holidays like New Year, Diwali, or Christmas. Celebrate the season with a cleaner, safer, and well-maintained environment.",
      image: tempImage,
    },
  ];

  return (
    <section className="offers-section">
      <h2>Exclusive Discounts & Offers</h2>
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
    </section>
  );
}

export default Offers;
