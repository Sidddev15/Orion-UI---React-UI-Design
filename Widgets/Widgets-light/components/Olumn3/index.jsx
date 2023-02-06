import React from "react";
import "./Olumn3.css";

function Olumn3(props) {
  const { className } = props;

  return (
    <div className={`olumn-7 ${className || ""}`}>
      <div className="overlap-group-7">
        <div className="background-5"></div>
        <div className="progress-6"></div>
      </div>
    </div>
  );
}

export default Olumn3;
