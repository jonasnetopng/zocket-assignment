import React from "react";
import ActiveScreen from "./ActiveScreen";
import NavBar from "./NavBar";

const ContentScreen = ({ Component }) => {
  return (
    <div className="h-screen basis-full flex flex-col ">
      <NavBar />
      <ActiveScreen Component={Component} />
    </div>
  );
};

export default ContentScreen;
