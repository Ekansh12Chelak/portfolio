import React from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="slideIn">Contact Me</h2>
      <p className="slideIn" style={{ animationDelay: "0.2s" }}>
        Excited to collaborate on innovative projects! Reach out via email,
        LinkedIn, or WhatsApp.
      </p>
      <div className="contact-links">
        <a
          href="mailto:ekanshx17x@gmail.com"
          className="contact-button slideUp"
        >
          <FaEnvelope className="inline mr-2" /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/ekansh-kumar-chelak-293843218/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button slideUp"
          style={{ animationDelay: "0.2s" }}
        >
          <FaLinkedin className="inline mr-2" /> LinkedIn
        </a>
        <a
          href="https://wa.me/919340142331"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button slideUp"
          style={{ animationDelay: "0.4s" }}
        >
          <FaWhatsapp className="inline mr-2" /> WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
