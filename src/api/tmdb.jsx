import axios from "axios";

const TMDB_API_KEY = process.env.VITE_APP_TMDB_API_KEY;

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const fetchTopMovies = async () => {
  try {
    const response = await instance.get("/movie/top_rated");
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await instance.get("/search/movie", {
      params: {
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await instance.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchRandomBackdrop = async () => {
  try {
    const popularMoviesResponse = await instance.get("/movie/popular");
    const randomMovie =
      popularMoviesResponse.data.results[
        Math.floor(Math.random() * popularMoviesResponse.data.results.length)
      ];

    if (randomMovie?.backdrop_path) {
      // Fetch movie details for the selected random movie
      const movieDetailsResponse = await instance.get(
        `/movie/${randomMovie.id}`
      );
      const movieInfo = {
        backdropUrl: `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`,
        movieInfo: {
          title: movieDetailsResponse.data.title,
          summary: movieDetailsResponse.data.overview,
          imdbRating: movieDetailsResponse.data.vote_average,
          rottenTomatoesRating: Math.floor(Math.random() * 100) + 1, // Random Rotten Tomatoes rating for illustration
        },
      };
      return movieInfo;
    }
  } catch (error) {
    throw error;
  }

  return null; // Return null if no valid backdrop is found
};
