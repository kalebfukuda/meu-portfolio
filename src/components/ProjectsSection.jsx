import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./cards/ProjectCard";
import { ProjectsData } from "../data/projects/ProjectsData";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const q = gsap.utils.selector(sectionRef);

    const ctx = gsap.context(() => {
      const projectCards = q(".projectCard");
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
          markers: true,
        },
        opacity: 0,
        y: 0,
        duration: 1.2,
      });

      gsap.from(projectCards, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          toggleActions: "play none none reverse",
          markers: true,
        },
      });
    }, sectionRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="project-section section p-1 md:p-4">
      <h1 className="text-8xl font-bold text-accent">PROJECTS</h1>
      <div className="grid md:grid-cols-2 md:gap-2">
        {ProjectsData.map((card, index) => {
          return (
            <div className="md:p-4 projectCard">
              <ProjectCard
                key={`${card.title}_${index}`}
                title={card.title}
                stacks={card.stacks}
                order={card.order}
                listImages={card.listImages}
                description={card.description}
                url={card.url}
                github={card.github}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
