import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import WorldHexagonMap from "./components/WorldHexagonMap";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|world-hexagon-map)">
          <WorldHexagonMap {...worldHexagonMapData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const icon1Data = {
    src: "/img/activity-1@2x.png",
};

const icon2Data = {
    src: "/img/crown-1@2x.png",
    className: "icon-2",
};

const icon3Data = {
    src: "/img/chart-2@2x.png",
    className: "icon-3",
};

const info1Data = {
    spanText1: "92,980",
    spanText2: "Active users",
};

const info2Data = {
    spanText1: "22,652",
    spanText2: "New users",
};

const indicator1Data = {
    src: "/img/icons-1@2x.png",
};

const indicator2Data = {
    src: "/img/icons-2@2x.png",
    className: "indicator-1",
};

const indicator3Data = {
    src: "/img/icons-3@2x.png",
    className: "indicator-2",
};

const indicator4Data = {
    src: "/img/icons-4@2x.png",
    className: "indicator-3",
};

const indicator5Data = {
    src: "/img/icons-5@2x.png",
    className: "indicator-4",
};

const indicator6Data = {
    src: "/img/icons-6@2x.png",
    className: "indicator-5",
};

const legend1Data = {
    children: "Sales",
};

const legend2Data = {
    children: "Users",
    className: "legend-2",
};

const legend3Data = {
    children: "Product",
    className: "legend-3",
};

const legend4Data = {
    children: "Team",
    className: "legend",
};

const jan1Data = {
    spanText: "Jan",
};

const mar1Data = {
    spanText: "Mar",
};

const jan2Data = {
    spanText: "Apr",
    className: "apr",
};

const jan3Data = {
    spanText: "Jun",
    className: "jun",
};

const mar2Data = {
    spanText: "Aug",
    className: "x-axis-item-1-2",
};

const mar3Data = {
    spanText: "Nov",
    className: "x-axis-item-1-3",
};

const mar4Data = {
    spanText: "Dec",
    className: "x-axis-item-1",
};

const footer1Data = {
    spanText2: "2019",
};

const footer2Data = {
    spanText2: "2022",
};

const worldHexagonMapData = {
    logo: "/img/logo-1@2x.png",
    spanText1: "ORION",
    icon: "/img/icon-1@2x.png",
    spanText2: "Statistics",
    spanText3: "Overview",
    spanText4: "Dashboard",
    spanText5: "Analytics",
    profile: "/img/profile-1@2x.png",
    option: "/img/option-1@2x.png",
    spanText6: "Total earning",
    spanText7: "540,549",
    spanText8: "Sales",
    spanText9: "1,205,677",
    spanText10: "Purchase",
    spanText11: "48,430,039",
    spanText12: "27",
    spanText13: "%",
    spanText14: "6",
    spanText15: "7",
    spanText16: "%",
    hexMap: "/img/hex-map-1@2x.png",
    spanText17: "Chicago",
    spanText18: "98,320,300",
    arrow1: "/img/arrow-3@2x.png",
    spanText19: "Manaus",
    spanText20: "12,320,300",
    arrow2: "/img/arrow-3@2x.png",
    spanText21: "Berlin",
    spanText22: "76,541,106",
    arrow3: "/img/arrow-3@2x.png",
    spanText23: "Giza",
    spanText24: "10,547,980",
    arrow4: "/img/arrow-3@2x.png",
    spanText25: "Shanghai",
    spanText26: "239,570,110",
    arrow5: "/img/arrow-3@2x.png",
    spanText27: "Queensland",
    spanText28: "6,097,321",
    arrow6: "/img/arrow-3@2x.png",
    spanText29: "Sales Figures",
    spanText30: "1k",
    spanText31: "800",
    spanText32: "600",
    spanText33: "400",
    spanText34: "200",
    spanText35: "0",
    spanText36: "Feb",
    shape2: "/img/shape-8@2x.png",
    spanText37: "May",
    shape3: "/img/shape-8@2x.png",
    spanText38: "Jul",
    shape4: "/img/shape-8@2x.png",
    spanText39: "Sep",
    shape5: "/img/shape-8@2x.png",
    spanText40: "Oct",
    spanText41: "$27632",
    spanText42: "$27632",
    spanText43: "August",
    spanText44: "$27632",
    spanText45: "2,431,340",
    spanText46: "All users",
    spanText47: "Detail",
    arow: "/img/arow-1@2x.png",
    spanText48: "Sales Figures",
    spanText49: "$10,430",
    chart: "/img/chart-1@2x.png",
    icon1Props: icon1Data,
    icon2Props: icon2Data,
    icon3Props: icon3Data,
    info1Props: info1Data,
    info2Props: info2Data,
    indicator1Props: indicator1Data,
    indicator2Props: indicator2Data,
    indicator3Props: indicator3Data,
    indicator4Props: indicator4Data,
    indicator5Props: indicator5Data,
    indicator6Props: indicator6Data,
    legend1Props: legend1Data,
    legend2Props: legend2Data,
    legend3Props: legend3Data,
    legend4Props: legend4Data,
    jan1Props: jan1Data,
    mar1Props: mar1Data,
    jan2Props: jan2Data,
    jan3Props: jan3Data,
    mar2Props: mar2Data,
    mar3Props: mar3Data,
    mar4Props: mar4Data,
    footer1Props: footer1Data,
    footer2Props: footer2Data,
};

