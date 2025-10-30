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
  const boxRef = useRef(null);
  const companyRef = useRef(null);
  const divIconRef = useRef(null);
  const divPeriodRef = useRef(null);
  const sectorRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState("");

  const data = PersonalData.find((company) => company.company === name);
  console.log(data);

  const toggleExpand = (text) => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.4 },
    });

    setContent(text);
    if (!isExpanded) {
      // expandir
      tl.to(boxRef.current, {
        height: "auto", // anima até a altura natural
        duration: 0.5,
        ease: "power2.out",
        y: -100,
        position: "absolute",
      })
        .to(divPeriodRef.current, { opacity: 0 }, "<")
        .to(sectorRef.current, { opacity: 0 }, "<")
        .to(
          companyRef.current,
          { y: -60, scale: 0.8, transformOrigin: "center left" },
          "<"
        )
        .to(divIconRef.current, { y: -100 }, "<");
    } else {
      // recolher
      tl.to(boxRef.current, {
        height: 35,
        duration: 0.4,
        ease: "power2.inOut",
        y: 0,
        position: "relative",
        onComplete: () => setContent(""),
      })
        .to(divPeriodRef.current, { opacity: 1 }, "<")
        .to(sectorRef.current, { opacity: 1 }, "<")
        .to(companyRef.current, { y: 0, scale: 1 }, "<")
        .to(divIconRef.current, { y: 0 }, "<");
    }
    setIsExpanded(!isExpanded);
  };

  useLayoutEffect(() => {
    gsap.set(boxRef.current, {
      height: 35,
      overflow: "hidden",
      padding: 0,
    });
  }, []);

  const moreClick = (text) => {
    toggleExpand(text);
  };

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

      <div className="p-3 h-auto">
        <div
          ref={divPeriodRef}
          className="d-flex items-center justify-between mb-2 "
        >
          <span className="text-lg font-semibold text-stone-400 ">
            {data.period}
          </span>
        </div>
        <h2 ref={companyRef} className="text-xl font-bold text-start mb-2 ">
          {data.company}
        </h2>
        <span ref={sectorRef}>{data.content.sector}</span>
        <br />
        <br />
        <div ref={divIconRef} className="flex gap-2">
          <FontAwesomeIcon
            onClick={() => moreClick(data.content.description)}
            icon={faCircleInfo}
            style={{ color: "#ffffff" }}
          />
          <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon
            onClick={() => moreClick(data.content.comment)}
            icon={faComment}
            style={{ color: "#ffffff" }}
          />
        </div>
      </div>

      <div
        ref={boxRef}
        className="w-100% h-5 div-bottom rounded-lg flex justify-center items-center gap-2 p-2"
      >
        <p className="p-2 text-center text-white">{content}</p>
      </div>
    </div>
  );
};

export default HistoryCard;
