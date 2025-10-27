import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Br from "../assets/images/br.svg?react";
import HistoryCard from "./cards/HistoryCard";

gsap.registerPlugin(ScrollTrigger);

const HistorySection = () => {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    gsap.set(["#br"], {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
    });

    gsap.set(["#sp", "#gr_unesp", "#gr_geo", "#gr_sinqia"], {
      opacity: 0,
      transformOrigin: "center center",
    });

    const tl = gsap.timeline();

    tl.to("#br", {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power5.out",
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });

    scrollTl
      .to(["#sp"], {
        opacity: 1,
        ease: "power5.out",
        duration: 2,
      })
      .fromTo("#gr_unesp", { y: -100 }, { y: 0, opacity: 1 });

    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const bulletClick = (company) => {
    console.log(company);
    setCompanyName(company);
    setIsOpen(true);
    gsap.fromTo(boxRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 });
  };

  return (
    <section
      id="sectionHistory"
      ref={sectionRef}
      className="flex justify-end items-center text-center"
    >
      <div id="br_wrapper" className="relative w-full h-screen">
        <div className="px-2 py-4">
          <Br
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          ></Br>
          <div className="mt-4 md:mt-0">
            <HistoryCard name={"Universidade Estadual Paulista"}></HistoryCard>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default HistorySection;
