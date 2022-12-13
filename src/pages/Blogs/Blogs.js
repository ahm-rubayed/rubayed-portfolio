import React from "react";
import Typewriter from "typewriter-effect";

const Blogs = () => {
  return (
    <section id="blogs" className="relative my-16">
      <h3 className="text-xl md:text-3xl text-center capitalize font-semibold ">
        Blogs
      </h3>
      <div className="mt-12 text-center">
        {/* <h3 className="text-xl md:text-2xl text-secondary uppercase font-bold">Coming Soon</h3> */}
        <h3 className="text-xl md:text-2xl text-secondary uppercase font-bold">
        <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Coming Soon")

                    .pauseFor(300)
                    .deleteAll()
                    .typeString("Coming Soon")
                    .start();
                }}
              />
        </h3>
      </div>
    </section>
  );
};

export default Blogs;
