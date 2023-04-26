import React from "react";
import "../../styles/contactme.css";

const ContactMe = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Please fill out the form below to get in touch with me.</p>
      <form className="contact-form">
        <label htmlFor="name">
          Name <span className="required">*</span>
        </label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label htmlFor="email">
          Email <span className="required">*</span>
        </label>
        <input type="email" id="email" placeholder="Your Email" required />

        <label htmlFor="message">
          Message <span className="required">*</span>
        </label>
        <textarea id="message" placeholder="Your Message" required></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
