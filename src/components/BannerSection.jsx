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
      ["#back_circle", "#mt", "#Cloud_0", "#Cloud_1", "#cloud_2", "#cloud_3"],
      { opacity: 0, y: 100 }
    );
    gsap.set(["#top", "#text", "#KALEB"], { opacity: 0 });
    gsap.set("#back_circle", { transformOrigin: "center center" });

    const tl = gsap.timeline();

    tl.to("#mt", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power5.out",
      y: 0,
    })
      .to("#top", { opacity: 1, duration: 0.5, ease: "power3.out" })
      .to("#Cloud_0", { opacity: 1, duration: 0.5, ease: "power1.out", y: 0 })
      .to("#Cloud_1", { opacity: 1, duration: 0.5, ease: "power1.out", y: 0 })
      .to("#cloud_2", { opacity: 1, duration: 0.5, ease: "power1.out", y: 0 })
      .to("#cloud_3", { opacity: 1, duration: 0.5, ease: "power1.out", y: 0 })
      .to(
        "#back_circle",
        {
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          y: 0,
        },
        "<1"
      );

    // Timeline de scroll
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacer: true,
        markers: false,
        onEnter: () => {
          // Move o back_circle para o final do SVG (renderiza por cima)
          const backCircle = document.querySelector("#back_circle");
          const svg = backCircle?.closest("svg");
          if (backCircle && svg) {
            svg.appendChild(backCircle);
          }
        },
      },
    });

    scrollTl.to(
      "#back_circle",
      {
        scale: 2.5,
        duration: 1,
      },
      0
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
      className="banner-bg flex flex-col justify-end items-center h-screen relative overflow-hidden text-center align-start"
    >
      <div id="fuji_wrapper" className="relative">
        <Fuji />
      </div>
    </section>
  );
};

export default BannerSection;
