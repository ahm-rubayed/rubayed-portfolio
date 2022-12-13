import React from "react";
import project1 from "../../assets/project1.PNG";
import project2 from "../../assets/doctors.png";
import project3 from "../../assets/proshoot.png";
import "./Projects.css";

const Projects = () => {
  // function onMouseEnter(e) {
  //   let imageRoot = e.target;
  //   let totalScrollHeight = imageRoot.scrollHeight;
  //   let boxHeight = imageRoot.parentElement.offsetHeight;
  //   imageRoot.style.transform = `translateY(${
  //     totalScrollHeight - boxHeight
  //   }px)`;
  // }

  // function onMouseLeave(e) {
  //   let imageRoot = e.target;
  //   imageRoot.style.transform = `translateY(0)`;
  // }

  return (
    <section id="projects" className="my-16 px-6 lg:px-12">
      <div>
        <h3 className="text-xl md:text-3xl text-center capitalize font-semibold my-12 md:my-16">
          Latest featured projects
        </h3>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl justify-self-center ">
              <figure className="bg-top hover:bg-bottom">
                <img
                  src={project1}
                  alt="Shoes"
                  className="bg-top hover:bg-bottom cursor-pointer "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center block">Courseella</h2>
                <div className="card-actions justify-end">
                  <button className="btn linear-bg border-0 text-white font-normal mt-6 rounded-full capitalize btn-md">
                    Details
                  </button>
                </div>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl justify-self-center h-96">
              <figure className="transition-all transform ease-in duration-300">
                <img
                  // onMouseEnter={onMouseEnter}
                  // onMouseLeave={onMouseLeave}
                  src={project2}
                  alt="Shoes"
                  className="bg-top"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center block">
                  Doctores Portal
                </h2>
                <div className="card-actions justify-end">
                  <button className="btn linear-bg border-0 text-white font-normal mt-6 rounded-full capitalize btn-md">
                    Details
                  </button>
                </div>
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl justify-self-center h-96 bg-top">
              <figure>
                <img src={project3} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center block">ProShoot</h2>
                <div className="card-actions justify-end">
                  <button className="btn linear-bg border-0 text-white font-normal mt-6 rounded-full capitalize btn-md">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
