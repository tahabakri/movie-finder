import { useState } from 'react';
import { getMovieVideos } from '../services/video/videoService';

export const useMovieTrailer = () => {
  const [videoId, setVideoId] = useState<string | null>(null);

  const loadTrailer = async (movieId: number) => {
    try {
      const videos = await getMovieVideos(movieId);
      const trailer = videos.find(v => v.type === 'Trailer') || videos[0];
      setVideoId(trailer?.id || null);
    } catch (error) {
      console.error('Failed to load trailer:', error);
      setVideoId(null);
    }
  };

  const closeTrailer = () => setVideoId(null);

  return { videoId, loadTrailer, closeTrailer };
};