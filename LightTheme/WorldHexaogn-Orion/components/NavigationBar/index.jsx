import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <div className="flex-row">
        <div className="logo">
          <img className="logo-1" src="/img/logo-2@2x.png" alt="Logo" />
          <div className="name-1 archivo-normal-black-20-5px">
            <span className="archivo-normal-black-20-5px">ORION</span>
          </div>
        </div>
        <div className="search">
          <img className="icon" src="/img/icon-1@2x.png" alt="Icon" />
        </div>
        <div className="navbar">
          <div className="navbar-link-label poppins-light-regent-gray-16px">
            <span className="poppins-light-regent-gray-16px">Statistics</span>
          </div>
          <div className="navbar-link-label-1 poppins-light-black-16px">
            <span className="poppins-light-black-16px">Overview</span>
          </div>
          <div className="navbar-link-label-2 poppins-light-regent-gray-16px">
            <span className="poppins-light-regent-gray-16px">Dashboard</span>
          </div>
          <div className="navbar-link-label-3 poppins-light-regent-gray-16px">
            <span className="poppins-light-regent-gray-16px">Analytics</span>
          </div>
        </div>
        <img className="profile" src="/img/profile-1@2x.png" alt="Profile" />
        <img className="option" src="/img/option-3@2x.png" alt="Option" />
      </div>
      <div className="tab"></div>
    </div>
  );
}

export default NavigationBar;
