import React from "react";
import Title2 from "../Title2";
import Value2 from "../Value2";
import Row7 from "../Row7";
import "./WidgetMSizeBigLinesChartWithIndicat.css";

function WidgetMSizeBigLinesChartWithIndicat(props) {
  const {
    graph,
    spanText,
    row71Props,
    row72Props,
    row73Props,
    row74Props,
    row75Props,
    row76Props,
    row77Props,
    row78Props,
    row79Props,
    row710Props,
    row711Props,
  } = props;

  return (
    <div className="widget-m-size-big-li">
      <div className="graph-2">
        <img className="graph-3" src={graph} alt="Graph" />
        <div className="info-4">
          <Title2 />
          <div className="overlap-group-20">
            <Value2 />
            <p className="detail-3 roboto-normal-astronaut-12px">
              <span className="roboto-normal-astronaut-12px">{spanText}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="table-3">
        <Row7
          spanText1={row71Props.spanText1}
          spanText2={row71Props.spanText2}
          spanText3={row71Props.spanText3}
          status={row71Props.status}
        />
        <Row7
          spanText1={row72Props.spanText1}
          spanText2={row72Props.spanText2}
          spanText3={row72Props.spanText3}
          status={row72Props.status}
          className={row72Props.className}
        />
        <Row7
          spanText1={row73Props.spanText1}
          spanText2={row73Props.spanText2}
          spanText3={row73Props.spanText3}
          status={row73Props.status}
          className={row73Props.className}
        />
        <Row7
          spanText1={row74Props.spanText1}
          spanText2={row74Props.spanText2}
          spanText3={row74Props.spanText3}
          status={row74Props.status}
          className={row74Props.className}
        />
        <Row7
          spanText1={row75Props.spanText1}
          spanText2={row75Props.spanText2}
          spanText3={row75Props.spanText3}
          status={row75Props.status}
          className={row75Props.className}
        />
        <Row7
          spanText1={row76Props.spanText1}
          spanText2={row76Props.spanText2}
          spanText3={row76Props.spanText3}
          status={row76Props.status}
          className={row76Props.className}
        />
        <Row7
          spanText1={row77Props.spanText1}
          spanText2={row77Props.spanText2}
          spanText3={row77Props.spanText3}
          status={row77Props.status}
          className={row77Props.className}
        />
        <Row7
          spanText1={row78Props.spanText1}
          spanText2={row78Props.spanText2}
          spanText3={row78Props.spanText3}
          status={row78Props.status}
          className={row78Props.className}
        />
        <Row7
          spanText1={row79Props.spanText1}
          spanText2={row79Props.spanText2}
          spanText3={row79Props.spanText3}
          status={row79Props.status}
          className={row79Props.className}
        />
        <Row7
          spanText1={row710Props.spanText1}
          spanText2={row710Props.spanText2}
          spanText3={row710Props.spanText3}
          status={row710Props.status}
          className={row710Props.className}
        />
        <Row7
          spanText1={row711Props.spanText1}
          spanText2={row711Props.spanText2}
          spanText3={row711Props.spanText3}
          status={row711Props.status}
          className={row711Props.className}
        />
      </div>
    </div>
  );
}

export default WidgetMSizeBigLinesChartWithIndicat;
