import React from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from './MovieCard';
import { Movie } from '../types/movie';

interface MovieGridProps {
  movies: Movie[];
}

export const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};