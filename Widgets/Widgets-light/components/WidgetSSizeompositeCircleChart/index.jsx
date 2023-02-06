import React from "react";
import Percent from "../Percent";
import "./WidgetSSizeompositeCircleChart.css";

function WidgetSSizeompositeCircleChart(props) {
  const { icon } = props;

  return (
    <div className="widget-s-size-omposite-circle-chart">
      <div className="overlap-group7">
        <div className="chart_bg-6"></div>
        <div className="progress-11"></div>
        <div className="progress-11"></div>
        <div className="progress-11"></div>
        <Percent />
        <div className="icon-5" style={{ backgroundImage: `url(${icon})` }}></div>
      </div>
    </div>
  );
}

export default WidgetSSizeompositeCircleChart;
