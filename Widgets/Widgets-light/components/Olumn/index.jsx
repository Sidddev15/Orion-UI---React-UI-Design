import React from "react";
import "./Olumn.css";

function Olumn(props) {
  const { className } = props;

  return (
    <div className={`olumn-2 ${className || ""}`}>
      <div className="overlap-group-5">
        <div className="background-3"></div>
        <div className="progress-4"></div>
      </div>
    </div>
  );
}

export default Olumn;
