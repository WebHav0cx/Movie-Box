import React from "react";
import Logo from "../assets/images/Logo.png";
import menu from "../assets/images/menu.png";
import { Icon } from "@iconify/react";

function nav() {
  return (
    <div className="bg-green-900 px-8 py-2">
      <ul className="flex justify-between items-center">
        <li>
          <div className="flex">
            <img src={Logo} alt="Logo" srcset="" />
          </div>
        </li>
        <li className="relative">
          <input
            className="w-[525px] bg-transparent border-gray-300 border-2 rounded-md px-2 py-2"
            type="text"
            name=""
          />
          <button className="absolute right-4 top-3">
            <Icon className="text-white w-4 h-4" icon="fa:search" />
          </button>
        </li>
        <li>
          <div className="flex justify-center items-center gap-4">
            <p className="font-bold text-base text-white ">Sign In</p>
            <img src={menu} alt="" srcset="" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default nav;
