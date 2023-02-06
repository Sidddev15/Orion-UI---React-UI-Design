import React from "react";
import Percent from "../Percent";
import Info from "../Info";
import "./WidgetMSizeCircleChart.css";

function WidgetMSizeCircleChart(props) {
  const { icon } = props;

  return (
    <div className="widget-m-size-circle-chart">
      <div className="overlap-group-15">
        <div className="chart_bg-3"></div>
        <div className="progress-8"></div>
        <Percent />
        <div className="icon-2" style={{ backgroundImage: `url(${icon})` }}></div>
      </div>
      <Info />
    </div>
  );
}

export default WidgetMSizeCircleChart;
