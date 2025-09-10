import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { PersonalData } from "../../data/personal/PersonalData";

const PersonalCard = (name) => {
  const buttonRef = useRef(null);
  const data = PersonalData.find((company) => company.company === name.name);
  console.log(data);
  return (
    <div className="bg-primary rounded-xl w-96">
      <div className="p-3">
        <h2 className="text-xl font-bold text-center mb-2">{data.company}</h2>
        <h2 className="text-xm text-center mb-2">{data.content.sector}</h2>
        <div className="bg-lightBlue p-4 rounded-xl">
          <span className="whitespace-pre-line italic text-black">
            "{data.content.comment}"
          </span>
          <br />
          <br />
          <p className="text-black text-right font-bold">Fukuda Kaleb Dan</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
