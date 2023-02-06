import React from "react";
import "./Mar.css";

function Mar(props) {
  const { spanText, className } = props;

  return (
    <div className={`x-axis-item-1-1 ${className || ""}`}>
      <img className="shape-6" src="/img/shape-8@2x.png" alt="Shape" />
      <div className="name-8 poppins-light-astronaut-16px">
        <span className="span-5 poppins-light-astronaut-16px">{spanText}</span>
      </div>
    </div>
  );
}

export default Mar;
