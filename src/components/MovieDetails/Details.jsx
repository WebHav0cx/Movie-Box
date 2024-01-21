import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api/tmdb";
import Spinner from "../../utilities/spinner";
import { Icon } from "@iconify/react";

function getRatingText(rating) {
  if (rating >= 8) {
    return "PG-13";
  } else if (rating >= 6) {
    return "PG";
  } else {
    return "Not Rated";
  }
}

function formatRuntime(runtime) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
}

function Details() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
      } catch (error) {
        alert("Error fetching movie details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!movieDetails) {
    // Show the Spinner component while loading
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col ">
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="w-32 h-48 rounded-md mr-4"
        />
        <div className="flex gap-2 items-center ">
          <h2 className="font-bold ">{movieDetails.title} </h2>
          <Icon icon="radix-icons:dot-filled" />
          <p className="font-bold">{movieDetails.release_date.slice(0, 4)}</p>
          <Icon icon="radix-icons:dot-filled" />
          <p className="font-bold">
            {getRatingText(movieDetails.vote_average)}
          </p>
          <Icon icon="radix-icons:dot-filled" />
          <p className="font-bold">{formatRuntime(movieDetails.runtime)}</p>
          {[...new Set(movieDetails.genres.map((genre) => genre.name))].map(
            (uniqueGenre) => (
              <Link
                className="text-pink-600 rounded-full border-2 border-pink-200 font-medium px-5 "
                key={uniqueGenre}
              >
                {uniqueGenre}
              </Link>
            )
          )}
        </div>
      </div>
      <div className="flex gap-7">
        <div>
          <p>{movieDetails.overview}</p>
          <p>{movieDetails.director}</p>
        </div>
        <div>
          <button>show time</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
