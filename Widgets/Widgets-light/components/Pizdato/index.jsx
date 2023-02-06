import React from "react";
import MiniIndicatorsTotalUsers from "../MiniIndicatorsTotalUsers";
import MiniIndicatorsActiveUsers from "../MiniIndicatorsActiveUsers";
import MiniIndicatorsDynamics from "../MiniIndicatorsDynamics";
import MiniIndicatorsCustomers from "../MiniIndicatorsCustomers";
import MiniIndicatorsStatistics from "../MiniIndicatorsStatistics";
import MiniIndicatorsBalance from "../MiniIndicatorsBalance";
import MiniIndicatorsPrediction from "../MiniIndicatorsPrediction";
import MiniIndicatorsVisitors from "../MiniIndicatorsVisitors";
import WidgetLSizeGlobalStatistic2 from "../WidgetLSizeGlobalStatistic2";
import WidgetMSizeCombinedCircleChartWithD from "../WidgetMSizeCombinedCircleChartWithD";
import WidgetMSizeCircleChart from "../WidgetMSizeCircleChart";
import WidgetMSizeCombinedCircleChart from "../WidgetMSizeCombinedCircleChart";
import WidgetSSizeCircleChart from "../WidgetSSizeCircleChart";
import WidgetSSizeompositeCircleChart from "../WidgetSSizeompositeCircleChart";
import TableIndicatorTable from "../TableIndicatorTable";
import WidgetMSizeompositeIndex from "../WidgetMSizeompositeIndex";
import WidgetLSizeCompoundCircularChart from "../WidgetLSizeCompoundCircularChart";
import WidgetMSizeBubbleChartWithIndicator from "../WidgetMSizeBubbleChartWithIndicator";
import InformerInfoWithIcon from "../InformerInfoWithIcon";
import WidgetMSizeBigLinesChartWithIndicat from "../WidgetMSizeBigLinesChartWithIndicat";
import "./Pizdato.css";

