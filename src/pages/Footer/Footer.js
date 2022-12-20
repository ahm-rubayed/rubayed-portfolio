import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
          <div className="linear-bg">
            <div className='container mx-auto py-6 flex flex-col items-center'>
            <p className='uppercase text-xl '>Find me</p>
            <ul className="flex gap-3 my-4">
                <li className='text-2xl'><a href="https://www.facebook.com/rubayed.05/" target="_blank" rel="noreferrer"><FaFacebook/></a></li>
                <li className='text-2xl'><a href="https://www.instagram.com/rubayed_ahm/" target="_blank" rel="noreferrer"><FaInstagram/></a></li>
                <li className='text-2xl'><a href="https://www.linkedin.com/in/rubayed/" target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
                <li className='text-2xl'><a href="https://github.com/ahm-rubayed" target="_blank" rel="noreferrer"><FaGithub/></a></li>
            </ul>
            <p>© Copyright | Rubayed Ahmed</p>
            </div>
          </div>
    );
};

export default Footer;