import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectsInList = projects.map((project) => {
    return <ProjectItem key={project.id} name={project.name} technologies={project.technologies}></ProjectItem>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsInList}</div>
    </div>
  );
}

export default ProjectList;
