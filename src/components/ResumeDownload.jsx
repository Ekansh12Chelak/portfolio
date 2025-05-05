import React from "react";
import { FaDownload } from "react-icons/fa";

const ResumeDownload = () => {
  return (
    <section id="resume" className="resume-section">
      <h2 className="slideIn">Resume</h2>
      <p className="slideIn" style={{ animationDelay: "0.2s" }}>
        Download my resume to explore my skills, experience, and achievements.
      </p>
      <a
        href="https://drive.google.com/uc?export=download&id=1hi-23fzOuMfEGFZJZIeLh54_BSQIoGoX"
        className="resume-button slideUp"
      >
        <FaDownload className="inline mr-2" /> Download Resume
      </a>
    </section>
  );
};

export default ResumeDownload;
