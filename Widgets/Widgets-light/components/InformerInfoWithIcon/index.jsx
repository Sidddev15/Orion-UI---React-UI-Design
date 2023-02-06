import React from "react";
import Icons from "../Icons";
import "./InformerInfoWithIcon.css";

function InformerInfoWithIcon(props) {
  const { spanText1, spanText2, up, spanText3, iconsProps } = props;

  return (
    <div className="informer-info-with-icon">
      <Icons src={iconsProps.src} />
      <div className="info-3">
        <div className="title-15 valign-text-middle roboto-normal-astronaut-20px">
          <span>
            <span className="roboto-normal-astronaut-20px">{spanText1}</span>
          </span>
        </div>
        <div className="amount-15">
          <div className="value-18 valign-text-middle poppins-semi-bold-astronaut-20px">
            <span>
              <span className="poppins-semi-bold-astronaut-20px">{spanText2}</span>
            </span>
          </div>
          <div className="indicator-10">
            <img className="up-1" src={up} alt="up" />
            <div className="number-4 valign-text-middle roboto-normal-jade-14px">
              <span>
                <span className="roboto-normal-jade-14px">{spanText3}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformerInfoWithIcon;
