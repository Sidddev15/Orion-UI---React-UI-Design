import React from "react";
import "./MiniIndicatorsVisitors.css";

function MiniIndicatorsVisitors(props) {
  const { eye, spanText1, down, spanText2, spanText3 } = props;

  return (
    <div className="mini-indicators-visitors">
      <div className="overlap-group-10">
        <img className="icon-eye-1" src={eye} alt="icon-eye" />
      </div>
      <div className="overlap-group9">
        <div className="value-10">
          <div className="value-11 valign-text-middle poppins-semi-bold-astronaut-22px">
            <span>
              <span className="poppins-semi-bold-astronaut-22px">{spanText1}</span>
            </span>
          </div>
          <div className="indicator-5">
            <img className="down" src={down} alt="down" />
            <div className="number-1 valign-text-middle roboto-normal-orange-red-14px">
              <span>
                <span className="roboto-normal-orange-red-14px">{spanText2}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="title-8 valign-text-middle poppins-light-astronaut-16px">
          <span>
            <span className="poppins-light-astronaut-16px">{spanText3}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MiniIndicatorsVisitors;
