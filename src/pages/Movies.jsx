import React, { useState, useEffect } from "react";
import SideBar from "../utilities/SideBar";
import Details from "../components/MovieDetails/Details";
import spinner from "../assets/images/spinner.gif";

function Movies() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000 milliseconds (3 seconds)

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="flex gap-8">
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-screen">
          <img src={spinner} alt="Loading..." />
        </div>
      ) : (
        <>
          <SideBar />
          <Details />
        </>
      )}
    </div>
  );
}

export default Movies;
