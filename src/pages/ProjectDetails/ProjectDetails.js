import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ProjectDetails = () => {
  const data = useLoaderData();
  const { title, features, technologies } = data.details[0];
  console.log(data)

  return (
    <div>
      <Header />
      <div className="container my-32 px-6 lg:px-16">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-12">
          <h3 className="text-2xl">Application Features</h3>
          <hr className="my-6"/>
          {features?.map((feature) => (
            <li className="ml-6">{feature}</li>
          ))}
        </p>

        <p className="mt-12">
          <h3 className="text-2xl">Technology Used</h3>
          <hr className="my-6"/>
          {technologies?.map((tech) => (
            <li className="ml-6 capitalize">{tech}</li>
          ))}
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default ProjectDetails;
