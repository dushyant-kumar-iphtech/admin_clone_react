import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./../css/Profile.css";

import GridView from "../container/GridView";
const Profile = () => {
  return (
    <div className="w-[95%] md:w-[97%] h-[100%] pb-5 mx-auto flex flex-col">
      <div className="w-full flex bg-white mx-auto mt-[20px] rounded-sm shadow-sm py-2">
        <div className="flex items-center pl-[20px] space-x-2 ">
          <p className="m-0 text-gray-500  ">App</p>
          <IoIosArrowForward />
          <h6 className="m-0 pl-[2px] text-blue-600">Profile</h6>
        </div>
      </div>
      <div className="flex mt-[20px] w-full justify-between ">
        <GridView />
        {/**  
        <ProfileContainer className="" />
        <FileContainer />
        */}
      </div>
    </div>
  );
};

export default Profile;
