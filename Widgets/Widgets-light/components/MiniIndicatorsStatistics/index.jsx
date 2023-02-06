import React from "react";
import Chart from "../Chart";
import "./MiniIndicatorsStatistics.css";

function MiniIndicatorsStatistics(props) {
  const { pie, spanText1, spanText2, chartProps } = props;

  return (
    <div className="mini-indicators-statistics">
      <div className="overlap-group11-1">
        <img className="pie" src={pie} alt="Pie" />
      </div>
      <div className="indicator-3">
        <div className="overlap-group-3">
          <div className="value-7 valign-text-middle poppins-semi-bold-astronaut-22px">
            <span>
              <span className="poppins-semi-bold-astronaut-22px">{spanText1}</span>
            </span>
          </div>
          <div className="title-5 valign-text-middle poppins-light-astronaut-16px">
            <span>
              <span className="poppins-light-astronaut-16px">{spanText2}</span>
            </span>
          </div>
        </div>
        <Chart
          olumn22Props={chartProps.olumn22Props}
          olumn32Props={chartProps.olumn32Props}
          olumn33Props={chartProps.olumn33Props}
          olumn23Props={chartProps.olumn23Props}
          olumn2Props={chartProps.olumn2Props}
        />
      </div>
    </div>
  );
}

export default MiniIndicatorsStatistics;
