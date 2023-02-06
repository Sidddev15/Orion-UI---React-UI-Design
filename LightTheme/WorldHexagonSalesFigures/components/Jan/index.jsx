import React from "react";
import "./Jan.css";

function Jan(props) {
  const { spanText, className } = props;

  return (
    <div className={`jan ${className || ""}`}>
      <img className="shape-4" src="/img/shape-8@2x.png" alt="Shape" />
      <div className="name-7 poppins-light-astronaut-16px">
        <span className="span-4 poppins-light-astronaut-16px">{spanText}</span>
      </div>
    </div>
  );
}

export default Jan;
