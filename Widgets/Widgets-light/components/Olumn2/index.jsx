import React from "react";
import "./Olumn2.css";

function Olumn2(props) {
  const { className } = props;

  return (
    <div className={`olumn-4 ${className || ""}`}>
      <div className="overlap-group-6">
        <div className="background-4"></div>
        <div className="progress-5"></div>
      </div>
    </div>
  );
}

export default Olumn2;
