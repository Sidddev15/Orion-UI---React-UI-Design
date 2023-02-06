import React from "react";
import Icon from "../Icon";
import "./SideIndicators.css";

function SideIndicators(props) {
  const { icon1Props, icon2Props, icon3Props } = props;

  return (
    <div className="side-indicators">
      <div className="informer-info-with-icon">
        <Icon src={icon1Props.src} />
        <div className="info-5">
          <div className="title-2 valign-text-middle roboto-normal-astronaut-20px">
            <span>
              <span className="roboto-normal-astronaut-20px">Total earning</span>
            </span>
          </div>
          <div className="amount-2">
            <div className="value valign-text-middle poppins-semi-bold-astronaut-20px">
              <span>
                <span className="poppins-semi-bold-astronaut-20px">540,549</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="informer-info-with-icon-1">
        <Icon src={icon2Props.src} className={icon2Props.className} />
        <div className="info-6">
          <div className="title-2 valign-text-middle roboto-normal-astronaut-20px">
            <span>
              <span className="roboto-normal-astronaut-20px">Sales</span>
            </span>
          </div>
          <div className="amount-3">
            <div className="value valign-text-middle poppins-semi-bold-astronaut-20px">
              <span>
                <span className="poppins-semi-bold-astronaut-20px">1,205,677</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="informer-info-with-icon-2">
        <Icon src={icon3Props.src} className={icon3Props.className} />
        <div className="info-7">
          <div className="title-2 valign-text-middle roboto-normal-astronaut-20px">
            <span>
              <span className="roboto-normal-astronaut-20px">Purchase</span>
            </span>
          </div>
          <div className="amount-4">
            <div className="value valign-text-middle poppins-semi-bold-astronaut-20px">
              <span>
                <span className="poppins-semi-bold-astronaut-20px">48,430,039</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideIndicators;
