import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api/tmdb";
import Spinner from "../../utilities/spinner";

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
        console.error("Error fetching movie details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!movieDetails) {
    // Show the Spinner component while loading
    return <Spinner />;
  }

  return (
    <div>
      <div className="flex items-center">
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="w-32 h-48 rounded-md mr-4"
        />
        <div>
          <h2>{movieDetails.title}</h2>
          <p>Duration: {formatRuntime(movieDetails.runtime)}</p>
          <p>Year: {movieDetails.release_date.slice(0, 4)}</p>
          <p>PG Rating: {getRatingText(movieDetails.vote_average)}</p>
          <p>
            Action Type:{" "}
            {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            Drama: {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>Summary: {movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
