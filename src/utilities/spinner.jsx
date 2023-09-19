import React from "react";
import spinner from "../assets/images/spinner.gif";

function Spinner() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <img src={spinner} alt="Loading..." />
    </div>
  );
}

export default Spinner;
