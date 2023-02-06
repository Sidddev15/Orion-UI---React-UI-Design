import React from "react";
import "./Row2.css";

function Row2(props) {
  const { spanText1, spanText2, spanText3, status, className } = props;

  return (
    <div className={`table-indicator-table-item-1 ${className || ""}`}>
      <div className="summary">
        <div className="name-12 roboto-normal-astronaut-14px">
          <span className="span-19 roboto-normal-astronaut-14px">{spanText1}</span>
        </div>
        <div className="amount-4 roboto-normal-blue-bell-14px">
          <span className="span-19 roboto-normal-blue-bell-14px">{spanText2}</span>
        </div>
        <div className="summary-1 roboto-normal-astronaut-14px">
          <span className="span-19 roboto-normal-astronaut-14px">{spanText3}</span>
        </div>
      </div>
      <img className="status" src={status} alt="Status" />
    </div>
  );
}

export default Row2;
