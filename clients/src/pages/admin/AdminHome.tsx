import React from "react";
import SideBarAD from "../../components/adminCpn/SideBarAD";
import HeaderAD from "../../components/adminCpn/HeaderAD";
import { Outlet } from "react-router-dom";

export default function AdminHome() {
  return (
    <>
      <div className="flex bg-[#F1F5F9]">
        <SideBarAD></SideBarAD>
        <HeaderAD></HeaderAD>
        <div className="ml-16 w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
