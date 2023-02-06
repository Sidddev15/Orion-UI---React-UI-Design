import React from "react";
import "./Footer.css";

function Footer(props) {
  const { spanText2 } = props;

  return (
    <div className="footer roboto-bold-comet-10px">
      <div className="name-9 valign-text-middle">
        <span>
          <span className="roboto-bold-comet-10px">Orion data visualisation</span>
        </span>
      </div>
      <div className="number-2 valign-text-middle">
        <span>
          <span className="roboto-bold-comet-10px">{spanText2}</span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
