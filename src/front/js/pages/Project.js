import React from "react";
import PropTypes from "prop-types";
import "../../styles/project.css";

const Project = ({ project }) => {
  const { title, description, technologies, repoLink, image } = project;

  return (
    <a
      href={repoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <div className="project-description">{description}</div>
        <p>Technologies used: {technologies.join(", ")}</p>
      </div>
    </a>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    repoLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
