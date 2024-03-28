import React from "react";
import StarsIcon from "@mui/icons-material/Stars";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import VerifiedIcon from '@mui/icons-material/Verified';

import pic from "../../../public/images/1.png";
export default function TopBar() {
  return (
    <div className="flex justify-between  fixed z-10  w-full  p-3 bg-white">
      <div className="flex gap-2 text-2xl  items-center p-2 ">
        <p className="font-bold font-sans text-indigo-800 p-2">arashsharifi</p>{" "}
        <StarsIcon className="text-indigo-800" />
      </div>
      <div className="flex items-center">
        <p className="text-red-500">Please click on the items that have this sign</p>
       < VerifiedIcon className="text-red-500"/>
      </div>
      <div className="flex gap-4 justify-end lg:justify-end   items-center p-2  w-[50%] md:w-[40%]">
        <div className="p-2  flex rounded-full relative cursor-pointer">
          <NotificationsIcon className="text-gray-600" />
          <div className="bg-red-700 flex justify-center items-center w-5 h-5 rounded-full absolute text-[10px] text-white top-[-5px] left-4">
            <span>2</span>
          </div>
        </div>
        <div className="p-2  flex rounded-full relative cursor-pointer">
          <LanguageIcon className="text-gray-600" />
          <div className="bg-red-700 flex justify-center items-center w-5 h-5 rounded-full absolute text-[10px] text-white top-[-5px] left-4">
            <span>2</span>
          </div>
        </div>
        <div className="p-2  flex rounded-full relative cursor-pointer">
          <SettingsIcon className="text-gray-600" />
         
        </div>

        <div className=" rounded-full">
          <img
            className="w-14 h-14 border-2 rounded-full"
            src={pic}
            alt="not"
          />
        </div>
      </div>
    </div>
  );
}
