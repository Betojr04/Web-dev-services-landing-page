import React from "react";
import PropTypes from "prop-types";
import Project from "../pages/Project";
import "../../styles/projectsGrid.css";

const ProjectsGrid = ({ projects }) => (
  <div className="projects-grid">
    {projects.map((project) => (
      <Project key={project.title} project={project} />
    ))}
  </div>
);

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectsGrid;
