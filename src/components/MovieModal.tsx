import React from 'react';
import { X, Star, Calendar } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal-slide-up">
        <div className="relative aspect-video">
          <img 
            src={movie.posterUrl} 
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">{movie.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>{new Date(movie.releaseDate).getFullYear()}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">{movie.overview}</p>
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <span 
                key={genre}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};