import React from "react";
import PropTypes from "prop-types";
import Project from "./Project";

const Projects = ({ projects }) => (
  <div className="projects-container">
    {projects.map((project, index) => (
      <Project key={index} project={project} />
    ))}
  </div>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      repoLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Projects;
