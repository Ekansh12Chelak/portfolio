import React from "react";
import { skillsData } from "../constants/skills";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="slideIn">Technical Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div
            key={skill.name}
            className="skill slideUp"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
