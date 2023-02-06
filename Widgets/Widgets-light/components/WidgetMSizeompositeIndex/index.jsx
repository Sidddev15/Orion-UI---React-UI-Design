import React from "react";
import Informer from "../Informer";
import "./WidgetMSizeompositeIndex.css";

function WidgetMSizeompositeIndex(props) {
  const { informer1Props, informer2Props } = props;

  return (
    <div className="widget-m-size-omposite-index">
      <Informer
        spanText1={informer1Props.spanText1}
        spanText2={informer1Props.spanText2}
        spanText3={informer1Props.spanText3}
      />
      <img className="divider" src="/img/divider-2@2x.png" alt="Divider" />
      <Informer
        spanText1={informer2Props.spanText1}
        spanText2={informer2Props.spanText2}
        spanText3={informer2Props.spanText3}
        className={informer2Props.className}
      />
    </div>
  );
}

export default WidgetMSizeompositeIndex;