function Pizdato(props) {
  const {
    ellipse4,
    spanText1,
    spanText2,
    spanText3,
    miniIndicatorsTotalUsersProps,
    miniIndicatorsActiveUsersProps,
    miniIndicatorsDynamicsProps,
    miniIndicatorsCustomersProps,
    miniIndicatorsStatisticsProps,
    miniIndicatorsBalanceProps,
    miniIndicatorsPredictionProps,
    miniIndicatorsVisitorsProps,
    widgetLSizeGlobalStatistic2Props,
    widgetMSizeCombinedCircleChartWithD,
    widgetMSizeCircleChartProps,
    widgetMSizeCombinedCircleChartProps,
    widgetSSizeCircleChartProps,
    widgetSSizeompositeCircleChartProps,
    tableIndicatorTableProps,
    widgetMSizeompositeIndexProps,
    widgetLSizeCompoundCircularChartPro,
    widgetMSizeBubbleChartWithIndicator,
    informerInfoWithIconProps,
    widgetMSizeBigLinesChartWithIndicat,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="pizdato screen">
        <div className="logo">
          <img className="ellipse-4" src={ellipse4} alt="Ellipse 4" />
          <div className="name archivo-normal-black-34px">
            <span className="archivo-normal-black-34px">{spanText1}</span>
          </div>
        </div>
        <h1 className="title poppins-medium-astronaut-150px">
          <span className="poppins-medium-astronaut-150px">{spanText2}</span>
          <span className="span-1">{spanText3}</span>
        </h1>
        <div className="mini-indicators-container">
          <MiniIndicatorsTotalUsers
            spanText1={miniIndicatorsTotalUsersProps.spanText1}
            spanText2={miniIndicatorsTotalUsersProps.spanText2}
            spanText3={miniIndicatorsTotalUsersProps.spanText3}
            iconProps={miniIndicatorsTotalUsersProps.iconProps}
          />
          <MiniIndicatorsActiveUsers
            userVip={miniIndicatorsActiveUsersProps.userVip}
            spanText1={miniIndicatorsActiveUsersProps.spanText1}
            spanText2={miniIndicatorsActiveUsersProps.spanText2}
          />
          <MiniIndicatorsDynamics
            spanText1={miniIndicatorsDynamicsProps.spanText1}
            chart={miniIndicatorsDynamicsProps.chart}
            spanText2={miniIndicatorsDynamicsProps.spanText2}
            spanText3={miniIndicatorsDynamicsProps.spanText3}
            iconProps={miniIndicatorsDynamicsProps.iconProps}
          />
          <MiniIndicatorsCustomers
            users={miniIndicatorsCustomersProps.users}
            spanText1={miniIndicatorsCustomersProps.spanText1}
            up={miniIndicatorsCustomersProps.up}
            spanText2={miniIndicatorsCustomersProps.spanText2}
            spanText3={miniIndicatorsCustomersProps.spanText3}
          />
        </div>
        <div className="mini-indicators-container-1">
          <MiniIndicatorsStatistics
            pie={miniIndicatorsStatisticsProps.pie}
            spanText1={miniIndicatorsStatisticsProps.spanText1}
            spanText2={miniIndicatorsStatisticsProps.spanText2}
            chartProps={miniIndicatorsStatisticsProps.chartProps}
          />
          <MiniIndicatorsBalance
            favorite={miniIndicatorsBalanceProps.favorite}
            spanText1={miniIndicatorsBalanceProps.spanText1}
            spanText2={miniIndicatorsBalanceProps.spanText2}
          />
          <MiniIndicatorsPrediction
            chart1={miniIndicatorsPredictionProps.chart1}
            spanText1={miniIndicatorsPredictionProps.spanText1}
            spanText2={miniIndicatorsPredictionProps.spanText2}
            spanText3={miniIndicatorsPredictionProps.spanText3}
            chart2={miniIndicatorsPredictionProps.chart2}
            predict={miniIndicatorsPredictionProps.predict}
          />
          <MiniIndicatorsVisitors
            eye={miniIndicatorsVisitorsProps.eye}
            spanText1={miniIndicatorsVisitorsProps.spanText1}
            down={miniIndicatorsVisitorsProps.down}
            spanText2={miniIndicatorsVisitorsProps.spanText2}
            spanText3={miniIndicatorsVisitorsProps.spanText3}
          />
        </div>
        <div className="flex-row">
          <div className="flex-col">
            <WidgetLSizeGlobalStatistic2 {...widgetLSizeGlobalStatistic2Props} />
            <div className="flex-row-1">
              <WidgetMSizeCombinedCircleChartWithD
                row1Props={widgetMSizeCombinedCircleChartWithD.row1Props}
                row2Props={widgetMSizeCombinedCircleChartWithD.row2Props}
              />
              <div className="flex-col-1">
                <WidgetMSizeCircleChart icon={widgetMSizeCircleChartProps.icon} />
                <WidgetMSizeCombinedCircleChart icon={widgetMSizeCombinedCircleChartProps.icon} />
                <div className="widget-s-size-container">
                  <WidgetSSizeCircleChart icon={widgetSSizeCircleChartProps.icon} />
                  <WidgetSSizeompositeCircleChart icon={widgetSSizeompositeCircleChartProps.icon} />
                </div>
              </div>
              <div className="ind-container">
                <TableIndicatorTable
                  row21Props={tableIndicatorTableProps.row21Props}
                  row22Props={tableIndicatorTableProps.row22Props}
                  row23Props={tableIndicatorTableProps.row23Props}
                />
                <WidgetMSizeompositeIndex
                  informer1Props={widgetMSizeompositeIndexProps.informer1Props}
                  informer2Props={widgetMSizeompositeIndexProps.informer2Props}
                />
              </div>
            </div>
          </div>
          <div className="flex-row-2">
            <WidgetLSizeCompoundCircularChart {...widgetLSizeCompoundCircularChartPro} />
            <div className="with-i-container">
              <WidgetMSizeBubbleChartWithIndicator {...widgetMSizeBubbleChartWithIndicator} />
              <InformerInfoWithIcon
                spanText1={informerInfoWithIconProps.spanText1}
                spanText2={informerInfoWithIconProps.spanText2}
                up={informerInfoWithIconProps.up}
                spanText3={informerInfoWithIconProps.spanText3}
                iconsProps={informerInfoWithIconProps.iconsProps}
              />
            </div>
            <WidgetMSizeBigLinesChartWithIndicat {...widgetMSizeBigLinesChartWithIndicat} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizdato;
