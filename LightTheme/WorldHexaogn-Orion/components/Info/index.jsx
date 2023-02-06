import React from "react";
import "./Info.css";

function Info(props) {
  const { spanText1, spanText2 } = props;

  return (
    <div className="info-8">
      <div className="amount-5 roboto-normal-astronaut-20px">
        <span className="roboto-normal-astronaut-20px">{spanText1}</span>
      </div>
      <div className="detail-2 poppins-light-astronaut-16px">
        <span className="poppins-light-astronaut-16px">{spanText2}</span>
      </div>
    </div>
  );
}

export default Info;
