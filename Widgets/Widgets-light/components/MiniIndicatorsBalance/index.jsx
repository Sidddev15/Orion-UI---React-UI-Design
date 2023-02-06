import React from "react";
import Chart2 from "../Chart2";
import "./MiniIndicatorsBalance.css";

function MiniIndicatorsBalance(props) {
  const { favorite, spanText1, spanText2 } = props;

  return (
    <div className="mini-indicators-balance">
      <div className="overlap-group3">
        <img className="favorite" src={favorite} alt="Favorite" />
      </div>
      <div className="indicator-4">
        <div className="overlap-group-8">
          <div className="value-8 valign-text-middle poppins-semi-bold-astronaut-22px">
            <span>
              <span className="poppins-semi-bold-astronaut-22px">{spanText1}</span>
            </span>
          </div>
          <div className="title-6 valign-text-middle poppins-light-astronaut-16px">
            <span>
              <span className="poppins-light-astronaut-16px">{spanText2}</span>
            </span>
          </div>
        </div>
        <Chart2 />
      </div>
    </div>
  );
}

export default MiniIndicatorsBalance;
