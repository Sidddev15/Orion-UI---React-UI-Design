import React from "react";
import Row from "../Row";
import "./WidgetMSizeCombinedCircleChartWithD.css";

function WidgetMSizeCombinedCircleChartWithD(props) {
  const { row1Props, row2Props } = props;

  return (
    <div className="widget-m-size-combin">
      <div className="graph">
        <div className="overlap-group1-3">
          <div className="overlap-group-12">
            <div className="chart_bg-1"></div>
            <div className="chart_bg-2"></div>
            <div className="progress-1-1"></div>
            <div className="progress-7"></div>
            <div className="progress-7"></div>
            <div className="bg"></div>
          </div>
          <img className="icon-1" src="/img/icon-6@2x.png" alt="Icon" />
        </div>
        <div className="info">
          <div className="title-10">
            <div className="name-8 roboto-normal-astronaut-20px">
              <span className="roboto-normal-astronaut-20px">Total earning</span>
            </div>
          </div>
          <div className="overlap-group2-1">
            <div className="value-14">
              <div className="amount valign-text-middle poppins-semi-bold-astronaut-22px">
                <span>
                  <span className="poppins-semi-bold-astronaut-22px">$12,875</span>
                </span>
              </div>
              <div className="indicator-6">
                <img className="arrow-up" src="/img/arrow-up-10@2x.png" alt="Arrow up" />
                <div className="percent-1 valign-text-middle roboto-normal-jade-14px">
                  <span>
                    <span className="roboto-normal-jade-14px">2%</span>
                  </span>
                </div>
              </div>
            </div>
            <p className="detail roboto-normal-astronaut-12px">
              <span className="roboto-normal-astronaut-12px">Compared to $21,504 last year</span>
            </p>
          </div>
        </div>
      </div>
      <div className="table">
        <Row spanText1={row1Props.spanText1} spanText2={row1Props.spanText2} chart={row1Props.chart} />
        <Row spanText1={row2Props.spanText1} spanText2={row2Props.spanText2} chart={row2Props.chart} />
        <div className="row roboto-normal-astronaut-14px">
          <div className="name-9">
            <span className="roboto-normal-astronaut-14px">Research</span>
          </div>
          <div className="amount-1">
            <span className="roboto-normal-astronaut-14px">553</span>
          </div>
          <div className="overlap-group-13">
            <div className="column"></div>
            <div className="column-1"></div>
            <div className="column-2"></div>
            <div className="column-3"></div>
            <img className="chart-12" src="/img/chart-17@2x.png" alt="Chart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetMSizeCombinedCircleChartWithD;
