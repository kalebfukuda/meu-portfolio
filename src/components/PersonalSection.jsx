import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimeLine from "./TimeLine";
gsap.registerPlugin(ScrollTrigger);

const PersonalSection = () => {
  return (
    <section className="personal-section section md:h-screen">
      <TimeLine />
    </section>
  );
};

export default PersonalSection;
