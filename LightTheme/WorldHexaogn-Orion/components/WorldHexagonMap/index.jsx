import React from "react";
import NavigationBar from "../NavigationBar";
import SideIndicators from "../SideIndicators";
import WidgetMSizeBigCircleChart from "../WidgetMSizeBigCircleChart";
import WidgetMSizeBigCircleChart2 from "../WidgetMSizeBigCircleChart2";
import Indicator from "../Indicator";
import Info2 from "../Info2";
import Line from "../Line";
import Footer from "../Footer";
import "./WorldHexagonMap.css";

function WorldHexagonMap(props) {
  const {
    hexMap,
    spanText1,
    spanText2,
    arrow1,
    spanText3,
    spanText4,
    arrow2,
    spanText5,
    spanText6,
    arrow3,
    spanText7,
    spanText8,
    arrow4,
    spanText9,
    spanText10,
    arrow5,
    spanText11,
    spanText12,
    arrow6,
    spanText13,
    spanText14,
    spanText15,
    arow,
    chart,
    sideIndicatorsProps,
    widgetMSizeBigCircleChartProps,
    widgetMSizeBigCircleChart2Props,
    indicator1Props,
    indicator2Props,
    indicator3Props,
    indicator4Props,
    indicator5Props,
    indicator6Props,
    footer1Props,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="world-hexagon-map-1 screen">
        <NavigationBar />
        <div className="overlap-group10">
          <SideIndicators
            icon1Props={sideIndicatorsProps.icon1Props}
            icon2Props={sideIndicatorsProps.icon2Props}
            icon3Props={sideIndicatorsProps.icon3Props}
          />
          <WidgetMSizeBigCircleChart infoProps={widgetMSizeBigCircleChartProps.infoProps} />
          <div className="overlap-group-container">
            <div className="overlap-group8">
              <WidgetMSizeBigCircleChart2 infoProps={widgetMSizeBigCircleChart2Props.infoProps} />
              <img className="hex-map" src={hexMap} alt="Hex map" />
              <div className="overlap-group1">
                <div className="tooltip">
                  <Indicator src={indicator1Props.src} />
                  <div className="info">
                    <div className="title valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText1}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText2}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow1} alt="Arrow" />
              </div>
              <div className="overlap-group2">
                <div className="tooltip-1">
                  <Indicator src={indicator2Props.src} className={indicator2Props.className} />
                  <div className="info-1">
                    <div className="title valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText3}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText4}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow2} alt="Arrow" />
              </div>
              <div className="overlap-group3">
                <div className="tooltip-2">
                  <Indicator src={indicator3Props.src} className={indicator3Props.className} />
                  <div className="info-2">
                    <div className="title valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText5}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText6}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow3} alt="Arrow" />
              </div>
              <div className="overlap-group4">
                <div className="tooltip-3">
                  <Indicator src={indicator4Props.src} className={indicator4Props.className} />
                  <div className="info-3">
                    <div className="title valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText7}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText8}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow4} alt="Arrow" />
              </div>
              <div className="overlap-group5">
                <div className="tooltip">
                  <Indicator src={indicator5Props.src} className={indicator5Props.className} />
                  <div className="info">
                    <div className="title valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText9}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText10}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow5} alt="Arrow" />
              </div>
              <div className="overlap-group6">
                <div className="tooltip-4">
                  <Indicator src={indicator6Props.src} className={indicator6Props.className} />
                  <div className="info-4">
                    <div className="title valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText11}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText12}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow6} alt="Arrow" />
              </div>
            </div>
            <div className="overlap-group7">
              <h1 className="amount-1 poppins-medium-astronaut-72px">
                <span className="poppins-medium-astronaut-72px">{spanText13}</span>
              </h1>
              <div className="title-1">
                <div className="name poppins-semi-bold-astronaut-20px">
                  <span className="poppins-semi-bold-astronaut-20px">{spanText14}</span>
                </div>
                <div className="detail">
                  <div className="detail-1 roboto-bold-astronaut-10px">
                    <span className="roboto-bold-astronaut-10px">{spanText15}</span>
                  </div>
                  <img className="arow" src={arow} alt="Arow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-l-size-timeline-chart">
          <Info2 />
          <div className="graph">
            <img className="chart" src={chart} alt="Chart" />
            <Line />
          </div>
        </div>
        <div className="footer-container">
          <Footer spanText2={footer1Props.spanText2} />
          <Footer spanText2={footer2Props.spanText2} />
        </div>
      </div>
    </div>
  );
}

export default WorldHexagonMap;
