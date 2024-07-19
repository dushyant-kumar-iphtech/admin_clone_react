import React from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";
import "./../App.css";
import ViewChart from "../chartContainer/ViewChart";

const Views = () => {
  return (
    <div className=" bg-white shadow-md rounded-sm pt-2 h-full md:block">
      <p className="ml-3 text-2xl text-gray-500 mb-0">Views</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col ml-7 lg:ml-3 md:gap-y-3  md:b-0 md:content-end  lg:gap-0  mt-2">
          <span className="text-xl font-bold flex">
            7.156
            <sub className="text-xs text-[#6EDEB9] mt-2">
              <HiArrowTrendingUp />
            </sub>
          </span>
          <span className="text-xs text-[#6EDEB9]">7.2%</span>
          <div>
            <button className=" text-[#546EFE] custom-bg px-2 py-1 mt-2 mb-4 text-xs rounded-md">
              See More
            </button>
          </div>
        </div>
        <div className=" max-h-[15vh] max-w-[40vw] sm:px-1 lg:max-w-[10vw] sm:ml-[-10px] lg:ml-[-60px]">
          <ViewChart />
        </div>
      </div>
    </div>
  );
};

export default Views;
