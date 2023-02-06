import React from "react";
import "./MiniIndicatorsActiveUsers.css";

function MiniIndicatorsActiveUsers(props) {
  const { userVip, spanText1, spanText2 } = props;

  return (
    <div className="mini-indicators-active-users">
      <div className="overlap-group1">
        <img className="icon-user" src={userVip} alt="icon-user" />
      </div>
      <div className="overlap-group12">
        <div className="value-2">
          <div className="value-3 valign-text-middle poppins-semi-bold-astronaut-22px">
            <span>
              <span className="poppins-semi-bold-astronaut-22px">{spanText1}</span>
            </span>
          </div>
          <div className="overlap-group-1">
            <div className="background-1"></div>
            <div className="progress-1">
              <div className="chart_1"></div>
              <div className="chart_2"></div>
            </div>
          </div>
        </div>
        <div className="title-2 valign-text-middle poppins-light-astronaut-16px">
          <span>
            <span className="poppins-light-astronaut-16px">{spanText2}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MiniIndicatorsActiveUsers;
