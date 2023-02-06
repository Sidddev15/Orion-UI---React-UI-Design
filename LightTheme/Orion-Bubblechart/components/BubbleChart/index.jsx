import React from "react";
import WidgetMSizeCombinedCircleChartWithD from "../WidgetMSizeCombinedCircleChartWithD";
import WidgetMSizeompositeIndex from "../WidgetMSizeompositeIndex";
import TableIndicatorTable from "../TableIndicatorTable";
import BigWidgetBubbleChart from "../BigWidgetBubbleChart";
import Icon from "../Icon";
import "./BubbleChart.css";

function BubbleChart(props) {
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
    spanText17,
    spanText18,
    plus,
    minus,
    node,
    element,
    spanText19,
    spanText20,
    widgetMSizeCombinedCircleChartWithD,
    widgetMSizeompositeIndexProps,
    tableIndicatorTableProps,
    bigWidgetBubbleChartProps,
    icon1Props,
    icon2Props,
    icon3Props,
    icon4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="bubble-chart-1 screen">
        <div className="navigation-bar">
          <div className="flex-row">
            <div className="logo">
              <img className="logo-1" src={logo} alt="logo" />
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
        <div className="flex-row-1">
          <div className="flex-col">
            <div className="title poppins-normal-black-34px">
              <span className="poppins-normal-black-34px">{spanText6}</span>
            </div>
            <WidgetMSizeCombinedCircleChartWithD
              row1Props={widgetMSizeCombinedCircleChartWithD.row1Props}
              row2Props={widgetMSizeCombinedCircleChartWithD.row2Props}
            />
            <WidgetMSizeompositeIndex
              informer1Props={widgetMSizeompositeIndexProps.informer1Props}
              informer2Props={widgetMSizeompositeIndexProps.informer2Props}
            />
            <TableIndicatorTable
              row21Props={tableIndicatorTableProps.row21Props}
              row22Props={tableIndicatorTableProps.row22Props}
              row23Props={tableIndicatorTableProps.row23Props}
            />
          </div>
          <div className="overlap-group6">
            <div className="bubble"></div>
            <div className="flex-col-1">
              <div className="timeline opensans-bold-gun-powder-10px">
                <span className="opensans-bold-gun-powder-10px">{spanText7}</span>
              </div>
              <div className="overlap-group7">
                <BigWidgetBubbleChart {...bigWidgetBubbleChartProps} />
                <div className="bubble-1"></div>
                <div className="bubble-2"></div>
                <div className="timeline-1">
                  <div className="navbar-1">
                    <div className="navbar-link-period-1 roboto-normal-black-14px">
                      <span className="roboto-normal-black-14px">{spanText8}</span>
                    </div>
                    <div className="navbar-link-period roboto-normal-black-14px">
                      <span className="roboto-normal-black-14px">{spanText9}</span>
                    </div>
                    <div className="overlap-group">
                      <div className="period mulish-bold-white-13px">
                        <span className="mulish-bold-white-13px">{spanText10}</span>
                      </div>
                    </div>
                    <div className="navbar-link-period-2 roboto-normal-black-14px">
                      <span className="roboto-normal-black-14px">{spanText11}</span>
                    </div>
                    <div className="navbar-link-period roboto-normal-black-14px">
                      <span className="roboto-normal-black-14px">{spanText12}</span>
                    </div>
                  </div>
                </div>
                <div className="informer-trend-goods">
                  <Icon src={icon1Props.src} />
                  <div className="overlap-group3">
                    <h1 className="value poppins-light-astronaut-60px">
                      <span className="poppins-light-astronaut-60px">{spanText13}</span>
                    </h1>
                    <div className="title-1 roboto-bold-astronaut-10px">
                      <span className="roboto-bold-astronaut-10px">{spanText14}</span>
                    </div>
                  </div>
                </div>
                <div className="informer-trend-goods-1">
                  <Icon src={icon2Props.src} />
                  <div className="overlap-group4">
                    <div className="value poppins-light-astronaut-60px">
                      <span className="poppins-light-astronaut-60px">{spanText15}</span>
                    </div>
                    <div className="title-2 roboto-bold-astronaut-10px">
                      <span className="roboto-bold-astronaut-10px">{spanText16}</span>
                    </div>
                  </div>
                </div>
                <div className="informer-trend-goods-2">
                  <Icon src={icon3Props.src} />
                  <div className="overlap-group5">
                    <div className="value poppins-light-astronaut-60px">
                      <span className="poppins-light-astronaut-60px">{spanText17}</span>
                    </div>
                    <div className="title-3 roboto-bold-astronaut-10px">
                      <span className="roboto-bold-astronaut-10px">{spanText18}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bubble-container">
              <div className="bubble-3"></div>
              <div className="bubble-4"></div>
            </div>
            <div className="panel-group">
              <div className="zoom">
                <img className="plus" src={plus} alt="Plus" />
                <img className="minus" src={minus} alt="Minus" />
              </div>
              <Icon src={icon4Props.src} className={icon4Props.className} />
              <div className="tool">
                <img className="node" src={node} alt="Node" />
                <img className="element" src={element} alt="Element" />
                <img className="path" src="/img/path-1@2x.png" alt="Path" />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer roboto-bold-comet-10px">
          <div className="name-1 valign-text-middle">
            <span>
              <span className="roboto-bold-comet-10px">{spanText19}</span>
            </span>
          </div>
          <div className="x2019 valign-text-middle">
            <span>
              <span className="roboto-bold-comet-10px">{spanText20}</span>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default BubbleChart;
