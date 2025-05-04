import React from "react";

const achievementsData = [
  "Microsoft Azure Fundamentals (AZ-900) Certification",
  "Sparkling Star Award (3x) for exceptional development, client focus, and strong skills in React.js and JavaScript",
  "Respect for Individual Award for proficient skills, prompt delivery, and commitment to progress",
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="slideIn">Certifications & Achievements</h2>
      <ul className="achievements-list">
        {achievementsData.map((achievement, index) => (
          <li
            key={achievement}
            className="slideUp"
            style={{ animationDelay: `${0.2 * index}s` }}
          >
            {achievement}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
