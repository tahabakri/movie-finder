import { Movie } from '../types/movie';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config/api';
import { 
  fetchMovieSearch, 
  fetchPopularMovies, 
  fetchTrendingMovies, 
  fetchTopRatedMovies,
  fetchMovieById
} from './api/movieApi';
import { formatMovieData } from '../utils/movieFormatters';

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const data = await fetchMovieSearch(query);
  return data.results.map(formatMovieData);
};

export const getPopularMovies = async (): Promise<Movie[]> => {
  const data = await fetchPopularMovies();
  return data.results.map(formatMovieData);
};

export const getTrendingMovies = async (): Promise<Movie[]> => {
  const data = await fetchTrendingMovies();
  return data.results.map(formatMovieData);
};

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  const data = await fetchTopRatedMovies();
  return data.results.map(formatMovieData);
};

export const getMovieDetails = async (id: number): Promise<Movie> => {
  const movie = await fetchMovieById(id);
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    posterUrl: `${IMAGE_BASE_URL}/${POSTER_SIZE}${movie.poster_path}`,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    genres: movie.genres?.map(g => g.name) || [],
  };
};