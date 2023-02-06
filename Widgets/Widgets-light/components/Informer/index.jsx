import React from "react";
import "./Informer.css";

function Informer(props) {
  const { spanText1, spanText2, spanText3, className } = props;

  return (
    <div className={`informer ${className || ""}`}>
      <div className="title-12">
        <div className="name-13 poppins-light-white-16px">
          <span className="span-20 poppins-light-white-16px">{spanText1}</span>
        </div>
      </div>
      <div className="value-16">
        <div className="amount-5 valign-text-middle poppins-normal-white-34px">
          <span>
            <span className="span-20 poppins-normal-white-34px">{spanText2}</span>
          </span>
        </div>
        <div className="indicator-8">
          <img className="arrow-up-2" src="/img/arrow-up-11@2x.png" alt="Arrow up" />
          <div className="percent-5 valign-text-middle roboto-normal-screamin-green-14px">
            <span>
              <span className="span-20 roboto-normal-screamin-green-14px">{spanText3}</span>
            </span>
          </div>
        </div>
      </div>
      <p className="detail-1 roboto-normal-white-12px">
        <span className="span-20 roboto-normal-white-12px">Compared to $21,490 last year</span>
      </p>
    </div>
  );
}

export default Informer;
