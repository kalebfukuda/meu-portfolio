import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PersonalCard from "./cards/PersonalCard";

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [companyName, setCompanyName] = useState("Geologistica");
  const boxRef = useRef(null);

  const timeLineRef = useRef(null);
  useLayoutEffect(() => {
    if (!timeLineRef.current) return;
    const q = gsap.utils.selector(timeLineRef);

    const ctx = gsap.context(() => {
      const timeLineBullets = q(".timeLineBullet");
      const contentTimeLine = q(".contentTimeline");
      const infoContent = q(".contentInfo");

      const sectionHeader = q(".sectionHeader");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timeLineRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
          markers: true,
          onLeaveBack: () => {
            setIsOpen(false);
          },
        },
      });
      tl.from(boxRef.current, {
        opacity: 0,
        y: 30,
        duration: 0,
      });
      tl.from(sectionHeader, {
        opacity: 0,
        y: 30,
        duration: 1,
      });

      // Animate bullets first
      tl.from(timeLineBullets, {
        opacity: 0,
        y: 30,
        duration: 1,
      });

      // Then animate contentTimeline
      tl.from(contentTimeLine, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
      });
    }, timeLineRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const bulletClick = (company) => {
    console.log(company);
    setCompanyName(company);
    setIsOpen(true);
    gsap.fromTo(boxRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 });
  };

  return (
    <div ref={timeLineRef}>
      <h1 className="text-8xl font-bold text-accent mb-15 text-center sectionHeader">
        A LITTLE OF MY HISTORY...
      </h1>

      <div
        ref={boxRef}
        style={{ display: isOpen ? "flex" : "none" }}
        className="flex justify-center mb-6"
      >
        <PersonalCard name={companyName} />
      </div>

      <div>
        <ol class="items-center sm:flex ">
          <li class="relative mb-4 sm:mb-0">
            <div
              class="flex items-center timeLineBullet"
              onClick={() => bulletClick("Geologistica")}
            >
              <div class="z-10 flex items-center justify-center w-3 h-3 bg-accent rounded-full shrink-0 timelineBulletPoint"></div>
              <div class="hidden sm:flex w-full bg-lightBlue h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-12 min-w-xs contentTimeline">
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February, 2018
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-location-dot"></i> São Paulo, Brazil
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-laptop"></i> Full-stack Developer
              </p>
              <a
                className="text-greener"
                target="_ref"
                href="https://www.geologistica.com.br/"
              >
                Geologistica
              </a>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div
              class="flex items-center timeLineBullet"
              onClick={() => bulletClick("Sinqia (Evertec Brasil)")}
            >
              <div class="z-10 flex items-center justify-center w-3 h-3 bg-accent rounded-full shrink-0 timelineBulletPoint"></div>
              <div class="hidden sm:flex w-full bg-lightBlue h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-12 min-w-xs contentTimeline">
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                July, 2021
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-location-dot"></i> São Paulo, Brazil
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-laptop"></i> Full-stack Developer
              </p>
              <a target="_ref" href="https://evertecinc.com/pt-br/">
                Sinqia (Evertec Brasil)
              </a>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div
              class="flex items-center timeLineBullet"
              onClick={() => bulletClick("Self employee")}
            >
              <div class="z-10 flex items-center justify-center w-3 h-3 bg-accent rounded-full shrink-0 timelineBulletPoint"></div>
              <div class="hidden sm:flex w-full bg-lightBlue h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-12 min-w-xs contentTimeline">
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August, 2023
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-location-dot"></i> Kawasaki, Japan
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-bolt"></i> Electrician
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Self employee
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div
              class="flex items-center timeLineBullet"
              onClick={() => bulletClick("Le Wagon Tokyo")}
            >
              <div class="z-10 flex items-center justify-center w-3 h-3 bg-accent rounded-full shrink-0 timelineBulletPoint"></div>
              <div class="hidden sm:flex w-full bg-lightBlue h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-12 min-w-xs contentTimeline">
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                July, 2025
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-location-dot"></i> Tokyo, Japan
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-graduation-cap"></i> AI Web Development
              </p>
              <a
                target="_ref"
                href="https://www.lewagon.com/tokyo?gad_source=1&gad_campaignid=9578090157&gbraid=0AAAAADDMI2hSBxbJxMnbNEYoWz1kyHtkJ&gclid=Cj0KCQjwoP_FBhDFARIsANPG24N2DI4l8_RFWR75x4lWr02ROQNo8VPD6P9dThPg2FOtHc05mtf3_38aAsJqEALw_wcB"
              >
                Le Wagon Tokyo
              </a>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div
              class="flex items-center timeLineBullet"
              onClick={() => bulletClick("Loading...")}
            >
              <div class="z-10 flex items-center justify-center w-3 h-3 bg-accent rounded-full shrink-0 timelineBulletPoint"></div>
              <div class="hidden sm:flex w-full bg-lightBlue h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 contentTimeline">
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                September, 2025
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-spinner fa-spin"></i> Loading...
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-spinner fa-spin"></i> Loading...
              </p>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-spinner fa-spin"></i> Loading...
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TimeLine;
