import React from "react";
import { Link } from "react-router-dom";

const SideBarIcon = ({ text, linkTo, Icon, color = "#fff", size = "25", enabled }) => {
  return (
    <Link to={linkTo}>
      <div
        className={`flex flex-col space-y-2 items-center justify-center  w-full py-3 px-4 cursor-pointer ${
          enabled ? "bg-[#1977F31A] border-l-4 border-[##1977F3]" : ""
        }`}
      >
        <Icon color={color} size={size} />
        <p className="text-white">{text} </p>
      </div>
    </Link>
  );
};

export default SideBarIcon;
