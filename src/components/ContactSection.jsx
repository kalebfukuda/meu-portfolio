import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactCard from "../components/cards/ContactCard";
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef} className="personal-section section p-4">
      <h1 className="font-bold text-accent p-2">Contact</h1>
      <ContactCard />
    </section>
  );
};

export default ProjectsSection;
