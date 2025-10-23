import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Fuji from "../assets/images/mt_fuji.svg?react";

gsap.registerPlugin(ScrollTrigger);

const BannerSection = () => {
  const sectionRef = useRef(null);
  const fujiRef = useRef(null);

  useLayoutEffect(() => {
    //SET start state
    gsap.set(
      ["#fuji", "#back_circle", "#cloud_0", "#cloud_1", "#cloud_2", "#cloud_3"],
      { opacity: 0, y: 0, transformOrigin: "center center" }
    );
    gsap.set("#top", { opacity: 0, transformOrigin: "center center" });
    gsap.set(["#text", "#KALEB", "#mist"], { opacity: 0 });
    gsap.set("#back_circle", {
      transformOrigin: "center center",
      opacity: 0,
      y: 200,
    });

    const tl = gsap.timeline();

    tl.to("#fuji", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power5.out",
      y: 0,
    })
      .to("#top", { opacity: 1, duration: 0.5, ease: "power3.out" })
      .to("#cloud_0", { opacity: 1, duration: 0.5, ease: "power1.out", y: 0 })
      .to("#cloud_1", { opacity: 1, duration: 0.5, ease: "power1.out", y: 0 })
      .to("#cloud_2", { opacity: 1, duration: 0.5, ease: "power1.out", y: 0 })
      .to("#cloud_3", { opacity: 1, duration: 0.5, ease: "power1.out", y: 0 });

    // Timeline de scroll
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom+=1500 top",
        scrub: 1,
        pin: true,
        pinSpacer: true,
        markers: false,
      },
    });

    scrollTl
      .fromTo(
        ["#fuji", "#cloud_0", "#cloud_1", "#cloud_2", "#cloud_3"],
        {
          scale: 1,
          y: 0,
        },
        {
          scale: 0.8,
          ease: "power5.out",
          duration: 4,
          y: 80,
        }
      )
      .fromTo(
        "#mist",
        {
          y: 0,
        },
        {
          opacity: 1,
          duration: 3,
          ease: "power5.out",
          scale: 1.0,
          y: 100,
        },
        "<1"
      )
      .to(
        ["#back_circle", "#text", "#KALEB"],
        {
          opacity: 1,
          scale: 1,
          duration: 4,
          ease: "power4.in",
        },
        ">"
      );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="sectionBanner"
      ref={sectionRef}
      className="banner-bg flex flex-col justify-end items-center h-screen relative text-center align-start"
    >
      <div id="fuji_wrapper" className="relative w-full h-screen">
        <Fuji className="w-full h-full" preserveAspectRatio="xMidYMid slice" />
      </div>
    </section>
  );
};

export default BannerSection;
