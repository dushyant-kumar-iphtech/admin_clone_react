import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Documentation = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-[95%] flex flec-col mx-auto">
        <div className="w-full flex bg-white mx-auto mt-[20px] rounded-sm shadow-sm py-2">
          <div className="flex items-center pl-[20px] space-x-2 ">
            <p className="m-0 text-gray-500  ">App</p>
            <IoIosArrowForward />
            <h6 className="m-0 pl-[2px] text-blue-600">Documentation</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
