import React from "react";
import Title2 from "../Title2";
import Value2 from "../Value2";
import BubbleChart3 from "../BubbleChart3";
import Row6 from "../Row6";
import "./WidgetMSizeBubbleChartWithIndicator.css";

function WidgetMSizeBubbleChartWithIndicator(props) {
  const {
    spanText,
    row61Props,
    row62Props,
    row63Props,
    row64Props,
    row65Props,
    row66Props,
    row67Props,
    row68Props,
    row69Props,
  } = props;

  return (
    <div className="widget-m-size-bubble">
      <div className="graph-1">
        <div className="info-2">
          <Title2 />
          <div className="overlap-group-19">
            <Value2 />
            <p className="detail-2 roboto-normal-white-12px">
              <span className="roboto-normal-white-12px">{spanText}</span>
            </p>
          </div>
        </div>
        <BubbleChart3 />
      </div>
      <div className="table-2">
        <Row6
          spanText1={row61Props.spanText1}
          spanText2={row61Props.spanText2}
          spanText3={row61Props.spanText3}
          icon2Props={row61Props.icon2Props}
        />
        <Row6
          spanText1={row62Props.spanText1}
          spanText2={row62Props.spanText2}
          spanText3={row62Props.spanText3}
          className={row62Props.className}
          icon2Props={row62Props.icon2Props}
        />
        <Row6
          spanText1={row63Props.spanText1}
          spanText2={row63Props.spanText2}
          spanText3={row63Props.spanText3}
          className={row63Props.className}
          icon2Props={row63Props.icon2Props}
        />
        <Row6
          spanText1={row64Props.spanText1}
          spanText2={row64Props.spanText2}
          spanText3={row64Props.spanText3}
          className={row64Props.className}
          icon2Props={row64Props.icon2Props}
        />
        <Row6
          spanText1={row65Props.spanText1}
          spanText2={row65Props.spanText2}
          spanText3={row65Props.spanText3}
          className={row65Props.className}
          icon2Props={row65Props.icon2Props}
        />
        <Row6
          spanText1={row66Props.spanText1}
          spanText2={row66Props.spanText2}
          spanText3={row66Props.spanText3}
          className={row66Props.className}
          icon2Props={row66Props.icon2Props}
        />
        <Row6
          spanText1={row67Props.spanText1}
          spanText2={row67Props.spanText2}
          spanText3={row67Props.spanText3}
          className={row67Props.className}
          icon2Props={row67Props.icon2Props}
        />
        <Row6
          spanText1={row68Props.spanText1}
          spanText2={row68Props.spanText2}
          spanText3={row68Props.spanText3}
          className={row68Props.className}
          icon2Props={row68Props.icon2Props}
        />
        <Row6
          spanText1={row69Props.spanText1}
          spanText2={row69Props.spanText2}
          spanText3={row69Props.spanText3}
          className={row69Props.className}
          icon2Props={row69Props.icon2Props}
        />
      </div>
    </div>
  );
}

export default WidgetMSizeBubbleChartWithIndicator;
