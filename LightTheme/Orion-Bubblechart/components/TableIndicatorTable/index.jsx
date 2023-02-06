import React from "react";
import Row2 from "../Row2";
import "./TableIndicatorTable.css";

function TableIndicatorTable(props) {
  const { row21Props, row22Props, row23Props } = props;

  return (
    <div className="table-indicator-table">
      <Row2
        spanText1={row21Props.spanText1}
        spanText2={row21Props.spanText2}
        spanText3={row21Props.spanText3}
        status={row21Props.status}
      />
      <Row2
        spanText1={row22Props.spanText1}
        spanText2={row22Props.spanText2}
        spanText3={row22Props.spanText3}
        status={row22Props.status}
        className={row22Props.className}
      />
      <Row2
        spanText1={row23Props.spanText1}
        spanText2={row23Props.spanText2}
        spanText3={row23Props.spanText3}
        status={row23Props.status}
        className={row23Props.className}
      />
    </div>
  );
}

export default TableIndicatorTable;
