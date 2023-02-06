import React from "react";
import "./Jan2.css";

function Jan2(props) {
  const { spanText, className } = props;

  return (
    <div className={`jan ${className || ""}`}>
      <img className="shape-4" src="/img/shape-15@2x.png" alt="Shape" />
      <div className="name-6 poppins-light-astronaut-16px">
        <span className="span-12 poppins-light-astronaut-16px">{spanText}</span>
      </div>
    </div>
  );
}

export default Jan2;
