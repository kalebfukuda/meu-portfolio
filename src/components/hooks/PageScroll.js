import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scroll for going from section to section
export default function PageScroll() {
  useLayoutEffect(() => {
    const sections = document.querySelectorAll("section");

    ScrollTrigger.create({
      trigger: sections[0],
      start: "top top",
      end: () => `+=${document.body.scrollHeight}`,
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: { min: 0.2, max: 0.5 },
        ease: "power1.inOut",
      },
      markers: false,
    });
  }, []);
}
