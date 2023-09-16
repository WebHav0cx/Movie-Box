import React, { useEffect, useState } from "react";
import { fetchRandomBackdrop } from "../../api/tmdb";
import { Icon } from "@iconify/react";
import imdb from "../../assets/images/imdb.png";
import rotten from "../../assets/images/rottentomatoes.png";
import Nav from "../../utilities/nav";

function Header() {
  const [randomBackdrop, setRandomBackdrop] = useState("");
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchRandomMovieBackdrop = async () => {
      const backdropInfo = await fetchRandomBackdrop();
      if (backdropInfo) {
        setRandomBackdrop(backdropInfo.backdropUrl);
        setMovieInfo(backdropInfo.movieInfo);
      }
    };

    fetchRandomMovieBackdrop();
  }, []);

  const formatImdbRating = (rating) => {
    return (rating * 10).toFixed(2);
  };

  return (
    <div className="min-h-screen font-dm-sans">
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${randomBackdrop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Nav />
        {movieInfo && (
          <div className="mt-28 pl-20 text-white flex flex-col gap-4 justify-center my-auto text-left">
            <h1 className="text-5xl font-bold">{movieInfo.title}</h1>
            <div className="flex gap-10">
              <div className="flex gap-3 justify-center items-center">
                <img src={imdb} alt="imdb rating" />
                <p className="text-xs">
                  {formatImdbRating(movieInfo.imdbRating)}/100
                </p>
              </div>
              <div className="flex gap-3 justify-center items-center">
                <img src={rotten} alt="rotten tomatoes rating" />
                <p className="text-xs">{movieInfo.rottenTomatoesRating}%</p>
                {/* // random rotten tomatoes rating */}
              </div>
            </div>
            <p className="text-lg max-w-2xl">{movieInfo.summary}</p>

            <button className="flex gap-2 py-2 px-4 rounded-md bg-rose-700 text-sm font-bold items-center w-44">
              <Icon className="w-5 h-5" icon="carbon:play-filled" />
              <span className="text-sm font-bold">WATCH TRAILER</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
