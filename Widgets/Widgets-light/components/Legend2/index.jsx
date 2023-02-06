import React from "react";
import "./Legend2.css";

function Legend2(props) {
  const { children, className } = props;

  return (
    <div className={`legend-1 ${className || ""}`}>
      <div className="shape-3"></div>
      <div className="marketing-sales roboto-normal-gravel-16-1px">
        <span className="span-11 roboto-normal-gravel-16-1px">{children}</span>
      </div>
    </div>
  );
}

export default Legend2;
