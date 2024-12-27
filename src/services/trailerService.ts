import { fetchFromApi } from '../utils/api';

interface TMDBVideo {
  key: string;
  site: string;
  type: string;
}

interface TMDBVideoResponse {
  results: TMDBVideo[];
}

export const getMovieTrailer = async (movieId: number): Promise<string | null> => {
  try {
    const data = await fetchFromApi<TMDBVideoResponse>(`/movie/${movieId}/videos`);
    
    // Find official trailer from YouTube
    const trailer = data.results.find(
      video => video.site === 'YouTube' && 
      (video.type === 'Trailer' || video.type === 'Teaser')
    );
    
    // Use YouTube's privacy-enhanced mode with origin parameter
    return trailer 
      ? `https://www.youtube-nocookie.com/embed/${trailer.key}?origin=${window.location.origin}` 
      : null;
  } catch (error) {
    console.error('Failed to fetch trailer:', error);
    return null;
  }
};