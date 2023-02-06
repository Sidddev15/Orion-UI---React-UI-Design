import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="info-1">
      <div className="title-11">
        <div className="name-11 poppins-light-astronaut-16px">
          <span className="poppins-light-astronaut-16px">Total earning</span>
        </div>
      </div>
      <div className="value-15">
        <div className="amount-3 valign-text-middle poppins-semi-bold-astronaut-20px">
          <span>
            <span className="poppins-semi-bold-astronaut-20px">$43,833</span>
          </span>
        </div>
        <div className="indicator-7">
          <img className="arrow-up-1" src="/img/arrow-up-10@2x.png" alt="Arrow up" />
          <div className="percent-4 valign-text-middle roboto-normal-jade-14px">
            <span>
              <span className="roboto-normal-jade-14px">10%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
