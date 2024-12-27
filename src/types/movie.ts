export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterUrl: string;
  rating: number;
  releaseDate: string;
  genres: string[];
}

export interface MovieFilters {
  search: string;
  genre: string;
  sortBy: 'rating' | 'date' | 'title';
}