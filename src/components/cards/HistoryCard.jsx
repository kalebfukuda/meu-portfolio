import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { PersonalData } from "../../data/personal/PersonalData";
import StackPill from "./StackPill";
import { div, p } from "framer-motion/client";
import "./HistoryCard.css";
import Hat from "../../assets/images/hat.svg?react";

const HistoryCard = (name) => {
  const buttonRef = useRef(null);
  const data = PersonalData.find((company) => company.company === name.name);
  console.log(data);
  return (
    <div className="historyCard rounded-xl w-sm md:w-96 relative">
      <Hat className="absolute" style={{ right: "0", top: "-50px" }}></Hat>

      <div className="p-3">
        <h2 className="text-xl font-bold text-start mb-2">{data.company}</h2>
        <span>{data.content.sector}</span>
        <br />
      </div>
    </div>
  );
};

export default HistoryCard;
