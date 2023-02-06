import React from "react";
import Icon2 from "../Icon2";
import "./Row6.css";

function Row6(props) {
  const { spanText1, spanText2, spanText3, className, icon2Props } = props;

  return (
    <div className={`table-2-item-1 roboto-normal-astronaut-12px ${className || ""}`}>
      <Icon2 className={icon2Props.className} />
      <div className="name-21">
        <span className="span-26 roboto-normal-astronaut-12px">{spanText1}</span>
      </div>
      <div className="amount-14">
        <span className="span-26 roboto-normal-astronaut-12px">{spanText2}</span>
      </div>
      <div className="summary-3">
        <span className="span-26 roboto-normal-astronaut-12px">{spanText3}</span>
      </div>
    </div>
  );
}

export default Row6;
