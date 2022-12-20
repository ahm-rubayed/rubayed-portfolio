import React from "react";
import { Toaster } from "react-hot-toast";
import About from "../pages/About/About";
import Banner from "../pages/Banner/Banner";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";
import Projects from "../pages/Projects/Projects";

const Main = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Blogs />
      <Contact />
      <Footer/>
      <Toaster />
    </div>
  );
};

export default Main;
