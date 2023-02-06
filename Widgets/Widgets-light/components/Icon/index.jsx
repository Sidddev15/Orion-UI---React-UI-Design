import React from "react";
import "./Icon.css";

function Icon(props) {
  const { src } = props;

  return (
    <div className="icon">
      <img className="icon-eye" src={src} alt="icon-eye" />
    </div>
  );
}

export default Icon;
