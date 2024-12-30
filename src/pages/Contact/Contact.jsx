import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactPage = () => {
  // company name, spokesperson name, phone number, email id, message
  const [formData, setFormData] = useState({
    companyName: '',
    spokespersonName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.companyName ||
      !formData.spokespersonName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.message
    ) {
      setStatus('Please fill out all fields.');
      return;
    }

    try {
      const templateParams = {
        company_name: formData.companyName,
        spokesperson_name: formData.spokespersonName,
        phone_number: formData.phoneNumber,
        from_email: formData.email,
        message: formData.message,
      };

      // Send the form data to EmailJS
      const response = await emailjs.send(
        'service_ajvdd1e',
        'template_p8db5rh',
        templateParams,
        'm3X1hUk1pHMz7lvT-'
      );

      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({
          companyName: '',
          spokespersonName: '',
          phoneNumber: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div>
    <h2 style={{padding:"20px"}}>Contact Us</h2>
    <div className="contact-page">
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="spokespersonName">Representative Name</label>
            <input
              type="text"
              id="spokespersonName"
              name="spokespersonName"
              value={formData.spokespersonName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
      <div className="map-container">
        <iframe
          className="mapIframe"
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14254.213367079234!2d88.3826951!3d26.72671275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e446c1ebc21f35%3A0x270789e76274b8da!2sMatigara%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1735197753922!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          referrerpolicy="no-referrer-when-downgrade"
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
