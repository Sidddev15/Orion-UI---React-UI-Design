import React from "react";
import "./Icon.css";

function Icon(props) {
  const { src, className } = props;

  return (
    <div className={`icon-1 ${className || ""}`}>
      <img className="activity" src={src} alt="Activity" />
    </div>
  );
}

export default Icon;
