import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ReportIcon from "@mui/icons-material/Report";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FlagIcon from "@mui/icons-material/Flag";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="bg-slideColor p-2 w-full overflow-y-clip ">
      <div className="flex flex-col gap-1">
        <p className="text-gray-600 font-bold">Dashbord</p>
        <ul className="flex flex-col gap-1 ml-4 mt-2">
          <Link to="/">
            <li className="flex text-gray-600 hover:bg-hoverLi active">
              <HomeIcon />
              <p>Home<VerifiedIcon/></p>
            </li>
          </Link>
          <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer  ">
            <TimelineIcon />
            <p>Analytics</p>
          </li>
          <li className="flex  text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
            <TrendingUpIcon />
            <p>Sales</p>
          </li>
        </ul>
        <p className="text-gray-600 font-bold">Quick Menu</p>
        <ul className="flex flex-col gap-4 ml-4 mt-2">
          <Link to="/users">
            <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
              <GroupIcon />
              <p>Users<VerifiedIcon/></p>
            </li>
          </Link>
          <Link to="/newUser">
            <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
              <PersonAddIcon />
              <p>New Users</p>
            </li>
          </Link>
          <Link to="/products">
            <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
              <Inventory2Icon />
              <p>Products <VerifiedIcon/></p>
            </li>
          </Link>
          <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
            <ReceiptLongIcon />
            <p>Transactions</p>
          </li>
          <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
            <ReportIcon />
            <p>Reports</p>
          </li>
        </ul>
        <p className="text-gray-600 font-bold">Notifications</p>
        <ul className="flex flex-col gap-4 ml-4 mt-2">
          <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
            <MarkEmailReadIcon />
            <p>Mail</p>
          </li>
          <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
            <ThumbUpOffAltIcon />
            <p>FreedBack</p>
          </li>
          <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
            <HomeIcon />
            <p>Message</p>
          </li>
        </ul>
        <p className="text-gray-600 font-bold">Staff</p>
        <ul className="flex flex-col gap-4 ml-4 mt-2">
          <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
            <TextsmsIcon />
            <p>Manage</p>
          </li>
          <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
            <StackedBarChartIcon />
            <p>Analytics</p>
          </li>
          <li className="flex text-gray-600 hover:bg-hoverLi p-2 rounded-lg cursor-pointer ">
            <FlagIcon />
            <p>Reports</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
