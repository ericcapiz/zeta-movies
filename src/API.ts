import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL } from "./config";

// interface is what we want to return

// Types for Movie results
interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  original_title: string;
  vote_average: number;
}

// Types for API responses
interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface MovieResponse extends Movie {
  budget: number;
  revenue: number;
  runtime: number;
  status: string;
}

const apiSettings = {
  fetchMovies: async (
    searchTerm: string,
    page: number
  ): Promise<MoviesResponse> => {
    try {
      const endpoint: string = searchTerm
        ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      });

      if (!response.ok) {
        console.error("Response not OK:", {
          status: response.status,
          statusText: response.statusText,
          url: endpoint,
        });
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: MoviesResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error in fetchMovies:", error);
      throw error;
    }
  },

  fetchMovie: async (movieId: number): Promise<MovieResponse> => {
    try {
      const endpoint: string = `${API_URL}movie/${movieId}`;

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Movie fetch failed: ${response.status}`);
      }

      const data: MovieResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie:", error);
      throw error;
    }
  },
};

export default apiSettings;
