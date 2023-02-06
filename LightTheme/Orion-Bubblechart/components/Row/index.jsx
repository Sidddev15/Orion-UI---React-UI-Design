import React from "react";
import "./Row.css";

function Row(props) {
  const { spanText1, spanText2, chart } = props;

  return (
    <div className="table-item roboto-normal-astronaut-14px">
      <div className="name-4">
        <span className="roboto-normal-astronaut-14px">{spanText1}</span>
      </div>
      <div className="amount-2">
        <span className="roboto-normal-astronaut-14px">{spanText2}</span>
      </div>
      <div className="overlap-group-3">
        <div className="column-4"></div>
        <div className="column-5"></div>
        <div className="column-6"></div>
        <div className="column-7"></div>
        <img className="chart-1" src={chart} alt="Chart" />
      </div>
    </div>
  );
}

export default Row;
