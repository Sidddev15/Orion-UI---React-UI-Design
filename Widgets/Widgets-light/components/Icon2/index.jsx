import React from "react";
import "./Icon2.css";

function Icon2(props) {
  const { className } = props;

  return (
    <div className={`icon-12-1 ${className || ""}`}>
      <div className="icon-13"></div>
    </div>
  );
}

export default Icon2;
