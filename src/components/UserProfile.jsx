/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaM } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { FaBehance } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { DataContext } from "../context/DataContext";

const UserProfile = () => {
  const { workData, privateData, socialData } = useContext(DataContext);
  const [dataSummary, setDataSummary] = useState({
    uiUX: 0,
    Design: 0,
    Mobile: 0,
    Illustration: 0,
    Art: 0,
  });
  useEffect(() => {
    const summary = { uiUX: 0, Design: 0, Mobile: 0, Illustration: 0, Art: 0 };
    const allData = [...workData, ...privateData, ...socialData];
    allData.forEach((item) => {
      if (summary[item.title] !== undefined) {
        summary[item.title] += item.value;
      }
    });
    setDataSummary(summary);
  }, [workData, privateData, socialData]);

  return (
    <div className="w-[100%] flex flex-col md:flex-row justify-around gap-x-2 px-2 py-3 shadow-md rounded-md bg-white">
      <div className=" flex flex-col justify-center items-center md:py-1">
        <img
          className="w-[40%] md:w-[70%] lg:w-[90%] max-w-[200px] h-auto rounded-full border-3 border-dotted border-blue-500"
          src="https://le-cdn.website-editor.net/s/c12dbc650c07454db584b927b026272f/dms3rep/multi/opt/testimonial_3-1920w.jpg?Expires=1719753282&Signature=gXR~Qtdzc-pfI75mQfsxY5V-sTasPbBTJL4q7JSZmyRVoZ1QsHeTFWqZtyoKUCQZosRdSu8723Q7un2W0yBnftCE60RlqmDmTA3-gAao-Shn8j8aL2bhzBPmxi7KqPyC6nHdaEp5JgMfSondMWhx-qZoELhmrm-2m7qNg1as6B8cB2D2Ba~jAlxUSdxWM3F38WGh-CUJrXqyQtZa6noQVwcfscgTh7oc6nDaJ1t0uyLoBO8gdDCgETYpJyEMi29uKEd0-yx8YqtAzI8CHapN-VO5vO6NrVNxpppSFtxf6ckkV1A0FfbqzbzAn0O2SMLAYcbPgnlb6A1uTz2difqAYg__&Key-Pair-Id=K2NXBXLF010TJW"
          alt=""
        />
        <p className="flex bg-[#FD5991] py-1 text-white text-xs rounded-2xl mt-2 mb-0  w-[40px] justify-center ">
          Pro
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mr-4 md:items-start md:justify-start">
        <h3 className="text-gray-500 font-bold ">Julee Cruise</h3>
        <p className="flex py-2 flex-col">
          <span className="text-gray-500 text-xs">Product Designer</span>
          <span className="text-[#859BFA] text-sm  ">
            <a
              href="https://iphtechnologies.org/"
              className="no-underline "
              target="blank"
            >
              IPHTechnologies.org
            </a>
          </span>
        </p>
        <div className="flex gap-x-2">
          {Object.entries(dataSummary).map(([key, value]) => {
            let bgColor, textColor, tooltipContent;

            switch (key) {
              case "uiUX":
                bgColor = "bg-[#cad3fb]";
                textColor = "text-[#8599fa]";
                tooltipContent = `UI/UX - ${value} Files`;
                break;
              case "Design":
                bgColor = "bg-[#fac1d5]";
                textColor = "text-[#FD5991]";
                tooltipContent = `Design - ${value} Files`;
                break;
              case "Mobile":
                bgColor = "bg-[#c2d8d1]";
                textColor = "text-[#5dd0aa]";
                tooltipContent = `Mobile - ${value} Files`;
                break;
              case "Illustration":
              case "Art":
                bgColor = "bg-[#fce8cb]";
                textColor = "text-[#fcc36e]";
                tooltipContent = `${key} - ${value} Files`;
                break;
              default:
                bgColor = "";
                textColor = "";
                tooltipContent = `${key} - ${value} Files`;
            }

            return (
              <p
                key={key}
                className={`flex text-xs ${bgColor} ${textColor} px-1 py-1 rounded-md`}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={tooltipContent}
              >
                {key === "uiUX" ? "UI/UX" : key}
              </p>
            );
          })}
        </div>

        <div className="flex mt-2 gap-x-5">
          <a href="https://www.facebook.com/IPHTechnologies/" target="blank">
            <p className="text-gray-400">
              <GrFacebookOption />
            </p>
          </a>
          <a href="mailto:hr@iphtechnologies.com" target="blank">
            <p className="text-gray-400 ">
              <FaM />
            </p>
          </a>
          <a href="https://iphtechnologies.org/" target="blank">
            <p className="text-gray-400 ">
              <IoBasketballOutline />
            </p>
          </a>
          <a href="" target="blank">
            <p className="text-gray-400 ">
              <FaBehance />
            </p>
          </a>
          <a href="https://www.instagram.com/iphtechnologies/" target="blank">
            <p className="text-gray-400 ">
              <FaInstagram />
            </p>
          </a>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default UserProfile;
