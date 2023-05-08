import React from "react";
import PropTypes from "prop-types";
import "../../styles/project.css";

const Project = ({ project }) => {
  const { title, description, technologies, repoLink } = project;

  return (
    <div className="projects-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Technologies used: {technologies.join(", ")}</p>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    repoLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
