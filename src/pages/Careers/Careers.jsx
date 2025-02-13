import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Career.css";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      coverLetter: formData.coverLetter,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Application submitted successfully!");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        alert("Failed to send application. Please try again.");
      });
  };

  return (
    <div className="career-page">
      <section className="career-content">
        <h1>Join Our Team</h1>
        <p>
          We are always looking for talented individuals to join our team.
          Explore our open positions and take the next step in your career.
        </p>
      </section>

      <section className="application-form">
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label>Resume:</label>
            <input type="file" name="resume" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Cover Letter:</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              placeholder="Write a brief cover letter..."
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default CareerPage;
