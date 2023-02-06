import React from "react";
import "./Informer.css";

function Informer(props) {
  const { spanText1, spanText2, spanText3, className } = props;

  return (
    <div className={`informer ${className || ""}`}>
      <div className="title-5">
        <div className="name-5 poppins-light-white-16px">
          <span className="span-3 poppins-light-white-16px">{spanText1}</span>
        </div>
      </div>
      <div className="value-2">
        <div className="amount-3 valign-text-middle poppins-normal-white-34px">
          <span>
            <span className="span-3 poppins-normal-white-34px">{spanText2}</span>
          </span>
        </div>
        <div className="indicator-1">
          <img className="arrow-up-1" src="/img/arrow-up-11@2x.png" alt="Arrow up" />
          <div className="percent-1 valign-text-middle roboto-normal-screamin-green-14px">
            <span>
              <span className="span-3 roboto-normal-screamin-green-14px">{spanText3}</span>
            </span>
          </div>
        </div>
      </div>
      <p className="detail-1 roboto-normal-white-12px">
        <span className="span-3 roboto-normal-white-12px">Compared to $21,490 last year</span>
      </p>
    </div>
  );
}

export default Informer;
