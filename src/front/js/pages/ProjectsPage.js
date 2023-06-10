import React from "react";
import Projects from "../component/Projects.js";
import projectData from "../component/projectData.js";

const ProjectsPage = () => {
  return (
    <div className="container">
      <h2>My Projects</h2>
      {projectData.length ? (
        <Projects projects={projectData} />
      ) : (
        <p>No projects found. Please check back later!</p>
      )}
    </div>
  );
};

export default ProjectsPage;
