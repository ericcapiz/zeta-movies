import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      console.log("Movies data in hook:", movies);

      if (!movies) {
        throw new Error("No movies data received");
      }

      setState((prev) => ({
        ...movies,
        results:
          page > 1
            ? [...(prev.results || []), ...(movies.results || [])]
            : [...(movies.results || [])],
      }));
    } catch (error) {
      setError(true);
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial render and search
  useEffect(() => {
    // Clear state when searchTerm changes
    setState(initialState);

    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");
      if (sessionState && sessionState.results) {
        console.log("Loading from session storage:", sessionState);
        setState(sessionState);
        return;
      }
    }

    console.log("Fetching movies with searchTerm:", searchTerm);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm && state.results && state.results.length > 0) {
      console.log("Saving to session storage:", state);
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
