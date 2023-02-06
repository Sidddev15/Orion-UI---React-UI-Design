import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Pizdato from "./components/Pizdato";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|pizdato)">
          <Pizdato {...pizdatoData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const icon1Data = {
    src: "/img/eye-1@2x.png",
};

const miniIndicatorsTotalUsersData = {
    spanText1: "438",
    spanText2: "+76",
    spanText3: "Total Users",
    iconProps: icon1Data,
};

const miniIndicatorsActiveUsersData = {
    userVip: "/img/user-vip-2@2x.png",
    spanText1: "546",
    spanText2: "Active Users",
};

const icon2Data = {
    src: "/img/activity-3@2x.png",
};

const miniIndicatorsDynamicsData = {
    spanText1: "34%",
    chart: "/img/chart-12@2x.png",
    spanText2: "875",
    spanText3: "Dynamics",
    iconProps: icon2Data,
};

const miniIndicatorsCustomersData = {
    users: "/img/users-1@2x.png",
    spanText1: "2,340",
    up: "/img/up-2@2x.png",
    spanText2: "145",
    spanText3: "Сustomers",
};

const olumn22Data = {
    className: "olumn-5",
};

const olumn32Data = {
    className: "olumn-8",
};

const olumn33Data = {
    className: "olumn-9",
};

const olumn23Data = {
    className: "olumn-6",
};

const olumn4Data = {
    className: "olumn-3",
};

const chartData = {
    olumn22Props: olumn22Data,
    olumn32Props: olumn32Data,
    olumn33Props: olumn33Data,
    olumn23Props: olumn23Data,
    olumn2Props: olumn4Data,
};

const miniIndicatorsStatisticsData = {
    pie: "/img/pie-2@2x.png",
    spanText1: "1,802",
    spanText2: "Statistics",
    chartProps: chartData,
};

const miniIndicatorsBalanceData = {
    favorite: "/img/favorite-3@2x.png",
    spanText1: "438",
    spanText2: "Balance",
};

const miniIndicatorsPredictionData = {
    chart1: "/img/chart-14@2x.png",
    spanText1: "875",
    spanText2: "Prediction",
    spanText3: "34%",
    chart2: "/img/chart-13@2x.png",
    predict: "/img/predict-1@2x.png",
};

const miniIndicatorsVisitorsData = {
    eye: "/img/eye-1@2x.png",
    spanText1: "5,677",
    down: "/img/down-2@2x.png",
    spanText2: "453",
    spanText3: "Visitors",
};

const legend21Data = {
    children: "Sales",
};

const legend22Data = {
    children: "Users",
    className: "legend-2",
};

const legend23Data = {
    children: "Product",
    className: "legend-3",
};

const legend24Data = {
    children: "Team",
    className: "legend",
};

const jan21Data = {
    spanText: "Jan",
};

const mar21Data = {
    spanText: "Mar",
};

const jan22Data = {
    spanText: "Apr",
    className: "apr",
};

const jan23Data = {
    spanText: "Jun",
    className: "jun",
};

const mar22Data = {
    spanText: "Aug",
    className: "x-axis-item-1-2",
};

const mar23Data = {
    spanText: "Nov",
    className: "x-axis-item-1-3",
};

const mar24Data = {
    spanText: "Dec",
    className: "x-axis-item-1",
};

const widgetLSizeGlobalStatistic2Data = {
    spanText1: "Sales Figures",
    spanText2: "1k",
    spanText3: "800",
    spanText4: "600",
    spanText5: "400",
    spanText6: "200",
    spanText7: "0",
    spanText8: "Feb",
    shape2: "/img/shape-15@2x.png",
    spanText9: "May",
    shape3: "/img/shape-15@2x.png",
    spanText10: "Jul",
    shape4: "/img/shape-15@2x.png",
    spanText11: "Sep",
    shape5: "/img/shape-15@2x.png",
    spanText12: "Oct",
    legend21Props: legend21Data,
    legend22Props: legend22Data,
    legend23Props: legend23Data,
    legend24Props: legend24Data,
    jan21Props: jan21Data,
    mar21Props: mar21Data,
    jan22Props: jan22Data,
    jan23Props: jan23Data,
    mar22Props: mar22Data,
    mar23Props: mar23Data,
    mar24Props: mar24Data,
};

const row1Data = {
    spanText1: "Presentation",
    spanText2: "862",
    chart: "/img/chart-15@2x.png",
};

const row2Data = {
    spanText1: "Development",
    spanText2: "753",
    chart: "/img/chart-16@2x.png",
};

const widgetMSizeCombinedCircleChartWithDData = {
    row1Props: row1Data,
    row2Props: row2Data,
};

const widgetMSizeCircleChartData = {
    icon: "/img/icon---chart-1@2x.png",
};

const widgetMSizeCombinedCircleChartData = {
    icon: "/img/icon---chart-1@2x.png",
};

const widgetSSizeCircleChartData = {
    icon: "/img/icon---chart-1@2x.png",
};

const widgetSSizeompositeCircleChartData = {
    icon: "/img/icon---chart-1@2x.png",
};

const row22Data = {
    spanText1: "Travel",
    spanText2: "760",
    spanText3: "2,540",
    status: "/img/status-21@2x.png",
};

const row23Data = {
    spanText1: "Presentation",
    spanText2: "650",
    spanText3: "2,304",
    status: "/img/status-22@2x.png",
    className: "table-indicator-table-item",
};

const row24Data = {
    spanText1: "Business",
    spanText2: "612",
    spanText3: "2,140",
    status: "/img/status-21@2x.png",
    className: "table-indicator-table-item",
};

const tableIndicatorTableData = {
    row21Props: row22Data,
    row22Props: row23Data,
    row23Props: row24Data,
};

const informer1Data = {
    spanText1: "Total earning",
    spanText2: "$12,875",
    spanText3: "10%",
};

const informer2Data = {
    spanText1: "Sales",
    spanText2: "$43,123",
    spanText3: "12%",
    className: "informer-1",
};

const widgetMSizeompositeIndexData = {
    informer1Props: informer1Data,
    informer2Props: informer2Data,
};

const progress1Data = {
    className: "",
};

const row521Data = {
    spanText1: "Sales",
    spanText2: "1 540",
    spanText3: "786",
    progressProps: progress1Data,
};

const progress2Data = {
    className: "progress-14-2",
};

const row522Data = {
    spanText1: "Users",
    spanText2: "878",
    spanText3: "539",
    className: "table-1-item",
    progressProps: progress2Data,
};

const progress3Data = {
    className: "progress-14",
};

const row523Data = {
    spanText1: "Products",
    spanText2: "878",
    spanText3: "532",
    className: "table-1-item",
    progressProps: progress3Data,
};

const widgetLSizeCompoundCircularChartData = {
    spanText1: "Global Statistics",
    icon1: "/img/crown-3@2x.png",
    spanText2: "64,3",
    spanText3: " Dynamics today",
    spanText4: "%",
    progress: "/img/progress-5@2x.png",
    icon2: "/img/icon-7@2x.png",
    spanText5: "Sales",
    spanText6: "Sales Plan",
    spanText7: "Weekly limit",
    spanText8: "Mothly limit",
    spanText9: "Annual limit",
    spanText10: "1 540",
    spanText11: "1 210",
    spanText12: "1 113",
    spanText13: "950",
    spanText14: "932",
    row51Props: row521Data,
    row52Props: row522Data,
    row53Props: row523Data,
};

const icon22Data = {
    className: "",
};

const row61Data = {
    spanText1: "Finance",
    spanText2: "324",
    spanText3: "1,540",
    icon2Props: icon22Data,
};

const icon23Data = {
    className: "icon-12-2",
};

const row62Data = {
    spanText1: "Travel",
    spanText2: "311",
    spanText3: "1,320",
    className: "table-2-item",
    icon2Props: icon23Data,
};

const icon24Data = {
    className: "icon-12-3",
};

const row63Data = {
    spanText1: "Presentation",
    spanText2: "300",
    spanText3: "1,201",
    className: "table-2-item",
    icon2Props: icon24Data,
};

const icon25Data = {
    className: "icon-12-4",
};

const row64Data = {
    spanText1: "Startup",
    spanText2: "288",
    spanText3: "989",
    className: "table-2-item",
    icon2Props: icon25Data,
};

const icon26Data = {
    className: "icon-12-5",
};

const row65Data = {
    spanText1: "Development",
    spanText2: "276",
    spanText3: "944",
    className: "table-2-item",
    icon2Props: icon26Data,
};

const icon27Data = {
    className: "icon-12-6",
};

const row66Data = {
    spanText1: "Design",
    spanText2: "273",
    spanText3: "897",
    className: "table-2-item",
    icon2Props: icon27Data,
};

const icon28Data = {
    className: "icon-12-7",
};

const row67Data = {
    spanText1: "Product",
    spanText2: "233",
    spanText3: "843",
    className: "table-2-item",
    icon2Props: icon28Data,
};

const icon29Data = {
    className: "icon-12-8",
};

const row68Data = {
    spanText1: "Research",
    spanText2: "184",
    spanText3: "765",
    className: "table-2-item",
    icon2Props: icon29Data,
};

const icon210Data = {
    className: "icon-12",
};

const row69Data = {
    spanText1: "Other",
    spanText2: "143",
    spanText3: "565",
    className: "table-2-item",
    icon2Props: icon210Data,
};

const widgetMSizeBubbleChartWithIndicatorData = {
    spanText: "Compared to $21,490 last year",
    row61Props: row61Data,
    row62Props: row62Data,
    row63Props: row63Data,
    row64Props: row64Data,
    row65Props: row65Data,
    row66Props: row66Data,
    row67Props: row67Data,
    row68Props: row68Data,
    row69Props: row69Data,
};

const iconsData = {
    src: "/img/users-2@2x.png",
};

const informerInfoWithIconData = {
    spanText1: "All users",
    spanText2: "2,340",
    up: "/img/up-2@2x.png",
    spanText3: "145",
    iconsProps: iconsData,
};

const row71Data = {
    spanText1: "Travel",
    spanText2: "760",
    spanText3: "2,540",
    status: "/img/status-21@2x.png",
};

const row72Data = {
    spanText1: "Presentation",
    spanText2: "650",
    spanText3: "2,304",
    status: "/img/status-22@2x.png",
    className: "table-3-item",
};

const row73Data = {
    spanText1: "Business",
    spanText2: "612",
    spanText3: "2,140",
    status: "/img/status-21@2x.png",
    className: "table-3-item",
};

const row74Data = {
    spanText1: "Finance",
    spanText2: "598",
    spanText3: "1,976",
    status: "/img/status-21@2x.png",
    className: "table-3-item",
};

const row75Data = {
    spanText1: "Travel",
    spanText2: "513",
    spanText3: "1,903",
    status: "/img/status-22@2x.png",
    className: "table-3-item",
};

const row76Data = {
    spanText1: "Startup",
    spanText2: "498",
    spanText3: "1,320",
    status: "/img/status-22@2x.png",
    className: "table-3-item",
};

const row77Data = {
    spanText1: "Develop",
    spanText2: "476",
    spanText3: "1,103",
    status: "/img/status-21@2x.png",
    className: "table-3-item",
};

const row78Data = {
    spanText1: "Product",
    spanText2: "412",
    spanText3: "1,043",
    status: "/img/status-21@2x.png",
    className: "table-3-item",
};

const row79Data = {
    spanText1: "Design",
    spanText2: "389",
    spanText3: "1,001",
    status: "/img/status-22@2x.png",
    className: "table-3-item",
};

const row710Data = {
    spanText1: "Illustration",
    spanText2: "350",
    spanText3: "870",
    status: "/img/status-21@2x.png",
    className: "table-3-item",
};

const row711Data = {
    spanText1: "Prototype",
    spanText2: "321",
    spanText3: "820",
    status: "/img/status-21@2x.png",
    className: "table-3-item",
};

const widgetMSizeBigLinesChartWithIndicatData = {
    graph: "/img/graph-1@2x.png",
    spanText: "Compared to $21,490 last year",
    row71Props: row71Data,
    row72Props: row72Data,
    row73Props: row73Data,
    row74Props: row74Data,
    row75Props: row75Data,
    row76Props: row76Data,
    row77Props: row77Data,
    row78Props: row78Data,
    row79Props: row79Data,
    row710Props: row710Data,
    row711Props: row711Data,
};

const pizdatoData = {
    ellipse4: "/img/ellipse-4-1@2x.png",
    spanText1: "ORION",
    spanText2: "WIdgets ",
    spanText3: "/ Light",
    miniIndicatorsTotalUsersProps: miniIndicatorsTotalUsersData,
    miniIndicatorsActiveUsersProps: miniIndicatorsActiveUsersData,
    miniIndicatorsDynamicsProps: miniIndicatorsDynamicsData,
    miniIndicatorsCustomersProps: miniIndicatorsCustomersData,
    miniIndicatorsStatisticsProps: miniIndicatorsStatisticsData,
    miniIndicatorsBalanceProps: miniIndicatorsBalanceData,
    miniIndicatorsPredictionProps: miniIndicatorsPredictionData,
    miniIndicatorsVisitorsProps: miniIndicatorsVisitorsData,
    widgetLSizeGlobalStatistic2Props: widgetLSizeGlobalStatistic2Data,
    widgetMSizeCombinedCircleChartWithD: widgetMSizeCombinedCircleChartWithDData,
    widgetMSizeCircleChartProps: widgetMSizeCircleChartData,
    widgetMSizeCombinedCircleChartProps: widgetMSizeCombinedCircleChartData,
    widgetSSizeCircleChartProps: widgetSSizeCircleChartData,
    widgetSSizeompositeCircleChartProps: widgetSSizeompositeCircleChartData,
    tableIndicatorTableProps: tableIndicatorTableData,
    widgetMSizeompositeIndexProps: widgetMSizeompositeIndexData,
    widgetLSizeCompoundCircularChartPro: widgetLSizeCompoundCircularChartData,
    widgetMSizeBubbleChartWithIndicator: widgetMSizeBubbleChartWithIndicatorData,
    informerInfoWithIconProps: informerInfoWithIconData,
    widgetMSizeBigLinesChartWithIndicat: widgetMSizeBigLinesChartWithIndicatData,
};

