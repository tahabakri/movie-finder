import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';
import { getMovieDetails } from '../services/movieService';

export const useMovie = (id: number) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('Failed to fetch movie details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return { movie, loading, error };
};