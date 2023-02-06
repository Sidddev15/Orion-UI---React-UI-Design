import React from "react";
import Row52 from "../Row52";
import "./WidgetLSizeCompoundCircularChart.css";

function WidgetLSizeCompoundCircularChart(props) {
  const {
    spanText1,
    icon1,
    spanText2,
    spanText3,
    spanText4,
    progress,
    icon2,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    row51Props,
    row52Props,
    row53Props,
  } = props;

  return (
    <div className="widget-l-size-compound-circular-chart">
      <div className="title-13 poppins-semi-bold-astronaut-22px">
        <span className="poppins-semi-bold-astronaut-22px">{spanText1}</span>
      </div>
      <div className="overlap-group1-4 roboto-normal-astronaut-12px">
        <div className="overlap-group-17">
          <div className="bg-1"></div>
          <div className="icon-6" style={{ backgroundImage: `url(${icon1})` }}></div>
          <div className="amount-6 poppins-medium-astronaut-48px">
            <span className="poppins-medium-astronaut-48px">{spanText2}</span>
          </div>
          <div className="progress-12 roboto-bold-comet-10px">
            <span className="roboto-bold-comet-10px">{spanText3}</span>
          </div>
          <div className="text-5 poppins-semi-bold-astronaut-22px">
            <span className="poppins-semi-bold-astronaut-22px">{spanText4}</span>
          </div>
          <img className="progress-13" src={progress} alt="Progress" />
          <div className="overlap-group-item"></div>
          <div className="overlap-group-item"></div>
          <div className="overlap-group-item-1"></div>
          <div className="overlap-group-item-1"></div>
          <div className="overlap-group-item-2"></div>
          <div className="overlap-group-item-2"></div>
          <div className="overlap-group-item-3"></div>
          <div className="overlap-group-item-3"></div>
        </div>
        <div className="icon-7"></div>
        <div className="icon-8"></div>
        <div className="icon-9"></div>
        <div className="icon-10"></div>
        <img className="icon-11" src={icon2} alt="Icon" />
        <div className="name-14">
          <span className="roboto-normal-astronaut-12px">{spanText5}</span>
        </div>
        <div className="name-15">
          <span className="roboto-normal-astronaut-12px">{spanText6}</span>
        </div>
        <div className="name-16">
          <span className="roboto-normal-astronaut-12px">{spanText7}</span>
        </div>
        <div className="name-17">
          <span className="roboto-normal-astronaut-12px">{spanText8}</span>
        </div>
        <div className="name-18">
          <span className="roboto-normal-astronaut-12px">{spanText9}</span>
        </div>
        <div className="amount-7">
          <span className="roboto-normal-astronaut-12px">{spanText10}</span>
        </div>
        <div className="amount-8">
          <span className="roboto-normal-astronaut-12px">{spanText11}</span>
        </div>
        <div className="amount-9">
          <span className="roboto-normal-astronaut-12px">{spanText12}</span>
        </div>
        <div className="amount-10">
          <span className="roboto-normal-astronaut-12px">{spanText13}</span>
        </div>
        <div className="amount-11">
          <span className="roboto-normal-astronaut-12px">{spanText14}</span>
        </div>
      </div>
      <div className="table-1">
        <Row52
          spanText1={row51Props.spanText1}
          spanText2={row51Props.spanText2}
          spanText3={row51Props.spanText3}
          progressProps={row51Props.progressProps}
        />
        <Row52
          spanText1={row52Props.spanText1}
          spanText2={row52Props.spanText2}
          spanText3={row52Props.spanText3}
          className={row52Props.className}
          progressProps={row52Props.progressProps}
        />
        <Row52
          spanText1={row53Props.spanText1}
          spanText2={row53Props.spanText2}
          spanText3={row53Props.spanText3}
          className={row53Props.className}
          progressProps={row53Props.progressProps}
        />
      </div>
    </div>
  );
}

export default WidgetLSizeCompoundCircularChart;
