import React from "react";

const projectsData = [
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a responsive personal portfolio using React.js and Vite, showcasing my expertise as a Frontend Developer. Implemented theme toggling, smooth scrolling, and pure CSS styling for a seamless user experience. Optimized for performance and accessibility across devices.",
    technologies: ["React", "Vite", "React Icons", "CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="slideIn">Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div
            key={project.title}
            className="project-card slideUp"
            style={{ animationDelay: `${0.2 * index}s` }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
