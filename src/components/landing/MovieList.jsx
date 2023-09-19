import React, { useEffect, useState } from "react";
import { fetchTopMovies } from "../../api/tmdb";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function MovieList() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const movies = await fetchTopMovies();
        // Add an 'isClicked' property to each movie item
        const moviesWithClickState = movies.slice(0, 10).map((movie) => ({
          ...movie,
          isClicked: false,
        }));
        setTopMovies(moviesWithClickState);
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  const toggleHeart = (movieIndex) => {
    setTopMovies((prevMovies) =>
      prevMovies.map((movie, index) =>
        index === movieIndex ? { ...movie, isClicked: !movie.isClicked } : movie
      )
    );
  };

  return (
    <div className="flex flex-col items-center my-8 pt-8">
      <div className="mb-4 flex justify-between w-full px-20">
        <p className="text-2xl font-bold">Featured Movies</p>
        <button className="text-rose-700 flex items-center">
          <p>See More</p> <Icon icon="octicon:chevron-right-16" />
        </button>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 px-20">
          {topMovies.map((movie, index) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              data-testid="movie-card"
              className="bg-white rounded-lg max-w-[250px] relative"
            >
              <div className="absolute left-36 top-5">
                <div
                  className={`w-7 h-7 rounded-full ${
                    movie.isClicked ? "bg-black" : "bg-[#F3F4F6] bg-opacity-80"
                  } flex items-center justify-center cursor-pointer`}
                  onClick={() => toggleHeart(index)}
                >
                  <Icon
                    className={`text-${movie.isClicked ? "black" : "gray-300"}`}
                    icon="ri:heart-fill"
                  />
                </div>
              </div>
              <img
                data-testid="movie-poster"
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt={movie.title}
              />
              <p data-testid="movie-title" className="font-bold text-lg">
                {movie.title}
              </p>
              <p data-testid="movie-release-date">{movie.release_date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
