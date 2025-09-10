import React, { useLayoutEffect, useRef } from "react";

const StackPill = ({ name }) => {
  return (
    <div className="bg-lightBlue text-center rounded-xl px-1 py-0.5">
      {name}
    </div>
  );
};

export default StackPill;
