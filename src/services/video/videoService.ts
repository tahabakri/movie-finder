import { fetchFromApi } from '../../utils/api';

interface VideoDetails {
  id: string;
  title: string;
  site: string;
  type: string;
}

export const getMovieVideos = async (movieId: number): Promise<VideoDetails[]> => {
  try {
    const data = await fetchFromApi<{ results: any[] }>(`/movie/${movieId}/videos`);
    
    return data.results
      .filter(video => video.site === 'YouTube')
      .map(video => ({
        id: video.key,
        title: video.name,
        site: video.site,
        type: video.type
      }));
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    return [];
  }
};