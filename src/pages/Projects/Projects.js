import React from "react";
import project1 from "../../assets/project1.PNG";
import project2 from "../../assets/project2.PNG";
import project3 from "../../assets/project3.PNG";
import "./Projects.css"

const Projects = () => {
  return (
    <div className="px-20">
      <div className="text-3xl text-center capitalize font-semibold my-16">
        latest featured projects
      </div>
      <div className="container mx-auto my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">

        <a className="col cursor-pointer" href="https://assignment-10-21db1.web.app/" target="_blank">
            <img src={project1} alt="project1" className="rounded-lg" />
            <div class="desc">
              <span className="text-lg uppercase">Courseella</span>
            </div>
          </a>

          <a className="col cursor-pointer" href="https://doctors-portal-6abcb.web.app/" target="_blank">
            <img src={project2} alt="project1" className="rounded-lg" />
            <div class="desc">
              <span className="text-lg uppercase">Doctors Portal</span>
            </div>
          </a>

        <a className="col cursor-pointer" href="https://proshoot-assignment-11.web.app/" target="_blank">
            <img src={project3} alt="project1" className="rounded-lg" />
            <div class="desc">
              <span className="text-lg uppercase">ProShoot</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
