import React from "react";
import bannerImg from "../assets/images/banner_port.jpg";
import { motion } from "framer-motion";
import BannerImage from "../components/spline/BannerImage";

const Banner = () => {
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      const next = e.currentTarget.nextElementSibling;
      if (next) next.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.section
      onWheel={handleWheel}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full h-screen bg-primary 
        grid grid-cols-1 md:grid-cols-2 p-2
        items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-rows-2 text-white justify-center h-full">
          <div className="flex items-center">
            <motion.p
              className="text-8xl font-bold"
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              HELLO, <br />
              I'M <span className="text-accent">KALEB</span>
            </motion.p>
          </div>
          <div className="flex flex-col justify-center">
            <motion.p
              className="text-4xl font-bold text-bermuda"
              initial={{ opacity: 0, x: -200 }} // estado 0: invisível e abaixo
              animate={{ opacity: 1, x: 0 }} // estado final: visível e no centro
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              A FULL-STACK DEVELOPER
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h1>Something</h1>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Banner;
