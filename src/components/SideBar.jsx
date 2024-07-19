import React from "react";
import "./../css/SideBar.css";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const SideBar = ({ setBars }) => {
  return (
    <div>
      <div className="home">
        <NavLink to={"/"} className="link">
          <div
            className="flex items-center pl-4 space-x-4 mt-2 py-3 container"
            onClick={() => setBars(false)}
          >
            <FaUserCircle className="text-gray-500 text-lg  icon" />

            <div className=" items-center">
              <p className="m-0 text-gray-500 text-sm ">Profile</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/dashboard"} className="link">
          <div
            className="flex items-center pl-4 space-x-4 py-3 container"
            onClick={() => setBars(false)}
          >
            <IoMdHome className="text-gray-500 text-lg icon" />

            <div className="items-center">
              <p className="m-0 text-gray-500 text-sm">Dashboard</p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/ecommerce"} className="link">
          <div
            className="flex items-center pl-4 space-x-4 py-2 container"
            onClick={() => setBars(false)}
          >
            <FaCartShopping className="text-gray-500 text-lg icon" />

            <div className="items-center">
              <p className="m-0 text-gray-500 text-sm py-1 relative">
                E-commerce{" "}
                <sup className="absolute text-xs bg-green-500 rounded-md ml-[-25px] text-white px-1 ">
                  NodeJS
                </sup>
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/user"} className="link">
          <div
            className="flex items-center pl-4 space-x-4 py-2 container"
            onClick={() => setBars(false)}
          >
            <FaUser className="text-gray-500  text-lg icon" />

            <div className="items-center">
              <p className="m-0 text-gray-500 text-sm py-1  relative">
                User{" "}
                <sup className="absolute text-xs bg-[#FD5991] rounded-md ml-[-20px] text-white px-1 ">
                  New
                </sup>
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/documentation"} className="link">
          <div
            className="flex items-center pl-4 space-x-4 py-3 container"
            onClick={() => setBars(false)}
          >
            <IoDocumentText className="text-gray-500 text-lg icon" />

            <div className="items-center ">
              <p className="m-0 text-gray-500 text-sm ">Documentation</p>
            </div>
          </div>
        </NavLink>
        <hr />
      </div>
    </div>
  );
};

export default SideBar;
