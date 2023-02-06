import React from "react";
import Legend2 from "../Legend2";
import Jan2 from "../Jan2";
import Mar2 from "../Mar2";
import Data from "../Data";
import "./WidgetLSizeGlobalStatistic2.css";

function WidgetLSizeGlobalStatistic2(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    shape2,
    spanText9,
    shape3,
    spanText10,
    shape4,
    spanText11,
    shape5,
    spanText12,
    legend21Props,
    legend22Props,
    legend23Props,
    legend24Props,
    jan21Props,
    mar21Props,
    jan22Props,
    jan23Props,
    mar22Props,
    mar23Props,
    mar24Props,
  } = props;

  return (
    <div className="widget-l-size-global-statistic">
      <header className="header">
        <div className="title-9 poppins-semi-bold-mirage-18-4px">
          <span className="poppins-semi-bold-mirage-18-4px">{spanText1}</span>
        </div>
        <Legend2>{legend21Props.children}</Legend2>
        <Legend2 className={legend22Props.className}>{legend22Props.children}</Legend2>
        <Legend2 className={legend23Props.className}>{legend23Props.children}</Legend2>
        <Legend2 className={legend24Props.className}>{legend24Props.children}</Legend2>
      </header>
      <div className="overlap-group6">
        <div className="chart-11">
          <div className="y-axis poppins-light-astronaut-16px">
            <div className="x1k">
              <span className="poppins-light-astronaut-16px">{spanText2}</span>
            </div>
            <div className="number-2">
              <span className="poppins-light-astronaut-16px">{spanText3}</span>
            </div>
            <div className="number-2">
              <span className="poppins-light-astronaut-16px">{spanText4}</span>
            </div>
            <div className="number-2">
              <span className="poppins-light-astronaut-16px">{spanText5}</span>
            </div>
            <div className="number-2">
              <span className="poppins-light-astronaut-16px">{spanText6}</span>
            </div>
            <div className="number-3">
              <span className="poppins-light-astronaut-16px">{spanText7}</span>
            </div>
          </div>
          <div className="x-axis">
            <Jan2 spanText={jan21Props.spanText} />
            <div className="x-axis-item">
              <img className="shape-1" src="/img/shape-15@2x.png" alt="Shape" />
              <div className="name-1 poppins-light-astronaut-16px">
                <span className="poppins-light-astronaut-16px">{spanText8}</span>
              </div>
            </div>
            <Mar2 spanText={mar21Props.spanText} />
            <Jan2 spanText={jan22Props.spanText} className={jan22Props.className} />
            <div className="may">
              <img className="shape-2" src={shape2} alt="Shape" />
              <div className="name-2 poppins-light-astronaut-16px">
                <span className="poppins-light-astronaut-16px">{spanText9}</span>
              </div>
            </div>
            <Jan2 spanText={jan23Props.spanText} className={jan23Props.className} />
            <div className="jul">
              <img className="shape" src={shape3} alt="Shape" />
              <div className="name-3 poppins-light-astronaut-16px">
                <span className="poppins-light-astronaut-16px">{spanText10}</span>
              </div>
            </div>
            <Mar2 spanText={mar22Props.spanText} className={mar22Props.className} />
            <div className="x-axis-item">
              <img className="shape" src={shape4} alt="Shape" />
              <div className="name-4 poppins-light-astronaut-16px">
                <span className="poppins-light-astronaut-16px">{spanText11}</span>
              </div>
            </div>
            <div className="oct">
              <img className="shape" src={shape5} alt="Shape" />
              <div className="name-5 poppins-light-astronaut-16px">
                <span className="poppins-light-astronaut-16px">{spanText12}</span>
              </div>
            </div>
            <Mar2 spanText={mar23Props.spanText} className={mar23Props.className} />
            <Mar2 spanText={mar24Props.spanText} className={mar24Props.className} />
          </div>
        </div>
        <Data />
      </div>
    </div>
  );
}

export default WidgetLSizeGlobalStatistic2;
