import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { PersonalData } from "../../data/personal/PersonalData";
import StackPill from "./StackPill";
import { div, p } from "framer-motion/client";

const PersonalCard = (name) => {
  const buttonRef = useRef(null);
  const data = PersonalData.find((company) => company.company === name.name);
  console.log(data);
  return (
    <div className="md:bg-primary rounded-xl w-sm md:w-96">
      <div className="p-3">
        <h2 className="text-xl font-bold text-center mb-2">
          {data.company} | {data.content.sector}
        </h2>
        <div className="bg-lightBlue p-4 rounded-xl">
          <span className="whitespace-pre-line italic text-white">
            "{data.content.comment}"
          </span>
          <br />
          <br />
          <p className="text-white text-right font-bold mb-2">
            Fukuda Kaleb Dan
          </p>

          <div className="flex justify-center flex-wrap">
            {data.content.stacks.data.map((stack, i) => (
              <div className="mx-1 h-5 w-5 p-1">
                <img className="" src={stack}></img>
              </div>
            ))}
            {data.content.stacks.backend.map((stack, i) => (
              <div className="mx-1 h-5 w-5 p-1">
                <img className="" src={stack}></img>
              </div>
            ))}
            {data.content.stacks.frontEnd.map((stack, i) => (
              <div className="mx-1  h-5 w-5">
                <img className="" src={stack}></img>
              </div>
            ))}
            {data.content.stacks.others.map((stack, i) => (
              <div className="mx-1 h-5 w-5 p-1">
                <img className="" src={stack}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
