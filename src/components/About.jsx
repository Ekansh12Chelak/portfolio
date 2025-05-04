import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="slideIn">About Me</h2>
      <p className="slideIn" style={{ animationDelay: "0.2s" }}>
        I began my journey as a Mechanical Engineering graduate, driven by
        curiosity and a love for technology. Today, I work as a Software
        Engineer Analyst at Accenture, turning ideas into impactful digital
        products using React.js, Redux, and modern frontend ecosystems.
      </p>
      <p className="slideIn" style={{ animationDelay: "0.4s" }}>
        I’ve led performance optimization efforts, contributed to reusable
        architecture patterns, and mentored junior developers across teams.
        Recognized with the <strong>Respect for Individual Award</strong>, I
        value collaboration, quality, and delivering solutions that create real
        client impact.
      </p>
    </section>
  );
};

export default About;
