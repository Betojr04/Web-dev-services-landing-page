import React from "react";

import projectData from "../component/projectData.js";
import ProjectsGrid from "../component/ProjectsGrid.js";
import Projects from "../component/Projects.js";

const ProjectsPage = () => {
  return (
    <div className="container">
      <h2>My Projects</h2>
      {projectData.length ? (
        <ProjectsGrid projects={projectData} />
      ) : (
        <p>No projects found. Please check back later!</p>
      )}
    </div>
  );
};

export default ProjectsPage;
