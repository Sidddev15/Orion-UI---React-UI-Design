import React from "react";
import "./MiniIndicatorsCustomers.css";

function MiniIndicatorsCustomers(props) {
  const { users, spanText1, up, spanText2, spanText3 } = props;

  return (
    <div className="mini-indicators-customers">
      <div className="overlap-group-2">
        <img className="users" src={users} alt="Users" />
      </div>
      <div className="overlap-group10">
        <div className="value-5">
          <div className="value-6 valign-text-middle poppins-semi-bold-astronaut-22px">
            <span>
              <span className="poppins-semi-bold-astronaut-22px">{spanText1}</span>
            </span>
          </div>
          <div className="indicator-2">
            <img className="up" src={up} alt="up" />
            <div className="number valign-text-middle roboto-normal-jade-14px">
              <span>
                <span className="roboto-normal-jade-14px">{spanText2}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="title-4 valign-text-middle poppins-light-astronaut-16px">
          <span>
            <span className="poppins-light-astronaut-16px">{spanText3}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MiniIndicatorsCustomers;
