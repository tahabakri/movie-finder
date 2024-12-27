import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';
import { searchMovies, getPopularMovies, getTrendingMovies, getTopRatedMovies } from '../services/movieService';

type FilterType = 'popular' | 'trending' | 'top_rated';

export const useMovies = (searchQuery: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>('popular');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let data: Movie[];
        if (searchQuery) {
          data = await searchMovies(searchQuery);
        } else {
          switch (filter) {
            case 'trending':
              data = await getTrendingMovies();
              break;
            case 'top_rated':
              data = await getTopRatedMovies();
              break;
            default:
              data = await getPopularMovies();
          }
        }
        setMovies(data);
      } catch (err) {
        setError('Failed to fetch movies');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchMovies, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, filter]);

  return { movies, loading, error, setFilter };
};