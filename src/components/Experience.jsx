import React from "react";
import { experienceData } from "../constants/experience";

const Experience = () => {
  const calculateExperience = () => {
    const startDate = new Date(2022, 1);
    const currentDate = new Date();
    const diffInMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    return `${years} year${years !== 1 ? "s" : ""} and ${months} month${
      months !== 1 ? "s" : ""
    }`;
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="slideIn">Work Experience</h2>
      <p
        className="total-experience slideIn"
        style={{ animationDelay: "0.2s" }}
      >
        Total: {calculateExperience()}
      </p>
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
