/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./../css/Header.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Header = ({ bars, setBars }) => {
  return (
    <div className="header py-2">
      <div className="flex items-center pl-[10px] md:pl-[40px] md:space-x-2 text-white ">
        {bars ? (
          <ImCross className="md:hidden mx-2 " onClick={() => setBars(!bars)} />
        ) : (
          <FaBars className="md:hidden mx-2" onClick={() => setBars(!bars)} />
        )}

        <FaArrowLeft className="hidden md:block  md:text-xl" />

        <p className="m-0 pl-1 md:pl-8 text-xs md:text-lg ">
          React Material Admin Full
        </p>
      </div>
      <div className="headerUserName items-center">
        <div className="flex items-center pl-[20px] space-x-2 text-white">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1717027200&semt=sph"
            alt="Image"
          />
        </div>
        <p className="hidden md:block  m-0 pl-3">
          Hi, <span className="font-bold">Admin</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
