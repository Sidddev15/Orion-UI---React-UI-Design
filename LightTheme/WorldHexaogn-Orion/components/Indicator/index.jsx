import React from "react";
import "./Indicator.css";

function Indicator(props) {
  const { src, className } = props;

  return (
    <div className={`indicator ${className || ""}`}>
      <img className="icon-4" src={src} alt="icon-trash" />
    </div>
  );
}

export default Indicator;
