import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ProjectCard = ({
  title,
  listImages,
  order,
  description,
  url,
  github,
}) => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".image", containerRef.current);
      gsap.to(images, {
        x: `-=${containerRef.current.scrollWidth / 2}`,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="grid md:grid-cols-2 md:gap-2 mb-2 bg-primary rounded-xl w-xs md:w-80 xs:place-items-center">
      <div
        ref={containerRef}
        className={`flex md:gap-2 overflow-hidden h-48 items-center bg-black rounded-xl ${
          order === "1" ? "md:order-none" : "md:order-1"
        }`}
      >
        {[...listImages, ...listImages].map((element, index) => {
          return (
            <div
              key={`${title}${index}`}
              className="image flex-shrink-0 sm:h-20 md:h-48 flex items-center justify-center"
            >
              <img
                src={element}
                alt="1"
                className="w-sm md:w-full md:h-full object-contain"
              />
            </div>
          );
        })}
      </div>

      <div className="py-3 px-2">
        <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
        <p className="text-lg text-center mb-4">{description}</p>
        <div className="flex justify-center gap-2">
          {url && url.trim() !== "" && (
            <a
              ref={buttonRef}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center 
              h-5 bg-lightBlue
              rounded-full cursor-pointer overflow-hidden
              no-underline text-black"
              style={{ width: 40 }}
            >
              {isOpen ? (
                <span className="px-3 truncate">{url}</span>
              ) : (
                <i className="fa-solid fa-link text-black"></i>
              )}
            </a>
          )}
          {github && github.trim() !== "" && (
            <a
              ref={buttonRef}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center 
              h-5 bg-lightBlue
              rounded-full cursor-pointer overflow-hidden
              no-underline text-black"
              style={{ width: 40 }}
            >
              {isOpen ? (
                <span className="px-3 truncate">{github}</span>
              ) : (
                <i className="fa-brands fa-github text-black"></i>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
