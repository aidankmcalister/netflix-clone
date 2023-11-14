import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

const fetchMovieImages = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie images:", error);
    throw error;
  }
};

const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results.slice(0, 5);
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results.slice(0, 25);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

const fetchTrendingShows = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/tv/day?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results.slice(0, 25);
  } catch (error) {
    console.error("Error fetching trending shows:", error);
    throw error;
  }
};

export {
  fetchMovieDetails,
  fetchMovieImages,
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchTrendingShows,
};
