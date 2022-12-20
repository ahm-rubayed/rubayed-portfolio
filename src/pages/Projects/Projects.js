import React, { useEffect, useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, SetProjects] = useState()

  useEffect(() => {
    fetch('https://portfolio-rubayed-server.vercel.app/projects')
    .then(res => res.json())
    .then(data => SetProjects(data))
  },[])

  return (
    <section id="projects" className="my-16 px-6 lg:px-12">
      <div>
        <h3 className="text-xl md:text-3xl text-center capitalize font-semibold my-12 md:my-16">
          Latest featured projects
        </h3>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center">

            {
              projects?.map(project => <ProjectCard key={project._id} project={project} ></ProjectCard>)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
