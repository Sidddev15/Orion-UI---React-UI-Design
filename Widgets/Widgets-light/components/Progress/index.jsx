import React from "react";
import "./Progress.css";

function Progress(props) {
  const { className } = props;

  return (
    <div className={`progress-14-1 ${className || ""}`}>
      <div className="overlap-group-18">
        <div className="bg-2"></div>
        <div className="chart-14"></div>
      </div>
    </div>
  );
}

export default Progress;
