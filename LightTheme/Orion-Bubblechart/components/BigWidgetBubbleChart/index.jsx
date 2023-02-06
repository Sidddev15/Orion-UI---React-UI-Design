import React from "react";
import "./BigWidgetBubbleChart.css";

function BigWidgetBubbleChart(props) {
  const {
    bubbleChart,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
  } = props;

  return (
    <div className="big-widget-bubble-chart">
      <div className="overlap-group2-1">
        <div className="bg_lines"></div>
        <div className="bg_lines-1"></div>
        <img className="bubble-chart" src={bubbleChart} alt="Bubble chart" />
        <div className="overlap-group-4">
          <div className="time roboto-normal-hawkes-blue-14px">
            <span className="roboto-normal-hawkes-blue-14px">{spanText1}</span>
          </div>
          <div className="tittle poppins-light-white-16px">
            <span className="poppins-light-white-16px">{spanText2}</span>
          </div>
          <div className="value-3 poppins-semi-bold-white-20px">
            <span className="poppins-semi-bold-white-20px">{spanText3}</span>
          </div>
        </div>
        <div className="overlap-group1-1">
          <div className="time-1 roboto-normal-wild-blue-yonder-14px">
            <span className="roboto-normal-wild-blue-yonder-14px">{spanText4}</span>
          </div>
          <div className="value-4 poppins-semi-bold-white-20px">
            <span className="poppins-semi-bold-white-20px">{spanText5}</span>
          </div>
          <div className="title-6 poppins-light-white-16px">
            <span className="poppins-light-white-16px">{spanText6}</span>
          </div>
        </div>
        <div className="finance">
          <div className="title-7 roboto-normal-white-12px">
            <span className="roboto-normal-white-12px">{spanText7}</span>
          </div>
          <div className="value-5 poppins-light-white-16px">
            <span className="span-6">{spanText8}</span>
            <span className="poppins-light-white-16px">{spanText9}</span>
          </div>
        </div>
        <div className="business">
          <div className="title-8 roboto-normal-white-12px">
            <span className="roboto-normal-white-12px">{spanText10}</span>
          </div>
          <div className="value-6 poppins-light-white-16px">
            <span className="poppins-light-white-16px">{spanText11}</span>
          </div>
        </div>
        <div className="development">
          <div className="title-9 roboto-normal-white-12px">
            <span className="roboto-normal-white-12px">{spanText12}</span>
          </div>
          <div className="value-7 poppins-light-white-16px">
            <span className="poppins-light-white-16px">{spanText13}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigWidgetBubbleChart;
