import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Fuji from "../assets/images/mt_fuji.svg?react";

gsap.registerPlugin(ScrollTrigger);

const BannerSection = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null); // ← Novo ref para o overlay

  useLayoutEffect(() => {
    //SET start state
    gsap.set(
      ["#fuji", "#back_circle", "#cloud_0", "#cloud_1", "#cloud_2", "#cloud_3"],
      { opacity: 0, y: 0, transformOrigin: "center center" }
    );
    gsap.set("#fuji", { scale: 1.2 }); // Começa em 1.2

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
      scale: 1.2,
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
        end: "bottom top",
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });

    scrollTl
      .fromTo(
        ["#fuji", "#cloud_0", "#cloud_1", "#cloud_2", "#cloud_3"],
        {
          scale: 1.2,
          y: 0,
        },
        {
          scale: 1,
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
      )
      .to(
        "#back_circle",
        {
          scale: 1.1,
          duration: 5,
          ease: "power5.out",
        },
        ">"
      )
      .to(
        "#fuji",
        {
          y: -100, // Fuji sobe devagar (mais distante)
          duration: 6,
          ease: "power2.inOut",
        },
        ">"
      )
      .to(
        "#mist",
        {
          y: -250, // Névoa sobe mais rápido (mais próxima)
          opacity: 0.3,
          duration: 6,
          ease: "power2.inOut",
        },
        "<" // Começa junto com o Fuji
      )
      .to(
        ["#back_circle", "#text", "#KALEB"],
        {
          y: -100, // Círculo e texto sobem devagar
          opacity: 0.3,
          duration: 6,
          ease: "power2.inOut",
        },
        "<" // Junto com os outros elementos
      )
      .to(
        overlayRef.current,
        {
          opacity: 1,
          duration: 4,
          ease: "power2.in",
        },
        "<2" // Começa 2 segundos antes do parallax terminar
      );
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="sectionBanner"
      ref={sectionRef}
      className="banner-bg flex flex-col justify-end items-center text-center"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <div id="fuji_wrapper" className="relative w-full h-screen">
        <Fuji className="w-full h-full" preserveAspectRatio="xMidYMid slice" />
      </div>

      {/* Overlay de escurecimento */}
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
    </section>
  );
};

export default BannerSection;
