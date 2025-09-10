import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactCard from "../components/cards/ContactCard";
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef} className="personal-section section">
      <h1 className="text-8xl font-bold text-accent">Contact</h1>
      <ContactCard />
    </section>
  );
};

export default ProjectsSection;
