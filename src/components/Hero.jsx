import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content fadeIn">
        <h1 className="hero-title">Frontend Developer</h1>
        <p className="hero-specialization">Specializing in React.js</p>
        <p className="hero-subtitle">
          I'm Ekansh Kumar Chelak, a Software Engineer Analyst at Accenture,
          experienced in building high-performance web applications using
          React.js, Redux, and modern frontend tools. I focus on clean
          architecture, reusability, and performance optimization to deliver
          seamless digital experiences.
        </p>
        <p className="hero-subtitle">
          Recognized with <strong>3× Sparkling Star Awards</strong> for
          excellence in development and exceeding client expectations. Committed
          to delivering scalable, user-centric solutions that drive measurable
          business value.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="hero-cta fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <FaEnvelope className="inline mr-2" /> Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
