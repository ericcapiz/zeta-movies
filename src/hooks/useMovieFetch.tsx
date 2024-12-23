import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

interface Credits {
  cast: {
    credit_id: string;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
  crew: {
    credit_id: string;
    name: string;
    job: string;
  }[];
}

interface MovieState {
  [key: string]: any; // This allows for dynamic properties
  actors?: Credits["cast"];
  directors?: Credits["crew"];
}

export const useMovieFetch = (movieId: string) => {
  const [state, setState] = useState<MovieState>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(Number(movieId));
        const credits = await API.fetchCredits(Number(movieId));

        // Check if we have valid data
        if (!movie || !credits) {
          throw new Error("Missing movie or credits data");
        }

        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error in fetchMovie:", error);
        setError(true);
        setLoading(false);
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
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
