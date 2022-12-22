import React, { useState } from "react";
import person from "../../assets/personal.JPG";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import { FaCloudDownloadAlt } from "react-icons/fa";
import ScrollTrigger from "react-scroll-trigger/types";

const Banner = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <section
      id="home"
      className="hero min-h-screen pt-16 lg:pt-12 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row justify-center">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-cubic"
          data-aos-duration="400"
          className="text-center lg:text-left">
          <h5 className="text-xl uppercase font-serif">Hi! I'm</h5>
          <h1 className="my-6 text-2xl md:text-5xl font-semibold text-secondary">
            <ScrollTrigger
              onEnter={() => setCountOn(true)}
              onExit={() => setCountOn(false)}>
              {countOn && (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Rubayed Ahmed")
                      .pauseFor(300)
                      .deleteAll()
                      .typeString("Web Developer")
                      .start();
                  }}
                />
              )}
            </ScrollTrigger>
          </h1>
          <p class="text-gray-500 max-w-2xl mx-auto lg:mr-12">
            This planet is wider and more widespread than I am, but I only have
            one expertise to offer. Most of my life has been spent working as a
            web developer. I am the developer of your dream, who will enhance
            the expansion of your ambition. Welcome to my universe, and thank
            you for looking at my website.
          </p>
          <a
            href="resume.pdf"
            download="resume.pdf"
            className="btn text-white border-0 font-semibold linear-btn mt-6"
          >
            <span className="text-xl mr-2">
              <FaCloudDownloadAlt />
            </span>
            Resume
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-cubic"
          data-aos-duration="1000"
          className=" w-full max-w-xl justify-self-end mt-6 lg:mt-0"
        >
          <div className="avatar">
            <div className="w-full rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={person} alt="myPhoto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
