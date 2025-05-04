import React from "react";
import { experienceData } from "../constants/experience";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="slideIn">Work Experience</h2>
      {experienceData.map((exp, index) => (
        <div
          key={exp.role}
          className="experience-item slideUp"
          style={{ animationDelay: `${0.2 * index}s` }}
        >
          <h3>
            {exp.role} at {exp.company}
          </h3>
          <p className="experience-date">{exp.date}</p>
          <ul className="experience-responsibilities">
            {exp.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
