import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "View"],
  ["2013", 400],
  ["2014", 270],
  ["2014", 900],
];

export const options = {
  hAxis: {
    title: "",
    titleTextStyle: { color: "#333" },
    gridlines: { color: "transparent" },
    textPosition: "none", // Removes labels from the x-axis
  },
  vAxis: {
    title: "",
    minValue: 0,
    gridlines: { color: "transparent" },
    baselineColor: "transparent", // Removes the bottom line color
    textPosition: "none", // Removes labels from the y-axis
  },
  chartArea: { width: "100%", height: "100%" },
  backgroundColor: "transparent", // Sets background to transparent
  series: {
    0: { areaOpacity: 0.2, label: "uv" }, // Style for the first series (Sales)
  },
};

const ViewChart = () => {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="80%"
      data={data}
      options={options}
    />
  );
};

export default ViewChart;
