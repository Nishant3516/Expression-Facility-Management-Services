import React, { useState } from "react";
import "./team_carousel.css";
// import desktopImage from "../../assets/about_us_banner.png";
import carousel1Image from "../../assets/about/carousel1.jpg";
import carousel2Image from "../../assets/about/carousel2.jpg";
import carousel3Image from "../../assets/about/carousel3.jpg";

const TeamCarousel = () => {
  const images = [carousel1Image, carousel2Image, carousel3Image];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <button className="nav-button prev" onClick={goToPrev}>
          &#10094;
        </button>

        <div className="carousel-inner">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>

        <button className="nav-button next" onClick={goToNext}>
          &#10095;
        </button>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
