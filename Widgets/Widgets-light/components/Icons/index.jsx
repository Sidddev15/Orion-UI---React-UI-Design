import React from "react";
import "./Icons.css";

function Icons(props) {
  const { src } = props;

  return (
    <div className="icon-14">
      <img className="users-1" src={src} alt="Users" />
    </div>
  );
}

export default Icons;
