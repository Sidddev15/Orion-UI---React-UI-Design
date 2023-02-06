import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import BubbleChart from "./components/BubbleChart";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|bubble-chart-1)">
          <BubbleChart {...bubbleChartData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
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

const bigWidgetBubbleChartData = {
    bubbleChart: "/img/bubble-chart-1@2x.png",
    spanText1: "3 month",
    spanText2: "Investments",
    spanText3: "$76,644",
    spanText4: "3 month",
    spanText5: "$32,982",
    spanText6: "Design",
    spanText7: "Finance",
    spanText8: " $",
    spanText9: "23,657",
    spanText10: "Business",
    spanText11: "$21,987",
    spanText12: "Development",
    spanText13: "$31,657",
};

const icon1Data = {
    src: "/img/favorite-3@2x.png",
};

const icon2Data = {
    src: "/img/eye-1@2x.png",
};

const icon3Data = {
    src: "/img/chart-14@2x.png",
};

const icon4Data = {
    src: "/img/map-1@2x.png",
    className: "icon-3",
};

const bubbleChartData = {
    logo: "/img/logo-1@2x.png",
    spanText1: "ORION",
    icon: "/img/icon-1@2x.png",
    spanText2: "Statistics",
    spanText3: "Overview",
    spanText4: "Dashboard",
    spanText5: "Analytics",
    profile: "/img/profile-1@2x.png",
    option: "/img/option-1@2x.png",
    spanText6: "Design faster",
    spanText7: "Timeline",
    spanText8: "1W",
    spanText9: "1M",
    spanText10: "3M",
    spanText11: "1Y",
    spanText12: "ALL",
    spanText13: "204",
    spanText14: "Trend goods",
    spanText15: "65,540",
    spanText16: "Shopping views",
    spanText17: "324",
    spanText18: "Store dynamics",
    plus: "/img/plus-1@2x.png",
    minus: "/img/minus-1@2x.png",
    node: "/img/node-1@2x.png",
    element: "/img/element-1@2x.png",
    spanText19: "Orion data visualisation",
    spanText20: "2022",
    widgetMSizeCombinedCircleChartWithD: widgetMSizeCombinedCircleChartWithDData,
    widgetMSizeompositeIndexProps: widgetMSizeompositeIndexData,
    tableIndicatorTableProps: tableIndicatorTableData,
    bigWidgetBubbleChartProps: bigWidgetBubbleChartData,
    icon1Props: icon1Data,
    icon2Props: icon2Data,
    icon3Props: icon3Data,
    icon4Props: icon4Data,
};

