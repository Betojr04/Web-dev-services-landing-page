import React from "react";
import Projects from "../component/Projects.js";
import projectData from "../component/projectData.js";

const ProjectsPage = () => {
  return (
    <div className="container">
      <h2>My Projects</h2>
      <Projects projects={projectData} />
    </div>
  );
};

export default ProjectsPage;
