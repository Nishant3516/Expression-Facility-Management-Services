import React from "react";
import { useParams } from "react-router-dom";
import "./ServicePage.css";
import housekeepingHeroImage from "../../assets/services/house_kepping_hero_image.png";
import lanudryHeroImage from "../../assets/services/laundry_hero_image.png";
import bioMedicalHeroImage from "../../assets/services/biomedical_hero_image.png";
import pestHeroImage from "../../assets/services/pest_hero_image.png";
import securityHeroImage from "../../assets/services/security_hero_image.png";
import wardboyHeroImage from "../../assets/services/ward_boy_hero_image.png";
import housekeepingMobileHeroImage from "../../assets/services/mobile/housekeeping_mobile.png";
import housekeepingSecondImage from "../../assets/services/housekeeping_second_image.png";
import housekeepingSecondMobileHeroImage from "../../assets/services/mobile/housekeeping_second_mobile.png";
import lanudryMobileHeroImage from "../../assets/services/mobile/linen_mobile.png";
import bioMedicalMobileHeroImage from "../../assets/services/mobile/biomedical_mobile.png";
import pestMobileHeroImage from "../../assets/services/mobile/pest_mobile.png";
import securityMobileHeroImage from "../../assets/services/mobile/security_mobile.png";
import wardboyMobileHeroImage from "../../assets/services/mobile/wardboy_mobile.png";
import SectorsSection from "../../components/SectorsSection/SectorSection";
import healthImage from "../../assets/sectors/health.jpg";
import buildingImage from "../../assets/sectors/building.jpg";
import factoryImage from "../../assets/sectors/factory.jpg";
import hotelImage from "../../assets/sectors/hotel.jpg";
import officeImage from "../../assets/sectors/office.jpg";
import resortImage from "../../assets/sectors/resort.jpg";
import shopImage from "../../assets/sectors/shop.jpg";
import shoppingImage from "../../assets/sectors/shopping.jpg";
import CTAButton from "../../components/CTAButton/CTAButton";

