import React from "react";
import zocket_logo from "../assets/imgs/Zocket_logo.png";
import { UilEstate, UilVolume, UilShoppingBag, UilUsersAlt } from "@iconscout/react-unicons";
import SideBarIcon from "./SideBarIcon";
const SideBar = () => {
  return (
    <div className="h-full basis-11 bg-[#001738] ">
      <div className="flex flex-col space-y-5 ">
        <div className="p-5 ">
          <div className="w-[50px] mx-auto h-[50px] rounded-full">
            <img src={zocket_logo} alt="zocket_logo" className="w-full h-full  object-cover" />
          </div>
        </div>
        <SideBarIcon text="Home" Icon={UilEstate} linkTo={"/all"} enabled={false} />
        <SideBarIcon text="Campaign" Icon={UilVolume} linkTo={"/all"} enabled={true} />
        <SideBarIcon text="Products" Icon={UilShoppingBag} linkTo={"/random"} enabled={false} />
        <SideBarIcon text="Customers" Icon={UilUsersAlt} enabled={false} linkTo={"/all"} />
      </div>
    </div>
  );
};

export default SideBar;
