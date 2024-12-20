const API_URL = "https://api.themoviedb.org/3/";

// Updated URL construction without API key
const SEARCH_BASE_URL = `${API_URL}search/movie?language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?language=en-US`;

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "w780";
const POSTER_SIZE = "w780";

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
