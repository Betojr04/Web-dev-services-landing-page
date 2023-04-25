import React from "react";
import "../../styles/contactme.css";

const ContactMe = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Please fill out the form below to get in touch with me.</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" />

        <label htmlFor="email">
          email from which you are sending me an email
        </label>
        <input type="email" id="email" placeholder="Your Email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your Message"></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
