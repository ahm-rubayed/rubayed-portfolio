import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { _id, img, project_name, technology, live } = project;
  console.log(project)

  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl justify-self-center">
        <figure>
          <img src={img} alt="projects" className="cursor-pointer " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center block mb-4">{project_name}</h2>
          <div className="card-actions justify-center">
            <div className="flex gap-2 justify-center items-center flex-wrap">{technology?.map(tech => 
            <h3 className="capitalize text-secondary bg-secondary bg-opacity-10 rounded px-2 py-1">{tech}</h3>)}</div>
            <Link to={`/projects/${_id}`}
              className="linear-btn text-white mt-6 px-6 py-2 
              rounded-full capitalize">
              Details
            </Link>
            <a href={live} className="linear-btn text-white mt-6 px-6 py-2 
              rounded-full capitalize" target="_blank"  rel="noreferrer">Visit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
