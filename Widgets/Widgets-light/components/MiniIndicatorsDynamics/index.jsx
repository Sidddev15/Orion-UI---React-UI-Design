import React from "react";
import Icon from "../Icon";
import "./MiniIndicatorsDynamics.css";

function MiniIndicatorsDynamics(props) {
  const { spanText1, chart, spanText2, spanText3, iconProps } = props;

  return (
    <div className="mini-indicators-dynamics">
      <Icon src={iconProps.src} />
      <div className="overlap-group11">
        <div className="indicator-1 valign-text-middle roboto-normal-comet-14px">
          <span>
            <span className="roboto-normal-comet-14px">{spanText1}</span>
          </span>
        </div>
        <img className="chart-2" src={chart} alt="Chart" />
        <div className="value-4 valign-text-middle poppins-semi-bold-astronaut-22px">
          <span>
            <span className="poppins-semi-bold-astronaut-22px">{spanText2}</span>
          </span>
        </div>
        <div className="title-3 valign-text-middle poppins-light-astronaut-16px">
          <span>
            <span className="poppins-light-astronaut-16px">{spanText3}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MiniIndicatorsDynamics;
