import React from "react";
import Info from "../Info";
import "./WidgetMSizeBigCircleChart.css";

function WidgetMSizeBigCircleChart(props) {
  const { infoProps } = props;

  return (
    <div className="widget-m-size-big-circle-chart">
      <div className="overlap-group">
        <div className="percent poppins-light-mirage-24px">
          <span className="poppins-light-mirage-24px">27</span>
          <span className="span-4 poppins-light-mirage-24px">%</span>
        </div>
        <div className="overlap-group-item"></div>
        <div className="overlap-group-item"></div>
      </div>
      <Info spanText1={infoProps.spanText1} spanText2={infoProps.spanText2} />
    </div>
  );
}

export default WidgetMSizeBigCircleChart;
