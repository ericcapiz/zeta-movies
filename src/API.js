import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL } from "./config";

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    try {
      const endpoint = searchTerm
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

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in fetchMovies:", error);
      throw error;
    }
  },
  fetchMovie: async (movieId) => {
    try {
      const endpoint = `${API_URL}movie/${movieId}`;

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Movie fetch failed: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie:", error);
      throw error;
    }
  },
  fetchCredits: async (movieId) => {
    try {
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits`;

      const response = await fetch(creditsEndpoint, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Credits fetch failed: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching credits:", error);
      throw error;
    }
  },
};

export default apiSettings;
