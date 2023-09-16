import React from "react";
import Tv from "../assets/images/tv.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 pt-10 border border-gray-300 w-56 rounded-tr-[45px] rounded-br-[45px] font-sans">
      <div className="flex gap-6 justify-center items-center font-bold text-2xl">
        <img src={Tv} alt="Movie Box Logo" />
        <p>MovieBox</p>
      </div>
      <ul className="flex flex-col gap-6 justify-center items-center w-full ">
        <Link to="/" className="flex gap-4 justify-center items-center">
          <Icon className="w-[25px] h-[25px] text-gray-400" icon="cil:home" />
          <p className="font-semibold text-xl">Home</p>
        </Link>
        <li className="flex gap-4 justify-center items-center border-r-4 py-4  w-full border-r-rose-800 bg-rose-300">
          <Icon
            className="w-[25px] h-[25px] text-black"
            icon="bx:camera-movie"
          />
          <p className="font-semibold text-xl text-rose-800">Movies</p>
        </li>
        <li className="flex gap-4 justify-center items-center ">
          <Icon
            className="w-[25px] h-[25px] text-gray-400"
            icon="arcticons:youtube-tv"
          />
          <p className="font-semibold text-xl">TV Series</p>
        </li>
        <li className="flex gap-4 justify-center items-center">
          <Icon
            className="w-[25px] h-[25px] text-gray-400"
            icon="fluent:calendar-20-regular"
          />
          <p className="font-semibold text-xl">Upcoming</p>
        </li>
      </ul>

      <div className="border rounded-lg border-rose-600 pt-8 flex flex-col justify-center items-center px-4 w-44 gap-4 pb-4 bg-rose-50">
        <p className="font-semibold text-base">
          Play movie quizes and earn free tickets
        </p>
        <p className="font-medium text-xs text-gray-600">
          50k people are playing now
        </p>
        <button className="bg-rose-300 rounded-[30px] px-4 py-2 text-rose-800 text-xs font-medium">
          Start playing
        </button>
      </div>

      <div className="flex justify-center items-center gap-4">
        <Icon icon="humbleicons:logout" />
        <p>Log out</p>
      </div>
    </div>
  );
}

export default SideBar;
