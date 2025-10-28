import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { PersonalData } from "../../data/personal/PersonalData";
import "./HistoryCard.css";
import Hat from "../../assets/images/hat.svg?react";
import Helmet from "../../assets/images/helmet.svg?react";
import Computer from "../../assets/images/computer.svg?react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faLayerGroup,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const HistoryCard = ({ id, name }) => {
  const buttonRef = useRef(null);
  const data = PersonalData.find((company) => company.company === name);
  console.log(data);
  return (
    <div id={id} className="historyCard rounded-xl w-sm md:w-96 relative">
      {data.icon === "Hat" && (
        <Hat
          className="absolute"
          style={{ right: "0", top: "-50px", width: "110px" }}
        ></Hat>
      )}
      {data.icon === "Helmet" && (
        <Helmet
          className="absolute"
          style={{ right: "0", top: "-50px", width: "110px" }}
        ></Helmet>
      )}
      {data.icon === "Computer" && (
        <Computer
          className="absolute"
          style={{ right: "0", top: "-80px", width: "110px" }}
        ></Computer>
      )}

      <div className="p-3">
        <div className="d-flex items-center justify-between mb-2 ">
          <span className="text-lg font-semibold text-stone-400 ">
            {data.period}
          </span>
        </div>
        <h2 className="text-xl font-bold text-start mb-2 ">{data.company}</h2>
        <span>{data.content.sector}</span>
        <br />
        <br />
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faComment} style={{ color: "#ffffff" }} />
        </div>
      </div>

      <div className="w-100% h-5 div-bottom rounded-b-lg flex justify-center items-center gap-2"></div>
    </div>
  );
};

export default HistoryCard;
