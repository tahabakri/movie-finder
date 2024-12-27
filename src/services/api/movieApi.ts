import { fetchFromApi } from '../../utils/api';
import { TMDBMovie, TMDBResponse } from '../../types/tmdb';

export const fetchMovieSearch = async (query: string) => {
  return await fetchFromApi<TMDBResponse>('/search/movie', { query });
};

export const fetchPopularMovies = async () => {
  return await fetchFromApi<TMDBResponse>('/movie/popular');
};

export const fetchTrendingMovies = async () => {
  return await fetchFromApi<TMDBResponse>('/trending/movie/week');
};

export const fetchTopRatedMovies = async () => {
  return await fetchFromApi<TMDBResponse>('/movie/top_rated');
};

export const fetchMovieById = async (id: number) => {
  return await fetchFromApi<TMDBMovie>(`/movie/${id}`, { append_to_response: 'videos,credits' });
};