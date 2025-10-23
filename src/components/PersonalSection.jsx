import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimeLine from "./TimeLine";
gsap.registerPlugin(ScrollTrigger);

const PersonalSection = () => {
  return (
    <section className="personal-section section md:min-h-screen p-2 md:p-6">
      <TimeLine />
    </section>
  );
};

export default PersonalSection;
