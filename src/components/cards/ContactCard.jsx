import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ContactCard = () => {
  return (
    <div className="bg-primary rounded-xl w-s md:w-64">
      <div className="p-2">
        <div className="grid md:grid-cols-2 p-2 md:gap-2">
          <div className="grid place-items-center">
            <img
              src="src\assets\profile\me.jpeg"
              alt=""
              className="rounded-full h-15 w-15 mb-2"
            />
            <p className="text-xs">Full-stack Developer</p>
            <h2 className="text-xl font-bold">Fukuda Kaleb Dan</h2>
          </div>
          <div className="flex justify-center items-center h-20">
            <div className="flex flex-col space-y-2">
              <p className="text-greener">
                <i className="fa-solid fa-envelope"></i> kalebfukudajp@gmail.com
              </p>
              <a href="https://github.com/kalebfukuda" target="_blank">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kaleb-dan-fukuda/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i> Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
