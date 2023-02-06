import React from "react";
import Progress from "../Progress";
import "./Row52.css";

function Row52(props) {
  const { spanText1, spanText2, spanText3, className, progressProps } = props;

  return (
    <div className={`table-1-item-1 ${className || ""}`}>
      <div className="row-1 poppins-light-astronaut-16px">
        <div className="name-19">
          <span className="span-22 poppins-light-astronaut-16px">{spanText1}</span>
        </div>
        <div className="amount-12">
          <span className="span-22 poppins-light-astronaut-16px">{spanText2}</span>
        </div>
        <div className="summary-2">
          <span className="span-22 poppins-light-astronaut-16px">{spanText3}</span>
        </div>
        <Progress className={progressProps.className} />
      </div>
    </div>
  );
}

export default Row52;
