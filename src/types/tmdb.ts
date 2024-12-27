export interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  genre_ids?: number[];
  genres?: { id: number; name: string; }[];
}

export interface TMDBResponse {
  results: TMDBMovie[];
}