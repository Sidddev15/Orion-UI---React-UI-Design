import React from "react";
import "./Icon.css";

function Icon(props) {
  const { src, className } = props;

  return (
    <div className={`icon-2 ${className || ""}`}>
      <img className="favorite" src={src} alt="Favorite" />
    </div>
  );
}

export default Icon;
