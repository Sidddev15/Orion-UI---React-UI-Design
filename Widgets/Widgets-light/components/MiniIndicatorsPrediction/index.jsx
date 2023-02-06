import React from "react";
import "./MiniIndicatorsPrediction.css";

function MiniIndicatorsPrediction(props) {
  const { chart1, spanText1, spanText2, spanText3, chart2, predict } = props;

  return (
    <div className="mini-indicators-prediction">
      <div className="overlap-group1-1">
        <img className="chart-9" src={chart1} alt="Chart" />
      </div>
      <div className="overlap-group14">
        <div className="value-9 valign-text-middle poppins-semi-bold-astronaut-22px">
          <span>
            <span className="poppins-semi-bold-astronaut-22px">{spanText1}</span>
          </span>
        </div>
        <div className="title-7 valign-text-middle poppins-light-astronaut-16px">
          <span>
            <span className="poppins-light-astronaut-16px">{spanText2}</span>
          </span>
        </div>
        <div className="overlap-group-9">
          <div className="gradient"></div>
          <div className="percent valign-text-middle roboto-normal-comet-14px">
            <span>
              <span className="roboto-normal-comet-14px">{spanText3}</span>
            </span>
          </div>
          <img className="chart-10" src={chart2} alt="Chart" />
          <img className="predict" src={predict} alt="Predict" />
          <img className="oval" src="/img/oval-1@2x.png" alt="Oval" />
        </div>
      </div>
    </div>
  );
}

export default MiniIndicatorsPrediction;
