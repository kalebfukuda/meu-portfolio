import React, { useLayoutEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

const ContactCard = () => {
  return (
    <div className="bg-primary rounded-xl w-sm sm:h-32 md:h-40 md:w-lg">
      <Spline
        scene="https://prod.spline.design/4hg4IQsTJpKXUTkH/scene.splinecode"
        className="w-lg"
      />
    </div>
  );
};

export default ContactCard;
