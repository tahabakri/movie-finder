import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Play } from 'lucide-react';
import { useMovie } from '../hooks/useMovie';
import { useMovieTrailer } from '../hooks/useMovieTrailer';
import { TrailerModal } from '../components/modals/TrailerModal';
import { Loader2 } from 'lucide-react';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const movieId = parseInt(id || '0', 10);
  const { movie, loading, error } = useMovie(movieId);
  const { videoId, loadTrailer, closeTrailer } = useMovieTrailer();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col items-center justify-center gap-4">
        <p className="text-white text-xl">{error || 'Movie not found'}</p>
        <Link 
          to="/"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={movie.posterUrl} 
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{movie.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(movie.releaseDate).getFullYear()}</span>
                </div>
                <button
                  onClick={() => loadTrailer(movie.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Watch Trailer
                </button>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {movie.overview}
              </p>

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
      </div>

      <TrailerModal videoId={videoId} onClose={closeTrailer} />
    </div>
  );
}