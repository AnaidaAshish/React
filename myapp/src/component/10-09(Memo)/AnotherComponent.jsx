import React, { memo } from "react";

const AnotherComponent = ({ counter2 }) => {
  console.log("Inside another component");
  return (
    <div>
      <h1>AnotherComponent - {counter2}</h1>
    </div>
  );
};

export default memo(AnotherComponent);