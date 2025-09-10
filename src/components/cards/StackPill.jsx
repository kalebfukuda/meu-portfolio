import React, { useLayoutEffect, useRef } from "react";

const StackPill = ({ name }) => {
  return (
    <div className="bg-lightBlue text-center rounded-xl px-1 py-0.5 m-1 w-auto">
      <span className="text-xs">{name}</span>
    </div>
  );
};

export default StackPill;
