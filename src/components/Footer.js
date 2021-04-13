import React from "react";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineCodepen,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-heading bg-white dark:bg-gray-800 w-full fixed bottom-0 xl:h-16 md:h-12 text-gray-300 flex items-center justify-between md:px-8 xl:px-12 sm:visible invisible">
      <div className="social-media-icons flex ">
        <div className="icon-primary">
          <a href="https://github.com/Chrys-Nicolaides">
            <AiFillGithub className="icon" />
          </a>
        </div>
        <div className="icon-primary">
          <a href="https://www.linkedin.com/in/chrysanthe-nicolaides-341877136/">
            <FaLinkedinIn className="icon" />
          </a>
        </div>
        <div className="icon-primary">
          <a href="https://codepen.io/Chrys-Nicolaides">
            <AiOutlineCodepen className="icon" />
          </a>
        </div>
        <div className="icon-primary">
          <a href="https://codepen.io/Chrys-Nicolaides">
            <AiOutlineDribbble className="icon" />
          </a>
        </div>
      </div>
      <div>
        <a
          className="link-primary xl:text-base md:text-sm pr-0 text-gray-500 dark:text-gray-400 border-none hover:border-none font-medium "
          href="https://www.google.com/"
        >
          nicolaides.chrysanthe@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
