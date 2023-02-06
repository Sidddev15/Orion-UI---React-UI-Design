import React from "react";
import Olumn from "../Olumn";
import Olumn2 from "../Olumn2";
import Olumn3 from "../Olumn3";
import "./Chart.css";

function Chart(props) {
  const { olumn22Props, olumn32Props, olumn33Props, olumn23Props, olumn2Props } = props;

  return (
    <div className="chart-3">
      <div className="olumn-container">
        <Olumn />
        <div className="olumn">
          <div className="overlap-group-4">
            <div className="background-2"></div>
            <div className="progress-2"></div>
          </div>
        </div>
        <div className="olumn-1">
          <div className="overlap-group-4">
            <div className="background-2"></div>
            <div className="progress-3"></div>
          </div>
        </div>
        <Olumn2 />
        <Olumn3 />
        <Olumn2 className={olumn22Props.className} />
        <Olumn3 className={olumn32Props.className} />
        <Olumn3 className={olumn33Props.className} />
        <Olumn2 className={olumn23Props.className} />
        <Olumn className={olumn2Props.className} />
      </div>
    </div>
  );
}

export default Chart;
