import React, { useState } from "react";
import Header from "./Header";
import "./../App.css";
import SideBar from "./SideBar";
import Dashboard from "./../pages/Dashboard";
import Profile from "../pages/Profile";
import Documentation from "./../pages/Documentation";
import Ecommerce from "../pages/Ecommerce";
import User from "../pages/User";
import { Route, Routes } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
const Main = () => {
  const [bars, setBars] = useState(false);
  return (
    <div className="overflow-x-hidden relative ">
      <div className="w-full fixed top-0 left-0 z-[1000] ">
        <Header bars={bars} setBars={setBars} />
      </div>
      <div class="flex gap-0 p-[2px] relative">
        <div
          className={`${
            !bars ? "hidden" : "absolute w-[45%] h-[30%] top-0 "
          } md:block w-[13%] md:w-[20%] lg:w-[13%] mt-14 `}
        >
          <SideBar setBars={setBars} />
        </div>
        <div
          class="w-[100%] md:w-[80%] lg:w-[87%] bg-[#f0f1fd] mt-14"
          onClick={() => setBars(false)}
        >
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/user" element={<User />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
          </Routes>
        </div>
        <div
          className=" hidden md:block px-3 py-3 absolute bg-[#546efe] rounded-3xl flex items-center sm:hidden"
          style={{ right: "-20px", top: "100px" }}
        >
          <IoSettingsSharp className="text-white text-xl mr-6 " />
        </div>
      </div>
    </div>
  );
};

export default Main;
