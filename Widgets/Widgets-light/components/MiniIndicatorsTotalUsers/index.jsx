import React from "react";
import Icon from "../Icon";
import "./MiniIndicatorsTotalUsers.css";

function MiniIndicatorsTotalUsers(props) {
  const { spanText1, spanText2, spanText3, iconProps } = props;

  return (
    <div className="mini-indicators-total-users">
      <Icon src={iconProps.src} />
      <div className="overlap-group13">
        <div className="value">
          <div className="value-1 valign-text-middle poppins-semi-bold-astronaut-22px">
            <span>
              <span className="poppins-semi-bold-astronaut-22px">{spanText1}</span>
            </span>
          </div>
          <div className="chart">
            <div className="indicator valign-text-middle roboto-normal-comet-14px">
              <span>
                <span className="roboto-normal-comet-14px">{spanText2}</span>
              </span>
            </div>
            <div className="overlap-group">
              <div className="background"></div>
              <div className="progress"></div>
            </div>
          </div>
        </div>
        <div className="title-1 valign-text-middle poppins-light-astronaut-16px">
          <span>
            <span className="poppins-light-astronaut-16px">{spanText3}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MiniIndicatorsTotalUsers;
