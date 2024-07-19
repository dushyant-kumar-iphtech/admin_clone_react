import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import "./../App.css";
import ProjectData from "../data/ProjectData";
import ProjectTamplate from "../tamplate/ProjectTamplate";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const labelColors = {
  New: "#5172F9",
  InProgress: "#FFBF67",
  Complete: "#59D5AC",
  Cancel: "#FD5991",
};

const Projects = () => {
  const [data, setData] = useState(ProjectData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const count = data.reduce((acc, item) => acc + item.value, 0);

  const handleUpdateData = (updatedData) => {
    console.log("Fetch updated data", updatedData);
    setData((prevData) =>
      prevData.map((item) =>
        item.label === updatedData.label
          ? { ...item, value: updatedData.value }
          : item
      )
    );
  };

  return (
    <div className="w-[100%] shadow-md rounded-sm px-2 py-3 bg-white flex flex-col">
      <p className="ml-3 text-2xl text-gray-500 mb-0">Projects</p>
      <div className=" flex-wrap mb-2 ">
        <PieChart
          series={[
            {
              data: data.map((item) => ({
                ...item,
                color: labelColors[item.label],
              })),
              innerRadius: 30,
              outerRadius: 45,
            },
          ]}
          height={147}
          margin={{ top: 10, bottom: 60, left: 70, right: 80 }}
          padding={{ bottom: 10 }}
          slotProps={{
            legend: {
              hidden: false,
              direction: "row",
              position: { vertical: "bottom", horizontal: "middle" },
              itemGap: 13,
              padding: { top: 20 },
              itemMarkHeight: 4,
              itemMarkWidth: 4,

              labelStyle: {
                fontSize: "11px",
              },
            },
          }}
        >
          <PieCenterLabel>{count}</PieCenterLabel>
        </PieChart>
      </div>
      <button
        className="px-2 text-xs py-1 mr-3 ml-auto content-end text-[#546EFE] custom-bg"
        onClick={handleShow}
      >
        Update
      </button>
      {show && (
        <ProjectTamplate
          show={show}
          handleClose={handleClose}
          data={data}
          setData={handleUpdateData}
        />
      )}
    </div>
  );
};

export default Projects;
