import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Teste = ({ title, listImages, order, description }) => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".image", containerRef.current);
      gsap.to(images, {
        x: "-=800",
        duration: 15,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);

    gsap.to(buttonRef.current, {
      width: isOpen ? 40 : "100%", // 40px = ícone, 200px = tamanho expandido
      duration: 0.5,
      ease: "elastic.out(1, 1)",
    });
  };

  return (
    <div className="grid grid-cols-2 gap-2 bg-primary rounded-xl w-96">
      <div
        ref={containerRef}
        className={`flex gap-2 overflow-hidden w-full h-32 items-center ${
          order === "1" ? "order-none" : "order-1"
        }`}
      >
        {listImages.map((element, index) => {
          return (
            <div
              key={`${title}${index}`}
              className="image flex-shrink-0 w-32 h-32 flex items-center justify-center"
            >
              <img
                src={element}
                alt="1"
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>

      <div className="py-3 px-1">
        <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
        <p className="text-lg text-center">{description}</p>
        {url && url.trim() !== "" && (
          <div
            ref={buttonRef}
            onClick={handleClick}
            className="flex items-center justify-center h-5 bg-lightBlue text-black rounded-full cursor-pointer overflow-hidden"
            style={{ width: 40 }}
          >
            {isOpen ? (
              <span className="px-3 truncate">{url}</span>
            ) : (
              <i className="fa-solid fa-link"></i>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Teste;
