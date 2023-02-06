import React from "react";
import Info from "../Info";
import "./WidgetMSizeBigCircleChart2.css";

function WidgetMSizeBigCircleChart2(props) {
  const { infoProps } = props;

  return (
    <div className="widget-m-size-big-circle-chart-1">
      <div className="overlap-group-1">
        <div className="percent-1 poppins-light-mirage-24px">
          <span className="poppins-light-mirage-24px">6</span>
          <span className="poppins-light-mirage-24px">7</span>
          <span className="span-7 poppins-light-mirage-24px">%</span>
        </div>
        <div className="overlap-group-item-1"></div>
        <div className="overlap-group-item-1"></div>
      </div>
      <Info spanText1={infoProps.spanText1} spanText2={infoProps.spanText2} />
    </div>
  );
}

export default WidgetMSizeBigCircleChart2;
