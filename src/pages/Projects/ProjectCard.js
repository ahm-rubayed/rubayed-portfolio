import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { img, project_name, technologies } = project;
  console.log(project)

  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl justify-self-center ">
        <figure>
          <img src={img} alt="Shoes" className="cursor-pointer " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center block">{project_name}</h2>
          <div className="card-actions justify-end">
            <Link to="/projectDetails"
              className="btn linear-btn border-0 text-white font-normal mt-6 
              rounded-full capitalize btn-md">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
