import { TMDBMovie } from '../types/tmdb';
import { Movie } from '../types/movie';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config/api';

const GENRE_MAP: Record<number, string> = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};

export const formatMovieData = (movie: TMDBMovie): Movie => ({
  id: movie.id,
  title: movie.title,
  overview: movie.overview,
  posterUrl: movie.poster_path ? `${IMAGE_BASE_URL}/${POSTER_SIZE}${movie.poster_path}` : '/placeholder.jpg',
  rating: movie.vote_average,
  releaseDate: movie.release_date,
  genres: movie.genres?.map(g => g.name) || 
    movie.genre_ids?.map(id => GENRE_MAP[id] || 'Other') || 
    []
});