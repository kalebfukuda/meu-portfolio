import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Country from "../assets/images/country.svg?react";

import Airplane from "../assets/images/airplane.svg?react";

import HistoryCard from "./cards/HistoryCard";

gsap.registerPlugin(ScrollTrigger);

const HistorySection = () => {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    gsap.set(["#gr_country"], {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
    });

    gsap.set(
      [
        "#sp",
        "#gr_unesp",
        "#gr_geo",
        "#gr_sinqia",
        "#divAirplane",
        "#gr_br",
        "#gr_jp",
        "#gr_electrician",
        "#gr_lewagon",
      ],
      {
        opacity: 0,
        transformOrigin: "center center",
      }
    );

    gsap.set(
      [
        "#historyUnesp",
        "#historyGeologistica",
        "#historySinqia",
        "#historyElectrician",
        "#historyLewagon",
      ],
      {
        display: "none",
        opacity: 0,
      }
    );

    gsap.fromTo(
      "#hat_string",
      { rotation: -20 },
      {
        rotation: 20, // swing angle
        transformOrigin: "top center", // pivot point
        duration: 1.5,
        ease: "sine.inOut", // smooth easing
        yoyo: true,
        repeat: -1, // infinite loop
      }
    );

    gsap.fromTo(
      "#hat_string",
      { rotation: -20 },
      {
        rotation: 20, // swing angle
        transformOrigin: "top center", // pivot point
        duration: 1.5,
        ease: "sine.inOut", // smooth easing
        yoyo: true,
        repeat: -1, // infinite loop
      }
    );

    gsap.fromTo(
      ["#l_1", "#l_2", "#l_3", "#l_4", "#l_5"],
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.4, // delay between each line
        repeat: -1, // loop forever
        repeatDelay: 0.5,
      }
    );

    gsap.fromTo(
      ["#shine"],
      { opacity: 0, scale: 0.2, transformOrigin: "center center" },
      {
        opacity: 0.5,
        duration: 1,
        scale: 0.8,
        yoyo: true,
        ease: "power2.out",
        repeat: -1, // loop forever
        repeatDelay: 0.5,
      }
    );

    const tl = gsap.timeline();

    tl.to("#gr_br", {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power5.out",
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
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
      // Appears UNESP
      .fromTo(
        "#gr_unesp",
        { y: -100 },
        {
          y: 0,
          opacity: 1,
        },
        ">"
      )
      .fromTo(
        "#historyUnesp",
        { display: "none", opacity: 0 },
        { display: "block", opacity: 1, ease: "power5.out" },
        "<"
      )
      .to("#gr_unesp", { opacity: 0 }, ">+=1.5")
      .fromTo(
        "#historyUnesp",
        { display: "block", opacity: 1 },
        { display: "none", opacity: 0 },
        "<"
      )
      // Appears geologistica
      .fromTo(
        "#gr_geo",
        { y: -100 },
        {
          y: 0,
          opacity: 1,
        },
        ">"
      )
      .fromTo(
        "#historyGeologistica",
        { display: "none", opacity: 0 },
        { display: "block", opacity: 1, ease: "power5.out" },
        "<"
      )
      .to("#gr_geo", { opacity: 0 }, ">+=1.5")
      .fromTo(
        "#historyGeologistica",
        { display: "block", opacity: 1 },
        { display: "none", opacity: 0 },
        "<"
      )
      // Appears Sinqia
      .fromTo(
        "#gr_sinqia",
        { y: -100 },
        {
          y: 0,
          opacity: 1,
        },
        ">"
      )
      .fromTo(
        "#historySinqia",
        { display: "none", opacity: 0 },
        { display: "block", opacity: 1, ease: "power5.out" },
        "<"
      )
      .to("#gr_sinqia", { opacity: 0 }, ">+=1.5")
      .fromTo(
        "#historySinqia",
        { display: "block", opacity: 1 },
        { display: "none", opacity: 0 },
        "<"
      )
      .to(
        "#gr_br",
        {
          y: -500,
          opacity: 0,
          scale: 0.5,
          ease: "power5.out",
          duration: 4,
        },
        ">+=1.5"
      )
      // Appears Airplane
      .fromTo(
        "#divAirplane",
        { y: 50, x: 50, scale: 0.2, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1.2,
          ease: "power5.out",
          duration: 4,
        },
        "<-=1"
      )
      .fromTo(
        "#divAirplane",
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1.2,
        },
        {
          opacity: 0,
          x: 20,
          scale: 0.2,
          duration: 4,
          ease: "power5.in",
        },
        ">+=2"
      )
      .fromTo(
        "#gr_jp",
        { opacity: 0, y: 500, scale: 0.5 },
        { opacity: 1, ease: "power5.out", y: 0, duration: 2, scale: 1 },
        "<+=1"
      )
      // Appears Electrician
      .fromTo(
        "#gr_electrician",
        { y: -100 },
        {
          y: 0,
          opacity: 1,
        },
        ">"
      )
      .fromTo(
        "#historyElectrician",
        { display: "none", opacity: 0 },
        { display: "block", opacity: 1, ease: "power5.out" },
        "<"
      )
      .to("#gr_electrician", { opacity: 0 }, ">+=1.5")
      .fromTo(
        "#historyElectrician",
        { display: "block", opacity: 1 },
        { display: "none", opacity: 0 },
        "<"
      )
      // Appears Le Wagon
      .fromTo(
        "#gr_lewagon",
        { y: -100 },
        {
          y: 0,
          opacity: 1,
        },
        ">"
      )
      .fromTo(
        "#historyLewagon",
        { display: "none", opacity: 0 },
        { display: "block", opacity: 1, ease: "power5.out" },
        "<"
      )
      .to("#gr_lewagon", { opacity: 0 }, ">+=1.5")
      .fromTo(
        "#historyLewagon",
        { display: "block", opacity: 1 },
        { display: "none", opacity: 0 },
        "<"
      );

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
          <div id="divBr">
            <Country
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            ></Country>
          </div>
          <div id="divAirplane" style={{ position: "absolute", top: "20%" }}>
            <Airplane
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            ></Airplane>
          </div>
          <div className="mt-4 md:mt-0">
            <HistoryCard
              id={"historyUnesp"}
              name={"Universidade Estadual Paulista"}
            ></HistoryCard>
            <HistoryCard
              id={"historyGeologistica"}
              name={"Geologistica"}
            ></HistoryCard>
            <HistoryCard
              id={"historySinqia"}
              name={"Sinqia (Evertec Brasil)"}
            ></HistoryCard>
            <HistoryCard
              id={"historyElectrician"}
              name={"Self employee"}
            ></HistoryCard>
            <HistoryCard
              id={"historyLewagon"}
              name={"Le Wagon Tokyo"}
            ></HistoryCard>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default HistorySection;
