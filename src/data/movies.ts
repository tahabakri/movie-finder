import { Movie } from '../types/movie';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800",
    rating: 8.8,
    releaseDate: "2010-07-16",
    genres: ["Action", "Sci-Fi", "Thriller"]
  },
  {
    id: 2,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800",
    rating: 9.0,
    releaseDate: "2008-07-18",
    genres: ["Action", "Crime", "Drama"]
  },
  {
    id: 3,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800",
    rating: 8.6,
    releaseDate: "2014-11-07",
    genres: ["Adventure", "Drama", "Sci-Fi"]
  }
];