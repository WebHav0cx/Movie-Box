import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div className="font-dm-sans py-8">
      <div className="flex flex-col gap-9 justify-center items-center my-8">
        <div className="flex justify-center items-center gap-12">
          <Icon
            className="w-6 h-6 text-gray-900"
            icon="fa-brands:facebook-square"
          />
          <Icon className="w-6 h-6 text-gray-900" icon="fa-brands:instagram" />
          <Icon className="w-6 h-6 text-gray-900" icon="fa-brands:twitter" />
          <Icon className="w-6 h-6 text-gray-900" icon="fa-brands:youtube" />
        </div>
        <div>
          <ul className="flex justify-center items-center gap-12">
            <Link to="#" className="font-bold text-gray-900 text-lg">
              Conditions of Use
            </Link>
            <Link to="#" className="font-bold text-gray-900 text-lg">
              Privacy & Policy
            </Link>
            <Link to="#" className="font-bold text-gray-900 text-lg">
              Press Room
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-500">
            © 2021 MovieBox by Adriana Eka Prayudha{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default footer;
