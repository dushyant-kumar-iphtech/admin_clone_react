import React, { useState } from "react";
import today, { thisWeek, thisMonth } from "../data/WrokData";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import "../App.css";
import TaskModal from "../tamplate/TaskModal";
import { Tooltip } from "react-tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const labelColors = {
  New: "blue",
  InProgress: "darkgoldenrod",
  Complete: "green",
  Cancel: "red",
};

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

const Tasks = () => {
  const [value, setValue] = React.useState(0);

  const [todayTab, setTodayTab] = useState(true);
  const [weekTab, setWeekTab] = useState(false);
  const [monthTab, setMonthTab] = useState(false);

  const [todayData, setTodayData] = useState(today);
  const [weekData, setWeekData] = useState(thisWeek);
  const [monthData, setMonthData] = useState(thisMonth);
  const [newData, setNewData] = useState({});
  const [selectedValue, setSelectedValue] = useState(null);
  const [editTamplate, setEditTamplate] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // Handle opening the menu
  const handleClick = (event, value) => {
    setAnchorEl(event.currentTarget);
    setSelectedValue(value);
  };

  // Handle closing the menu
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  function handleEditClickToday() {
    setNewData(todayData.find((a) => a.id === selectedValue.id));
    handleShow();
    handleCloseMenu();
  }

  function handleEditClickWeek() {
    setNewData(weekData.find((a) => a.id === selectedValue.id));
    handleShow();
    handleCloseMenu();
  }

  function handleEditClickMonth() {
    setNewData(monthData.find((a) => a.id === selectedValue.id));
    handleShow();
    handleCloseMenu();
  }

  function handleTodayData(newData) {
    console.log("Day new Data is", newData);
    setTodayData(
      todayData.map((data) => {
        if (data.id === newData.id) {
          return newData;
        } else {
          return data;
        }
      })
    );
  }
  function handleWeekData(newData) {
    console.log("week new Data is", newData);
    setWeekData(
      weekData.map((data) => {
        if (data.id === newData.id) {
          return newData;
        } else {
          return data;
        }
      })
    );
  }
  function handleMonthData(newData) {
    console.log("month new data is", newData);
    setMonthData(
      monthData.map((data) => {
        if (data.id === newData.id) {
          return newData;
        } else {
          return data;
        }
      })
    );
  }
  const truncateString = (str, numWords) => {
    const words = str.split(" ");
    if (words.length <= numWords) {
      return str;
    }
    return words.slice(0, numWords).join(" ") + "...";
  };

  const getTooltipId = (title) => {
    const words = title.split(" ");
    return words.length > 5 ? "my2-tooltip" : null;
  };

  const getTooltipContent = (title) => {
    const words = title.split(" ");
    return words.length > 5 ? title : null;
  };

  return (
    <div className="w-[100%] shadow-md rounded-sm max-h-[70vh] bg-white pt-2">
      <p className="ml-3 text-2xl text-gray-500 mb-0 ">Tasks</p>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Today"
              onClick={() => {
                setTodayTab(true);
                setWeekTab(false);
                setMonthTab(false);
              }}
              {...a11yProps(0)}
              sx={{
                fontSize: "0.65rem",
                fontWeight: "bold",
                textTransform: "none",
              }}
            />
            <Tab
              label="This Week"
              onClick={() => {
                setTodayTab(false);
                setWeekTab(true);
                setMonthTab(false);
              }}
              {...a11yProps(1)}
              sx={{
                fontSize: "0.65rem",
                fontWeight: "bold",
                textTransform: "none",
              }}
            />
            <Tab
              label="This Month"
              onClick={() => {
                setTodayTab(false);
                setWeekTab(false);
                setMonthTab(true);
              }}
              {...a11yProps(2)}
              sx={{
                fontSize: "0.65rem",
                fontWeight: "bold",
                textTransform: "none",
              }}
            />
            {console.log("Today-->", todayTab)}
            {console.log("Week-->", weekTab)}
            {console.log("month-->", monthTab)}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="max-h-[48vh] mt-[-20px] overflow-y-auto custom-scrollbar">
            <TableContainer component={Paper} sx={{ width: "100%" }}>
              <Table sx={{ width: "100%" }}>
                <TableBody sx={{ width: "100%" }}>
                  {todayData.map((row, index) => (
                    <TableRow key={index} sx={{ width: "100%" }}>
                      <TableCell
                        sx={{
                          fontSize: "0.615rem",
                          color: "gray",
                          fontWeight: "bold",
                          textAlign: "left",
                          paddingLeft: "0px", // Reduce left padding
                          paddingRight: "0px",
                          flex: "0 0 50px",
                        }}
                      >
                        {row.time}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "0.78rem",
                          textAlign: "left",
                          paddingLeft: "10px",
                          paddingRight: "0px",
                          whiteSpace: "nowrap",
                          flex: "1 1 auto",
                        }}
                        data-tooltip-id={getTooltipId(row.title)}
                        data-tooltip-content={getTooltipContent(row.title)}
                      >
                        <div
                          style={{
                            backgroundColor: labelColors[row.label],
                            height: "8px",
                            width: "8px",
                            borderRadius: "50%",
                            display: "inline-block",
                            marginRight: "2px",
                          }}
                        ></div>
                        {truncateString(row.title, 5)}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "right",
                          paddingLeft: "0px",
                          paddingRight: "0px",
                          flex: "0 0 30px",
                        }}
                      >
                        <div className=" ">
                          <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={(event) => handleClick(event, row)}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleCloseMenu}
                            className="custom-menu"
                          >
                            <MenuItem
                              className="custom-menu-item"
                              onClick={() => {
                                handleEditClickToday(row);
                                setEditTamplate(true);
                              }}
                            >
                              Edit
                            </MenuItem>
                            <MenuItem
                              className="custom-menu-item"
                              onClick={() => {
                                handleEditClickToday(row);
                                setEditTamplate(false);
                              }}
                            >
                              View
                            </MenuItem>
                          </Menu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="max-h-[48vh] mt-[-20px] overflow-y-auto custom-scrollbar">
            <TableContainer component={Paper} sx={{ width: "100%" }}>
              <Table sx={{ width: "100%" }}>
                <TableBody sx={{ width: "100%" }}>
                  {weekData.map((row, index) => (
                    <TableRow key={index} sx={{ width: "100%" }}>
                      <TableCell
                        sx={{
                          fontSize: "0.615rem",
                          color: "gray",
                          fontWeight: "bold",
                          textAlign: "left",
                          paddingLeft: "0px", // Reduce left padding
                          paddingRight: "0px",
                          flex: "0 0 50px",
                        }}
                      >
                        {row.time}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "0.78rem",
                          textAlign: "left",
                          paddingLeft: "10px",
                          paddingRight: "0px",
                          whiteSpace: "nowrap",
                          flex: "1 1 auto",
                        }}
                        data-tooltip-id={getTooltipId(row.title)}
                        data-tooltip-content={getTooltipContent(row.title)}
                      >
                        <div
                          style={{
                            backgroundColor: labelColors[row.label],
                            height: "8px",
                            width: "8px",
                            borderRadius: "50%",
                            display: "inline-block",
                            marginRight: "2px",
                          }}
                        ></div>
                        {truncateString(row.title, 5)}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "right",
                          paddingLeft: "0px",
                          paddingRight: "0px",
                          flex: "0 0 30px",
                        }}
                      >
                        <div className=" ">
                          <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={(event) => handleClick(event, row)}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleCloseMenu}
                            className="custom-menu"
                          >
                            <MenuItem
                              className="custom-menu-item"
                              onClick={() => {
                                handleEditClickWeek(row);
                                setEditTamplate(true);
                              }}
                            >
                              Edit
                            </MenuItem>
                            <MenuItem
                              className="custom-menu-item"
                              onClick={() => {
                                handleEditClickWeek(row);
                                setEditTamplate(false);
                              }}
                            >
                              View
                            </MenuItem>
                          </Menu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="max-h-[48vh] mt-[-20px] overflow-y-auto custom-scrollbar">
            <TableContainer component={Paper} sx={{ width: "100%" }}>
              <Table sx={{ width: "100%" }}>
                <TableBody sx={{ width: "100%" }}>
                  {monthData.map((row, index) => (
                    <TableRow key={index} sx={{ width: "100%" }}>
                      <TableCell
                        sx={{
                          fontSize: "0.615rem",
                          color: "gray",
                          fontWeight: "bold",
                          textAlign: "left",
                          paddingLeft: "0px", // Reduce left padding
                          paddingRight: "0px",
                          flex: "0 0 50px",
                        }}
                      >
                        {row.time}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "0.78rem",
                          textAlign: "left",
                          paddingLeft: "10px",
                          paddingRight: "0px",
                          whiteSpace: "nowrap",
                          flex: "1 1 auto",
                        }}
                        data-tooltip-id={getTooltipId(row.title)}
                        data-tooltip-content={getTooltipContent(row.title)}
                      >
                        <div
                          style={{
                            backgroundColor: labelColors[row.label],
                            height: "8px",
                            width: "8px",
                            borderRadius: "50%",
                            display: "inline-block",
                            marginRight: "2px",
                          }}
                        ></div>
                        {truncateString(row.title, 5)}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "right",
                          paddingLeft: "0px",
                          paddingRight: "0px",
                          flex: "0 0 30px",
                        }}
                      >
                        <div className=" ">
                          <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={(event) => handleClick(event, row)}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleCloseMenu}
                            className="custom-menu"
                          >
                            <MenuItem
                              className="custom-menu-item"
                              onClick={() => {
                                handleEditClickMonth(row);
                                setEditTamplate(true);
                              }}
                            >
                              Edit
                            </MenuItem>
                            <MenuItem
                              className="custom-menu-item"
                              onClick={() => {
                                handleEditClickMonth(row);
                                setEditTamplate(false);
                              }}
                            >
                              View
                            </MenuItem>
                          </Menu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CustomTabPanel>
      </Box>
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 5px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>

      {showModal && todayTab && (
        <TaskModal
          data={newData}
          show={showModal}
          handleClose={handleClose}
          setData={handleTodayData}
          type={editTamplate ? "(Edit)" : "(View)"}
          name="Today Data"
        />
      )}

      {showModal && weekTab && (
        <TaskModal
          data={newData}
          show={showModal}
          handleClose={handleClose}
          setData={handleWeekData}
          type={editTamplate ? "(Edit)" : "(View)"}
          name="Week Data"
        />
      )}
      {showModal && monthTab && (
        <TaskModal
          data={newData}
          show={showModal}
          handleClose={handleClose}
          setData={handleMonthData}
          type={editTamplate ? "(Edit)" : "(View)"}
          name="Week Data"
        />
      )}
      <Tooltip id="my2-tooltip" className="max-w-[35vw] lg:max-w-[15vw]" />
    </div>
  );
};

export default Tasks;
