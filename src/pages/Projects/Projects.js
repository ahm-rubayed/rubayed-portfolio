import React from "react";
import project1 from "../../assets/project1.PNG";
import project2 from "../../assets/project2.PNG";
import project3 from "../../assets/project3.PNG";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="my-16 px-6 lg:px-12">
      <div>
        <h3 className="text-xl md:text-3xl text-center capitalize font-semibold my-12 md:my-16">Latest featured projects</h3>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
            <a className="col cursor-pointer" href="https://assignment-10-21db1.web.app/"
              target="_blank" rel="noreferrer">
              <img src={project1} alt="project1" className="rounded-lg" />
              <div class="desc">
                <span className="text-lg uppercase">Courseella</span>
              </div>
            </a>

            <a
              className="col cursor-pointer"
              href="https://doctors-portal-6abcb.web.app/"
              target="_blank" rel="noreferrer">
              <img src={project2} alt="project1" className="rounded-lg" />
              <div class="desc">
                <span className="text-lg uppercase">Doctors Portal</span>
              </div>
            </a>

            <a
              className="col cursor-pointer"
              href="https://proshoot-assignment-11.web.app/"
              target="_blank" rel="noreferrer">
              <img src={project3} alt="project1" className="rounded-lg" />
              <div class="desc">
                <span className="text-lg uppercase">ProShoot</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
