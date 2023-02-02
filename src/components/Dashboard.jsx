import React from "react";

import SideBar from "./SideBar";
import ContentScreen from "./ContentScreen";
const Dashboard = ({ Component }) => {
  // console.log(component);
  return (
    <div className="h-screen flex">
      <SideBar />
      <ContentScreen Component={Component} />
    </div>
  );
};

export default Dashboard;
