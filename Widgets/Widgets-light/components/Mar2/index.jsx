import React from "react";
import "./Mar2.css";

function Mar2(props) {
  const { spanText, className } = props;

  return (
    <div className={`x-axis-item-1-1 ${className || ""}`}>
      <img className="shape-6" src="/img/shape-15@2x.png" alt="Shape" />
      <div className="name-7 poppins-light-astronaut-16px">
        <span className="span-13 poppins-light-astronaut-16px">{spanText}</span>
      </div>
    </div>
  );
}

export default Mar2;
