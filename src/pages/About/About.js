import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./About.css";

const About = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <section id="about" className="mt-16 mb-20 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="1300"
            className="order-last lg:order-none flex-shrink-0 w-full mx-auto max-w-xl justify-self-end  mt-6 lg:mt-0"
          >
            <div className="avatar justify-center">
              <div
                className="w-3/4 rounded-full ring ring-secondary ring-offset-base-100 
              ring-offset-2"
              >
                <img src="https://i.ibb.co/VwsJVcZ/person2.jpg" alt="myPhoto" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="1300"
            className="mt-8 lg:mt-0 text-center lg:text-left"
          >
            <h3 className="text-2xl md:text-3xl capitalize font-semibold">
              About me
            </h3>
            <h3 className="text-lg lg:text-xl font-serif my-6 uppercase">
              Why You hire me?
            </h3>
            <p className="text-dark text-xl">
              <span className="font-bold">Hi I'm Rubayed Ahmed.</span> A
              passionate web developer from Bangladesh. I worked various
              projects with modern technologies using javascript, reactjs,
              nodejs etc. Most of the time i would like to desing fancy
              websites. I prefer to keep learning, and try to upgrade my skills.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <div className="border p-6 rounded-lg linear-bg text-center">
                <ScrollTrigger
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  <div>
                    <h1 className="text-3xl">
                      {countOn && (
                        <CountUp
                          start={0}
                          end={100}
                          duration={2}
                          delay={0}
                        ></CountUp>
                      )}
                      %
                      <br />{" "}
                      <span className="text-lg capitalize">Success Rate</span>
                    </h1>
                  </div>
                </ScrollTrigger>
              </div>
              <div className="border p-6 rounded-lg linear-bg text-center">
                <ScrollTrigger
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  <div>
                    <h1 className="text-3xl">
                      {countOn && (
                        <CountUp
                          start={0}
                          end={1000}
                          duration={2}
                          delay={0}
                        ></CountUp>
                      )}
                      + <br />{" "}
                      <span className="text-lg capitalize">Hours of work</span>
                    </h1>
                  </div>
                </ScrollTrigger>
              </div>
              <div className="border p-6 rounded-lg linear-bg text-center">
                <ScrollTrigger
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  <div>
                    <h1 className="text-3xl">
                      {countOn && (
                        <CountUp
                          start={0}
                          end={350}
                          duration={2}
                          delay={0}
                        ></CountUp>
                      )}
                      + <br />{" "}
                      <span className="text-lg capitalize">Happy Clients</span>
                    </h1>
                  </div>
                </ScrollTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
