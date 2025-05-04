import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content fadeIn">
        <p>&copy; 2025 Ekansh Kumar Chelak. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:ekanshx17x@gmail.com" className="footer-link">
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/ekansh-kumar-chelak-293843218/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/919340142331"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/Ekansh12Chelak"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