const ServicePage = () => {
  const { serviceId } = useParams();
  const isMobile = window.innerWidth <= 768;
  const serviceData = [
    {
      id: 1,
      title: "House Keeping Services",
      description:
        "Our professional housekeeping services ensure a clean, safe, and comfortable environment for your healthcare facility. With a focus on hygiene and patient care, we provide thorough cleaning of all areas, including patient rooms, common spaces, and medical equipment. Our experienced team follows strict protocols to meet industry standards, ensuring a spotless and sanitized environment. Whether it's daily upkeep or deep cleaning, our services contribute to a healthier and more pleasant atmosphere for both patients and staff. Trust us to maintain your facility's cleanliness with reliability and efficiency.",
      serviceList: [
        { title: "Healthcare", icon: healthImage },
        { title: "Hotels & Restaurants", icon: hotelImage },
        { title: "Resorts", icon: resortImage },
        { title: "Home/Office", icon: officeImage },
      ],
      backgroundImage: isMobile
        ? housekeepingMobileHeroImage
        : housekeepingHeroImage,
      features: {
        "fas fa-cogs": "Skilled",
        "fas fa-hand-sparkles": "Adhere to Hygiene",
        "fas fa-user-shield": "Avoid Invading Personal Space",
      },
    },
    {
      id: 2,
      title: "Security Services",
      description:
        "Our top-tier security services are designed to provide a safe and secure environment for your healthcare facility. With highly trained security personnel, we offer 24/7 surveillance, access control, and emergency response. We prioritize patient and staff safety by implementing customized security plans that align with your facility's needs. Our team ensures the protection of both property and personnel while maintaining a welcoming atmosphere. Rely on our expert security services to safeguard your healthcare environment with professionalism and discretion.",
      serviceList: [
        { title: "Healthcare", icon: healthImage },
        { title: "Hotels & Restaurants", icon: hotelImage },
        { title: "Resorts", icon: resortImage },
        { title: "Malls", icon: shoppingImage },
        { title: "Shop", icon: shopImage },
        { title: "Home/Office", icon: officeImage },
        { title: "Factory", icon: factoryImage },
        { title: "Construction Building", icon: buildingImage },
      ],
      backgroundImage: isMobile ? securityMobileHeroImage : securityHeroImage,
      features: {
        "fas fa-cogs": "Tailored Security Solutions",
        "fas fa-headset": "24/7 Emergency Assistance",
        "fas fa-tools": "Advanced Equipment",
      },
    },
    {
      id: 3,
      title: "Pest Control Services",
      description:
        "Our professional pest control services ensure a hygienic and pest-free environment for your healthcare facility. We use safe, effective treatments to eliminate common pests while prioritizing the health and safety of patients and staff. Our team is trained in handling sensitive environments, offering discreet and timely pest management solutions. Whether it's for routine inspections or emergency treatments, we tailor our services to meet your needs. Trust us to maintain a clean and pest-free healthcare setting with our reliable, eco-friendly pest control services.",
      serviceList: [
        { title: "Healthcare", icon: healthImage },
        { title: "Hotels & Restaurants", icon: hotelImage },
        { title: "Resorts", icon: resortImage },
        { title: "Malls", icon: shoppingImage },
        { title: "Shop", icon: shopImage },
        { title: "Home/Office", icon: officeImage },
        { title: "Factory", icon: factoryImage },
        { title: "Construction Building", icon: buildingImage },
      ],
      backgroundImage: isMobile ? pestMobileHeroImage : pestHeroImage,
      features: {
        "fas fa-bug": "Ant Control",
        "fas fa-bed": "Bed Bug Removal",
        "fas fa-paw": "Rodent Control",
        "fas fa-paw": "Rats Control",
      },
    },
    {
      id: 4,
      title: "Linen & Laundry Services",
      description:
        "Our linen and laundry services offer reliable, high-quality solutions for healthcare facilities. We provide clean, sanitized linens, including bed sheets, towels, and patient gowns, ensuring a hygienic environment for both patients and staff. Using advanced cleaning methods and eco-friendly detergents, we guarantee the highest standards of cleanliness and fabric care. Our flexible services cater to your facility's needs, offering timely deliveries and pick-ups. Trust us to handle your linen with care, providing fresh, sterile, and well-maintained laundry for a safe and comfortable healthcare experience.",
      serviceList: [
        { title: "Healthcare", icon: healthImage },
        { title: "Hotels & Restaurants", icon: hotelImage },
        { title: "Resorts", icon: resortImage },
        { title: "Factory", icon: factoryImage },
      ],
      backgroundImage: isMobile ? lanudryMobileHeroImage : lanudryHeroImage,
      features: {
        "fas fa-cogs": "Systematic Process",
        "fas fa-sync-alt": "Multiple Disinfections",
        "fas fa-shield-alt": "Safe & Secure Chemical usage",
      },
    },
    {
      id: 5,
      title: "Bio Medical Waste",
      description:
        "Our biomedical waste management services ensure safe, compliant disposal of medical waste, protecting both patients and the environment. We follow strict guidelines and regulations to handle, segregate, and dispose of hazardous materials such as sharps, used medical equipment, and contaminated items. Our team provides secure, efficient collection and transportation of waste, ensuring proper treatment and disposal. With a focus on safety and environmental responsibility, we help healthcare facilities maintain a clean, risk-free environment. Trust us to manage your biomedical waste with professionalism and adherence to regulatory standards.",
      serviceList: [
        { title: "Healthcare", icon: healthImage },
        { title: "Hotels & Restaurants", icon: hotelImage },
        { title: "Resorts", icon: resortImage },
        { title: "Malls", icon: shoppingImage },
        { title: "Shop", icon: shopImage },
        { title: "Home/Office", icon: officeImage },
        { title: "Factory", icon: factoryImage },
        { title: "Construction Building", icon: buildingImage },
      ],
      backgroundImage: isMobile
        ? bioMedicalMobileHeroImage
        : bioMedicalHeroImage,
      features: {
        "fas fa-trash-alt": "Waste Collection",
        "fas fa-biohazard": "Biohazard Waste",
        // "fas fa-mask": "Infection Control",
        "fas fa-recycle": "Waste Disposal",
      },
    },
    {
      id: 6,
      title: "Ward Boy (GDA) Services",
      description:
        "Our ward boy services provide essential support to healthcare facilities by ensuring smooth operations and enhancing patient care. Our trained staff assist with daily tasks such as patient mobility, delivering meals, maintaining cleanliness in patient rooms, and offering general assistance to healthcare teams. With a focus on compassion and efficiency, our ward boys contribute to a comfortable and well-organized environment for patients and staff. Rely on our dedicated professionals to provide reliable support, allowing your medical team to focus on delivering top-quality healthcare.",
      serviceList: [{ title: "Healthcare", icon: healthImage }],
      backgroundImage: isMobile ? wardboyMobileHeroImage : wardboyHeroImage,
      features: {
        "fas fa-user-tie": "Skilled",
        "fas fa-hand-sparkles": "Adhere to Hygiene",
        "fas fa-users-slash": "Avoid Invading Personal Space",
      },
    },
  ];

  const service = serviceData.find((s) => s.id === parseInt(serviceId));

  if (!service) {
    return <p>Service not found</p>;
  }

  const serviceList = [
    { title: "Healthcare", icon: healthImage },
    { title: "Hotels & Restaurants", icon: hotelImage },
    { title: "Resorts", icon: resortImage },
    { title: "Malls", icon: shoppingImage },
    { title: "Shop", icon: shopImage },
    { title: "Home/Office", icon: officeImage },
    { title: "Factory", icon: factoryImage },
    { title: "Construction Building", icon: buildingImage },
  ];

  return (
    <div className="service-page-container">
      <div
        className="service-page-image"
        style={{
          backgroundImage: `url(${service.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="service-page-content">
        <h1>About Service</h1>
        <p>{service.description}</p>
      </div>
      <div className="about-us-content">
        <h2>{service.title.replace(" Services", "")} Features</h2>
        <div className="values-list">
          {Object.entries(service.features).map(
            ([iconClass, description], index) => (
              <div key={index} className="value-item">
                <div className="value-icon">
                  <i className={iconClass}></i>
                </div>
                <h3>{description}</h3>
              </div>
            )
          )}
        </div>
      </div>
      <SectorsSection list={serviceList} />
      <CTAButton />
      {service.title === "House Keeping Services" && (
        <div className="second-image-div">
          <img
            src={
              isMobile
                ? housekeepingSecondMobileHeroImage
                : housekeepingSecondImage
            }
            alt=""
            className="second-image"
          />
        </div>
      )}
    </div>
  );
};

export default ServicePage;
