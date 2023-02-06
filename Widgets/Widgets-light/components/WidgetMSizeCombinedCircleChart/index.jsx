import React from "react";
import Percent from "../Percent";
import Info from "../Info";
import "./WidgetMSizeCombinedCircleChart.css";

function WidgetMSizeCombinedCircleChart(props) {
  const { icon } = props;

  return (
    <div className="widget-m-size-combined-circle-chart">
      <div className="overlap-group-16">
        <div className="chart_bg-4"></div>
        <div className="progress-9"></div>
        <div className="progress-9"></div>
        <div className="progress-9"></div>
        <Percent />
        <div className="icon-3" style={{ backgroundImage: `url(${icon})` }}></div>
      </div>
      <Info />
    </div>
  );
}

export default WidgetMSizeCombinedCircleChart;
