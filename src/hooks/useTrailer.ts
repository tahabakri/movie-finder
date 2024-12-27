import { useState } from 'react';
import { getMovieTrailer } from '../services/trailerService';

export const useTrailer = () => {
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  const loadTrailer = async (movieId: number) => {
    const url = await getMovieTrailer(movieId);
    setTrailerUrl(url);
  };

  const closeTrailer = () => {
    setTrailerUrl(null);
  };

  return { trailerUrl, loadTrailer, closeTrailer };
};