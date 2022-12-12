import React from "react";
import person from "../../assets/person2.jpg";

const About = () => {
  return (
    <section id="about" className="my-20 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="1300"
            className="order-last lg:order-none flex-shrink-0 w-full mx-auto max-w-xl justify-self-end  mt-6 lg:mt-0"
          >
            <div className="avatar justify-center">
              <div className="w-3/4 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={person} alt="myPhoto" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="1300"
            className="mt-8 lg:mt-0 text-center lg:text-left"
          >
            <h3 className="text-xl md:text-3xl capitalize font-semibold">
              About me
            </h3>
            <h3 className="text-lg lg:text-xl font-serif my-6">WHO AM I?</h3>
            <p className="text-dark">
              <span className="font-bold">Hi I'm Rubayed Ahmed.</span> A
              passionate web developer from Bangladesh. I worked various
              projects with modern technologies using javascript, reactjs,
              nodejs etc. Most of the time i would like to desing fancy
              websites. I prefer to keep learning, and try to upgrade my skills.
            </p>
            <br />
            <p className="text-dark">

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
