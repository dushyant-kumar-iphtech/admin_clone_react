import React from "react";
import { RxFileText } from "react-icons/rx";
import { LuCopy } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { LuUserPlus } from "react-icons/lu";

const Media = () => {
  return (
    <div className="w-[100%] bg-white shadow-md rounded-sm py-3">
      <p className="ml-5 text-2xl text-gray-500 mb-0 ">Media</p>
      <div className="flex justify-evenly  items-center ">
        <div className="flex flex-col mr-2 text-center items-center ">
          <span className="flex bg-[#C0F1E1] rounded-full w-8 h-8 justify-center items-center  ">
            <RxFileText className="text-md text-[#6BD2AE] " />
          </span>
          <span className="font-bold text-sm ">194</span>
          <span className="text-xs text-gray-400 ">Posts</span>
        </div>
        <div className="flex flex-col ml-2 text-center items-center ">
          <span className="flex bg-[#f6b4ca] rounded-full w-8 h-8 justify-center items-center  ">
            <LuCopy className="text-md text-[#FD5991] " />
          </span>
          <span className="font-bold text-sm ">554</span>
          <span className="text-xs text-gray-400">Projects</span>
        </div>
      </div>
      <div className="flex justify-evenly  items-center mt-3 py-3 ">
        <div className="flex flex-col mr-2 text-center items-center ">
          <span className="flex bg-[#9cadf3] rounded-full w-8 h-8 justify-center items-center  ">
            <TbUsers className="text-md text-[#5172F9] " />
          </span>
          <span className="font-bold text-sm ">12.8K</span>
          <span className="text-xs text-gray-400">Followers</span>
        </div>
        <div className="flex flex-col ml-2 text-center items-center ">
          <span className="flex bg-[#f4dbb9] rounded-full w-8 h-8 justify-center items-center ">
            <LuUserPlus className="text-md text-[#FFBF67]  " />
          </span>

          <span className="font-bold text-sm ">1.1K</span>
          <span className="text-xs text-gray-400">Following</span>
        </div>
      </div>
    </div>
  );
};

export default Media;
