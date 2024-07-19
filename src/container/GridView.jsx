import React from "react";

import UserProfile from "../components/UserProfile";
import Files from "../components/Files";

import Media from "../components/Media";
import Projects from "../components/Projects";
import ReactNativePost from "../components/ReactNativePost";

import Tasks from "../components/Tasks";
import Calendar1 from "../components/Calendar";
import Views from "../components/Views";
import { DataProvider } from "../context/DataContext";

const GridView = () => {
  return (
    <div className="pt-1 md:pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-10 md:grid-cols-10 gap-3">
        <DataProvider>
          <div className="col-span-10   lg:col-span-4">
            <UserProfile />
          </div>
          <div className="col-span-10   lg:col-span-6">
            <Files />
          </div>
        </DataProvider>
        <div className="grid grid-cols-10  gap-3 col-span-10 md:col-span-10 lg:grid-cols-4 lg:col-span-4">
          <div className="col-span-10 md:col-span-5 lg:col-span-2">
            <Media />
          </div>
          <div className="col-span-10 md:col-span-5 lg:col-span-2">
            <Projects />
          </div>
          <div className="col-span-10 lg:col-span-4">
            <ReactNativePost />
          </div>
        </div>
        <div className="col-span-10 lg:col-span-6 flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-[55%] col-span-6">
            <Tasks />
          </div>
          <div className="flex flex-col md:flex-row w-full lg:flex-col lg:w-[45%] col-span-10 gap-3">
            <div className="md:w-[50%] lg:w-full ">
              <Calendar1 />
            </div>
            <div className="md:w-[50%] lg:w-full">
              <Views />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridView;
