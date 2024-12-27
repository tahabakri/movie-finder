import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="relative group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="aspect-[2/3] relative overflow-hidden">
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{movie.title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="font-semibold">{movie.rating.toFixed(1)}</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{movie.overview}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {movie.genres.slice(0, 2).map((genre) => (
            <span 
              key={genre}
              className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};