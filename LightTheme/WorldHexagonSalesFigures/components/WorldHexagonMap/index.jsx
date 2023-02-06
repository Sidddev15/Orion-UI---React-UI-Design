import React from "react";
import Icon from "../Icon";
import Info from "../Info";
import Indicator from "../Indicator";
import Legend from "../Legend";
import Jan from "../Jan";
import Mar from "../Mar";
import Footer from "../Footer";
import "./WorldHexagonMap.css";

function WorldHexagonMap(props) {
  const {
    logo,
    spanText1,
    icon,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    profile,
    option,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    hexMap,
    spanText17,
    spanText18,
    arrow1,
    spanText19,
    spanText20,
    arrow2,
    spanText21,
    spanText22,
    arrow3,
    spanText23,
    spanText24,
    arrow4,
    spanText25,
    spanText26,
    arrow5,
    spanText27,
    spanText28,
    arrow6,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    spanText33,
    spanText34,
    spanText35,
    spanText36,
    shape2,
    spanText37,
    shape3,
    spanText38,
    shape4,
    spanText39,
    shape5,
    spanText40,
    spanText41,
    spanText42,
    spanText43,
    spanText44,
    spanText45,
    spanText46,
    spanText47,
    arow,
    spanText48,
    spanText49,
    chart,
    icon1Props,
    icon2Props,
    icon3Props,
    info1Props,
    info2Props,
    indicator1Props,
    indicator2Props,
    indicator3Props,
    indicator4Props,
    indicator5Props,
    indicator6Props,
    legend1Props,
    legend2Props,
    legend3Props,
    legend4Props,
    jan1Props,
    mar1Props,
    jan2Props,
    jan3Props,
    mar2Props,
    mar3Props,
    mar4Props,
    footer1Props,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="world-hexagon-map screen">
        <div className="navigation-bar">
          <div className="flex-row">
            <div className="logo">
              <img className="logo-1" src={logo} alt="Logo" />
              <div className="name archivo-normal-black-20-5px">
                <span className="archivo-normal-black-20-5px">{spanText1}</span>
              </div>
            </div>
            <div className="search">
              <img className="icon" src={icon} alt="Icon" />
            </div>
            <div className="navbar">
              <div className="navbar-link-label poppins-light-regent-gray-16px">
                <span className="poppins-light-regent-gray-16px">{spanText2}</span>
              </div>
              <div className="navbar-link-label-1 poppins-light-black-16px">
                <span className="poppins-light-black-16px">{spanText3}</span>
              </div>
              <div className="navbar-link-label-2 poppins-light-regent-gray-16px">
                <span className="poppins-light-regent-gray-16px">{spanText4}</span>
              </div>
              <div className="navbar-link-label-3 poppins-light-regent-gray-16px">
                <span className="poppins-light-regent-gray-16px">{spanText5}</span>
              </div>
            </div>
            <img className="profile" src={profile} alt="Profile" />
            <img className="option" src={option} alt="Option" />
          </div>
          <div className="tab"></div>
        </div>
        <div className="overlap-group10">
          <div className="side-indicators">
            <div className="informer-info-with-icon">
              <Icon src={icon1Props.src} />
              <div className="info-1">
                <div className="title valign-text-middle roboto-normal-astronaut-20px">
                  <span>
                    <span className="roboto-normal-astronaut-20px">{spanText6}</span>
                  </span>
                </div>
                <div className="amount-1">
                  <div className="value valign-text-middle poppins-semi-bold-astronaut-20px">
                    <span>
                      <span className="poppins-semi-bold-astronaut-20px">{spanText7}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="informer-info-with-icon-1">
              <Icon src={icon2Props.src} className={icon2Props.className} />
              <div className="info-2">
                <div className="title valign-text-middle roboto-normal-astronaut-20px">
                  <span>
                    <span className="roboto-normal-astronaut-20px">{spanText8}</span>
                  </span>
                </div>
                <div className="amount-2">
                  <div className="value valign-text-middle poppins-semi-bold-astronaut-20px">
                    <span>
                      <span className="poppins-semi-bold-astronaut-20px">{spanText9}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="informer-info-with-icon-2">
              <Icon src={icon3Props.src} className={icon3Props.className} />
              <div className="info-3">
                <div className="title valign-text-middle roboto-normal-astronaut-20px">
                  <span>
                    <span className="roboto-normal-astronaut-20px">{spanText10}</span>
                  </span>
                </div>
                <div className="amount-3">
                  <div className="value valign-text-middle poppins-semi-bold-astronaut-20px">
                    <span>
                      <span className="poppins-semi-bold-astronaut-20px">{spanText11}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-m-size-big-circle-chart">
            <div className="overlap-group">
              <div className="percent poppins-light-mirage-24px">
                <span className="poppins-light-mirage-24px">{spanText12}</span>
                <span className="span-1 poppins-light-mirage-24px">{spanText13}</span>
              </div>
              <div className="background"></div>
              <div className="progress"></div>
            </div>
            <Info spanText1={info1Props.spanText1} spanText2={info1Props.spanText2} />
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group7">
              <div className="widget-m-size-big-circle-chart">
                <div className="overlap-group">
                  <div className="percent poppins-light-mirage-24px">
                    <span className="poppins-light-mirage-24px">{spanText14}</span>
                    <span className="poppins-light-mirage-24px">{spanText15}</span>
                    <span className="span-1 poppins-light-mirage-24px">{spanText16}</span>
                  </div>
                  <div className="background-1"></div>
                  <div className="progress-1"></div>
                </div>
                <Info spanText1={info2Props.spanText1} spanText2={info2Props.spanText2} />
              </div>
              <img className="hex-map" src={hexMap} alt="Hex map" />
              <div className="overlap-group1">
                <div className="tooltip">
                  <Indicator src={indicator1Props.src} />
                  <div className="info">
                    <div className="title-1 valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText17}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText18}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow1} alt="Arrow" />
              </div>
              <div className="overlap-group2">
                <div className="tooltip-1">
                  <Indicator src={indicator2Props.src} className={indicator2Props.className} />
                  <div className="info-4">
                    <div className="title-1 valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText19}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText20}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow2} alt="Arrow" />
              </div>
              <div className="overlap-group3">
                <div className="tooltip-2">
                  <Indicator src={indicator3Props.src} className={indicator3Props.className} />
                  <div className="info-5">
                    <div className="title-1 valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText21}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText22}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow3} alt="Arrow" />
              </div>
              <div className="overlap-group4">
                <div className="tooltip-3">
                  <Indicator src={indicator4Props.src} className={indicator4Props.className} />
                  <div className="info-6">
                    <div className="title-1 valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText23}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText24}</span>
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
                    <div className="title-1 valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText25}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText26}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow5} alt="Arrow" />
              </div>
              <div className="overlap-group6">
                <div className="tooltip-4">
                  <Indicator src={indicator6Props.src} className={indicator6Props.className} />
                  <div className="info-7">
                    <div className="title-1 valign-text-middle poppins-light-astronaut-16px">
                      <span>
                        <span className="poppins-light-astronaut-16px">{spanText27}</span>
                      </span>
                    </div>
                    <div className="amount valign-text-middle poppins-semi-bold-astronaut-20px">
                      <span>
                        <span className="poppins-semi-bold-astronaut-20px">{spanText28}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <img className="arrow" src={arrow6} alt="Arrow" />
              </div>
              <div className="widget-l-size-global-statistic">
                <header className="header">
                  <div className="title-2 poppins-semi-bold-mirage-18-4px">
                    <span className="poppins-semi-bold-mirage-18-4px">{spanText29}</span>
                  </div>
                  <Legend>{legend1Props.children}</Legend>
                  <Legend className={legend2Props.className}>{legend2Props.children}</Legend>
                  <Legend className={legend3Props.className}>{legend3Props.children}</Legend>
                  <Legend className={legend4Props.className}>{legend4Props.children}</Legend>
                </header>
                <div className="overlap-group6-1">
                  <div className="chart">
                    <div className="y-axis poppins-light-astronaut-16px">
                      <div className="x1k">
                        <span className="poppins-light-astronaut-16px">{spanText30}</span>
                      </div>
                      <div className="number">
                        <span className="poppins-light-astronaut-16px">{spanText31}</span>
                      </div>
                      <div className="number">
                        <span className="poppins-light-astronaut-16px">{spanText32}</span>
                      </div>
                      <div className="number">
                        <span className="poppins-light-astronaut-16px">{spanText33}</span>
                      </div>
                      <div className="number">
                        <span className="poppins-light-astronaut-16px">{spanText34}</span>
                      </div>
                      <div className="number-1">
                        <span className="poppins-light-astronaut-16px">{spanText35}</span>
                      </div>
                    </div>
                    <div className="x-axis">
                      <Jan spanText={jan1Props.spanText} />
                      <div className="x-axis-item">
                        <img className="shape-1" src="/img/shape-8@2x.png" alt="Shape" />
                        <div className="name-1 poppins-light-astronaut-16px">
                          <span className="poppins-light-astronaut-16px">{spanText36}</span>
                        </div>
                      </div>
                      <Mar spanText={mar1Props.spanText} />
                      <Jan spanText={jan2Props.spanText} className={jan2Props.className} />
                      <div className="may">
                        <img className="shape-2" src={shape2} alt="Shape" />
                        <div className="name-2 poppins-light-astronaut-16px">
                          <span className="poppins-light-astronaut-16px">{spanText37}</span>
                        </div>
                      </div>
                      <Jan spanText={jan3Props.spanText} className={jan3Props.className} />
                      <div className="jul">
                        <img className="shape" src={shape3} alt="Shape" />
                        <div className="name-3 poppins-light-astronaut-16px">
                          <span className="poppins-light-astronaut-16px">{spanText38}</span>
                        </div>
                      </div>
                      <Mar spanText={mar2Props.spanText} className={mar2Props.className} />
                      <div className="x-axis-item">
                        <img className="shape" src={shape4} alt="Shape" />
                        <div className="name-4 poppins-light-astronaut-16px">
                          <span className="poppins-light-astronaut-16px">{spanText39}</span>
                        </div>
                      </div>
                      <div className="oct">
                        <img className="shape" src={shape5} alt="Shape" />
                        <div className="name-5 poppins-light-astronaut-16px">
                          <span className="poppins-light-astronaut-16px">{spanText40}</span>
                        </div>
                      </div>
                      <Mar spanText={mar3Props.spanText} className={mar3Props.className} />
                      <Mar spanText={mar4Props.spanText} className={mar4Props.className} />
                    </div>
                  </div>
                  <div className="data">
                    <div className="bubble"></div>
                    <div className="bubble-1"></div>
                    <div className="overlap-group5-1">
                      <div className="bubble-2"></div>
                      <div className="overlap-group4-1">
                        <div className="bubble-3"></div>
                        <div className="bubble-4"></div>
                        <div className="overlap-group-1">
                          <div className="value-1 poppins-semi-bold-white-18-4px">
                            <span className="poppins-semi-bold-white-18-4px">{spanText41}</span>
                          </div>
                        </div>
                        <div className="overlap-group2-1">
                          <div className="value-2 poppins-semi-bold-white-18-4px">
                            <span className="poppins-semi-bold-white-18-4px">{spanText42}</span>
                          </div>
                          <div className="text roboto-normal-white-16-1px">
                            <span className="roboto-normal-white-16-1px">{spanText43}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bubble-5"></div>
                    <div className="bubble-6"></div>
                    <div className="overlap-group3-1">
                      <div className="bubble-7"></div>
                      <div className="bubble-8"></div>
                      <div className="overlap-group1-1">
                        <div className="value-1 poppins-semi-bold-white-18-4px">
                          <span className="poppins-semi-bold-white-18-4px">{spanText44}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bubble-9"></div>
                    <div className="bubble-10"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group8">
              <h1 className="amount-4 poppins-medium-astronaut-72px">
                <span className="poppins-medium-astronaut-72px">{spanText45}</span>
              </h1>
              <div className="title-3">
                <div className="name-6 poppins-semi-bold-astronaut-20px">
                  <span className="poppins-semi-bold-astronaut-20px">{spanText46}</span>
                </div>
                <div className="detail">
                  <div className="detail-1 roboto-bold-astronaut-10px">
                    <span className="roboto-bold-astronaut-10px">{spanText47}</span>
                  </div>
                  <img className="arow" src={arow} alt="Arow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-l-size-timeline-chart">
          <div className="info-8">
            <div className="value-3">
              <div className="value-4">
                <div className="title-4 roboto-normal-astronaut-14px">
                  <span className="roboto-normal-astronaut-14px">{spanText48}</span>
                </div>
                <div className="value-5 poppins-semi-bold-astronaut-22px">
                  <span className="poppins-semi-bold-astronaut-22px">{spanText49}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="graph">
            <img className="chart-1" src={chart} alt="Chart" />
            <div className="line">
              <div className="overlap-group-2">
                <div className="yellow"></div>
              </div>
            </div>
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
