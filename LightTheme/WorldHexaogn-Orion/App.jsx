import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import WorldHexagonMap from "./components/WorldHexagonMap";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|world-hexagon-map-1)">
          <WorldHexagonMap {...worldHexagonMapData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const icon1Data = {
    src: "/img/activity-2@2x.png",
};

const icon2Data = {
    src: "/img/crown-1@2x.png",
    className: "icon-2",
};

const icon3Data = {
    src: "/img/chart-2@2x.png",
    className: "icon-3",
};

const sideIndicatorsData = {
    icon1Props: icon1Data,
    icon2Props: icon2Data,
    icon3Props: icon3Data,
};

const info1Data = {
    spanText1: "92,980",
    spanText2: "Active users",
};

const widgetMSizeBigCircleChartData = {
    infoProps: info1Data,
};

const info2Data = {
    spanText1: "22,652",
    spanText2: "New users",
};

const widgetMSizeBigCircleChart2Data = {
    infoProps: info2Data,
};

const indicator1Data = {
    src: "/img/icons-1@2x.png",
};

const indicator2Data = {
    src: "/img/icons-2@2x.png",
    className: "indicator-1",
};

const indicator3Data = {
    src: "/img/icons-9@2x.png",
    className: "indicator-2",
};

const indicator4Data = {
    src: "/img/icons-4@2x.png",
    className: "indicator-3",
};

const indicator5Data = {
    src: "/img/icons-11@2x.png",
    className: "indicator-4",
};

const indicator6Data = {
    src: "/img/icons-6@2x.png",
    className: "indicator-5",
};

const footer1Data = {
    spanText2: "2019",
};

const footer2Data = {
    spanText2: "2022",
};

const worldHexagonMapData = {
    hexMap: "/img/hex-map-1@2x.png",
    spanText1: "Chicago",
    spanText2: "98,320,300",
    arrow1: "/img/arrow-1@2x.png",
    spanText3: "Manaus",
    spanText4: "12,320,300",
    arrow2: "/img/arrow-1@2x.png",
    spanText5: "Berlin",
    spanText6: "76,541,106",
    arrow3: "/img/arrow-1@2x.png",
    spanText7: "Giza",
    spanText8: "10,547,980",
    arrow4: "/img/arrow-1@2x.png",
    spanText9: "Shanghai",
    spanText10: "239,570,110",
    arrow5: "/img/arrow-1@2x.png",
    spanText11: "Queensland",
    spanText12: "6,097,321",
    arrow6: "/img/arrow-1@2x.png",
    spanText13: "2,431,340",
    spanText14: "All users",
    spanText15: "Detail",
    arow: "/img/arow-1@2x.png",
    chart: "/img/chart-1@2x.png",
    sideIndicatorsProps: sideIndicatorsData,
    widgetMSizeBigCircleChartProps: widgetMSizeBigCircleChartData,
    widgetMSizeBigCircleChart2Props: widgetMSizeBigCircleChart2Data,
    indicator1Props: indicator1Data,
    indicator2Props: indicator2Data,
    indicator3Props: indicator3Data,
    indicator4Props: indicator4Data,
    indicator5Props: indicator5Data,
    indicator6Props: indicator6Data,
    footer1Props: footer1Data,
    footer2Props: footer2Data,
};

