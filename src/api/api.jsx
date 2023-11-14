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

const fetchRandomContinueWatching = async () => {
  try {
    const randomCountTV = Math.floor(Math.random() * 6) + 1;
    const randomCountMovies =
      Math.floor(Math.random() * (6 - randomCountTV)) + 1;
    const responseTV = await axios.get(
      `${BASE_URL}/trending/tv/day?api_key=${API_KEY}&language=en-US&page=1`
    );
    const responseMovies = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`
    );

    const trendingTVShows = responseTV.data.results
      .slice(4)
      .sort(() => Math.random() - 0.5)
      .slice(0, randomCountTV);
    const trendingMovies = responseMovies.data.results
      .slice(4)
      .sort(() => Math.random() - 0.5)
      .slice(0, randomCountMovies);

    const continueWatchingList = [...trendingTVShows, ...trendingMovies].slice(
      0,
      6
    );

    return continueWatchingList;
  } catch (error) {
    console.error("Error fetching random media:", error);
    throw error;
  }
};

const fetchNetflixOriginals = async () => {
  try {
    const randomCountTV = Math.floor(Math.random() * 5) + 1;
    const randomCountMovies = Math.floor(Math.random() * 5) + 1;

    const responseTV = await axios.get(
      `${BASE_URL}/trending/tv/day?api_key=${API_KEY}&language=en-US&page=1`
    );

    const responseMovies = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`
    );

    const trendingTVShows = responseTV.data.results
      .slice(4)
      .sort(() => Math.random() - 0.5)
      .slice(0, randomCountTV);

    const trendingMovies = responseMovies.data.results
      .slice(4)
      .sort(() => Math.random() - 0.5)
      .slice(0, randomCountMovies);

    const netflixOriginalsList = [...trendingTVShows, ...trendingMovies].slice(
      0,
      10
    );

    return netflixOriginalsList;
  } catch (error) {
    console.error("Error fetching Netflix Originals:", error);
    throw error;
  }
};

const fetchMediaByGenre = async ({ media, genre, originalLanguage }) => {
  const genreMapTv = {
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    fantasy: 14,
    history: 36,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    "science fiction": 878,
    "tv movie": 10770,
    thriller: 53,
    war: 10752,
    western: 37,
  };

  try {
    const genreNum = genreMapTv[genre.toLowerCase()];
    if (genreNum === undefined) {
      console.log(`Unknown genre: ${genre}`);
      return;
    }

    const apiUrl =
      `${BASE_URL}/discover/${media}?api_key=${API_KEY}&with_genres=${genreNum}` +
      (originalLanguage ? `&with_original_language=${originalLanguage}` : "") +
      `&page=1`;

    const response = await axios.get(apiUrl);
    const results = response.data.results;

    // console.log(
    //   `Fetched ${results.length} ${media} in the ${genre} genre from page 1. First few titles:`,
    //   results.slice(0, 5).map((item) => item.title)
    // );
    console.log(
      `Fetched ${results.length} ${media} in the ${genre} genre from page 1. First few titles:`,
      results.slice(0, 5).map((item) => item.title)
    );

    return results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export {
  fetchMovieDetails,
  fetchMovieImages,
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchTrendingShows,
  fetchRandomContinueWatching,
  fetchMediaByGenre,
  fetchNetflixOriginals,
};
