import React from "react";
import person from "../../assets/personal.JPG";
import "./Banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="hero min-h-screen pt-16 lg:pt-8">
      <div className="container">
      <div className="hero-content max-w-full flex-col lg:flex-row justify-center">
        <div className="text-center lg:text-left">
          <h5 className="text-xl uppercase font-serif">Hi! I'm</h5>
          <h1 className="my-6 text-5xl font-semibold text-secondary">
            {" "}
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
            className="btn text-white border-0 font-semibold linear-bg mt-6">
            Resume
          </a>
        </div>
        <div className="flex-shrink-0 w-full max-w-xl justify-self-end  mt-12 lg:mt-0">
          <div className="avatar">
            <div className="w-full rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src='https://ibb.co/99K7DB0' alt="myPhoto" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
