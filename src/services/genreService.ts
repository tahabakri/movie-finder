import { fetchFromApi } from '../utils/api';
import { Genre } from '../types/genre';

interface TMDBGenre {
  id: number;
  name: string;
}

interface TMDBGenreResponse {
  genres: TMDBGenre[];
}

// Curated descriptions for each genre
const genreDescriptions: Record<string, string> = {
  Action: "High-octane thrills and explosive sequences that keep you on the edge of your seat.",
  Comedy: "Light-hearted entertainment guaranteed to make you laugh and smile.",
  Drama: "Compelling character-driven stories that explore the human condition.",
  Horror: "Spine-chilling tales designed to frighten and thrill audiences.",
  // Add more descriptions as needed
};

// Curated backdrop images for each genre
const genreBackdrops: Record<string, string> = {
  Action: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800",
  Comedy: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800",
  Drama: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800",
  Horror: "https://images.unsplash.com/photo-1626128665085-483747621778?auto=format&fit=crop&w=800",
  // Add more backdrops as needed
};

export const getGenres = async (): Promise<Genre[]> => {
  const data = await fetchFromApi<TMDBGenreResponse>('/genre/movie/list');
  
  return data.genres.map(genre => ({
    id: genre.id,
    name: genre.name,
    description: genreDescriptions[genre.name] || `Explore the best of ${genre.name} movies.`,
    posterUrl: genreBackdrops[genre.name] || "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800"
  }));
};