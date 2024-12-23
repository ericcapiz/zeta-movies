import { useState, useEffect } from "react";
import API, { MovieResponse, Credits, Crew } from "../API";
import { isPersistedState } from "../helpers";

export interface MovieState extends MovieResponse {
  actors: Credits["cast"];
  directors: Credits["crew"];
}

export const useMovieFetch = (movieId: string) => {
  const [state, setState] = useState<MovieState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(Number(movieId));
        const credits = await API.fetchCredits(Number(movieId));

        if (!movie || !credits) {
          throw new Error("Movie or credits not found");
        }

        const directors = credits.crew.filter(
          (member: Crew) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  useEffect(() => {
    if (state) {
      sessionStorage.setItem(movieId, JSON.stringify(state));
    }
  }, [movieId, state]);

  return { state, loading, error };
};
