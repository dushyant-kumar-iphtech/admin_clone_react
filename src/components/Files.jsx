import React, { useState, useContext, useEffect } from "react";
import { FaFolder } from "react-icons/fa";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FileData from "./../data/FileData.json";
import FileTamplate from "../tamplate/FileTamplate";
import { DataContext } from "../context/DataContext";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Files = () => {
  const {
    workData,
    setWorkData,
    privateData,
    setPrivateData,
    socialData,
    setSocialData,
  } = useContext(DataContext);

  const [value, setValue] = useState(0);

  const [work, setWork] = useState(true);
  const [private1, setPrivate1] = useState(false);
  const [social, setSocial] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setWorkData(FileData.Work);
    setPrivateData(FileData.Private);
    setSocialData(FileData.Social);
  }, [setWorkData, setPrivateData, setSocialData]);

  const handleWorkData = (updatedData) => {
    console.log("Fetch work updated data", updatedData);
    setWorkData((prevData) =>
      prevData.map((item) =>
        item.title === updatedData.title
          ? { ...item, value: updatedData.value }
          : item
      )
    );
  };

  const handlePrivateData = (updatedData) => {
    console.log("Fetch private updated data", updatedData);
    setPrivateData((prevData) =>
      prevData.map((item) =>
        item.title === updatedData.title
          ? { ...item, value: updatedData.value }
          : item
      )
    );
  };

  const handleSocialData = (updatedData) => {
    console.log("Fetch social updated data", updatedData);
    setSocialData((prevData) =>
      prevData.map((item) =>
        item.title === updatedData.title
          ? { ...item, value: updatedData.value }
          : item
      )
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderFolder = (item) => {
    const colors = {
      uiUX: "#A6B5FC",
      Design: "#FD5991",
      Mobile: "#6EDEB9",
      Illustration: "#FFC878",
      Art: "#FFC878",
    };
    return (
      <div key={item.id} className="relative mt-3 pt-0 pl-0">
        <FaFolder
          className={`w-[30vw] md:w-[15vw] lg:w-[10vw] h-[13vh] lg:h-[14vh]`}
          style={{ color: colors[item.title] }}
        />
        <span className="absolute text-sm bottom-1 md:bottom-4 lg:bottom-1 pl-5 md:pl-0 left-1/3 lg:left-1/2 justify-center transform -translate-x-1/2 text-white flex-wrap text-center">
          {item.title === "uiUX" ? "UI/UX" : item.title}{" "}
          <p className="text-xs">{item.value} Files</p>
        </span>
      </div>
    );
  };

  return (
    <div className="w-[100%] mx-auto bg-white shadow-md rounded-sm lg:max-h-[28vh]">
      <div className="w-[95%] mx-auto pt-2">
        <div className="flex justify-between">
          <p className="text-2xl text-gray-500 mb-0">Files</p>
          <button
            className="px-2 text-xs py-1 mr-3 ml-auto content-end text-[#546EFE] custom-bg"
            onClick={handleShow}
          >
            Update
          </button>
        </div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Work"
                onClick={() => {
                  setWork(true);
                  setPrivate1(false);
                  setSocial(false);
                  setShow(false);
                }}
                {...a11yProps(0)}
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              />
              <Tab
                label="Private "
                onClick={() => {
                  setWork(false);
                  setPrivate1(true);
                  setSocial(false);
                  setShow(false);
                }}
                {...a11yProps(1)}
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              />
              <Tab
                label="Social"
                onClick={() => {
                  setWork(false);
                  setPrivate1(false);
                  setSocial(true);
                  setShow(false);
                }}
                {...a11yProps(2)}
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              />
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <div className="md:grid-cols-3 lg:flex mt-[-33px] grid grid-cols-2 ml-[20px] lg:ml-[-40px] md:gap-x-2 lg:gap-0 lg:justify-evenly ">
              {workData.map(renderFolder)}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="md:grid-cols-3 lg:flex mt-[-33px] grid grid-cols-2 ml-[20px] lg:ml-[-40px] md:gap-x-2 lg:gap-0 lg:justify-evenly">
              {privateData.map(renderFolder)}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="md:grid-cols-3 lg:flex mt-[-33px] grid grid-cols-2 ml-[20px] lg:ml-[-40px] md:gap-x-2 lg:gap-0 lg:justify-evenly">
              {socialData.map(renderFolder)}
            </div>
          </CustomTabPanel>
        </Box>
      </div>
      {work && show && (
        <FileTamplate
          show={show}
          handleClose={handleClose}
          data={workData}
          setData={handleWorkData}
          name="Work Data"
        />
      )}
      {private1 && show && (
        <FileTamplate
          show={show}
          handleClose={handleClose}
          data={privateData}
          setData={handlePrivateData}
          name="Private Data"
        />
      )}
      {social && show && (
        <FileTamplate
          show={show}
          handleClose={handleClose}
          data={socialData}
          setData={handleSocialData}
          name="Social Data"
        />
      )}
    </div>
  );
};

export default Files;
