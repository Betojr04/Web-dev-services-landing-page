import React from "react";
import PropTypes from "prop-types";
import Project from "../pages/Project";
import "../../styles/projectsGrid.css";

const ProjectsGrid = ({ projects }) => {
  const projectRows = [];
  let currentRow = [];

  projects.forEach((project, index) => {
    currentRow.push(<Project key={project.title} project={project} />);

    // Create a new row after every 2 projects
    if ((index + 1) % 2 === 0 || index === projects.length - 1) {
      projectRows.push(
        <div key={index} className="projects-row">
          {currentRow}
        </div>
      );
      currentRow = [];
    }
  });

  return <div className="projects-grid">{projectRows}</div>;
};

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectsGrid;
