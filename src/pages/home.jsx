import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Tenants from "../components/tenants";
import Users from "../components/users";

import "../styles/home.css";
const home = () => {
  return (
    <>
      <div className="mainCon">
        <div className="section1">
          <SideBar />
        </div>
        <div className="section2">
          <NavBar />
          <div className="mainContainer">
            {/* <Tenants /> */}
            <Users />
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
