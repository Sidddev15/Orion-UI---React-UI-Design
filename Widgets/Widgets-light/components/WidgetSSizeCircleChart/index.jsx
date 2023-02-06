import React from "react";
import Percent from "../Percent";
import "./WidgetSSizeCircleChart.css";

function WidgetSSizeCircleChart(props) {
  const { icon } = props;

  return (
    <div className="widget-s-size-circle-chart">
      <div className="overlap-group8">
        <div className="chart_bg-5"></div>
        <div className="progress-10"></div>
        <Percent />
        <div className="icon-4" style={{ backgroundImage: `url(${icon})` }}></div>
      </div>
    </div>
  );
}

export default WidgetSSizeCircleChart;
