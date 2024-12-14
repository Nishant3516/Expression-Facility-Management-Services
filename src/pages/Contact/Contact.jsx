import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
