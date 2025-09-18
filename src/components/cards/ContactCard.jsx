import React, { useLayoutEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

const ContactCard = () => {
  return (
    <div className="bg-primary rounded-xl w-screen md:w-60">
      <div className="p-3">
        <div className="md:grid grid-cols-2">
          <div className="flex flex-col items-center">
            <img
              src="https://media.licdn.com/dms/image/v2/C4E03AQFursxY2mG0IQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1599596863575?e=1761177600&v=beta&t=EAHBbXIeU8o3Or1lAGRvOp1OU-stu3rnZ3x91Uy-uu0"
              alt=""
              className="rounded-full h-15 w-15 mb-2"
            />
            <p className="text-xs">Full-stack Developer</p>
            <h2 className="text-xl font-bold">Fukuda Kaleb Dan</h2>
          </div>
          <div className="flex justify-center text-center md:text-start items-center h-20">
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
      {/* <Spline
        scene="https://prod.spline.design/4hg4IQsTJpKXUTkH/scene.splinecode"
        className="w-lg"
      /> */}
    </div>
  );
};

export default ContactCard;
