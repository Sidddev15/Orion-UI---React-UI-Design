import React from "react";
import "./Row7.css";

function Row7(props) {
  const { spanText1, spanText2, spanText3, status, className } = props;

  return (
    <div className={`table-3-item-1 ${className || ""}`}>
      <div className="summary-4 roboto-normal-astronaut-14px">
        <div className="name-22">
          <span className="span-29 roboto-normal-astronaut-14px">{spanText1}</span>
        </div>
        <div className="amount-16">
          <span className="span-29 roboto-normal-astronaut-14px">{spanText2}</span>
        </div>
        <div className="summary-5">
          <span className="span-29 roboto-normal-astronaut-14px">{spanText3}</span>
        </div>
      </div>
      <img className="status-1" src={status} alt="Status" />
    </div>
  );
}

export default Row7;
