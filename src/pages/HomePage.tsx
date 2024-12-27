import React from 'react';
import { Hero } from '../components/hero/Hero';
import { MovieGrid } from '../components/MovieGrid';
import { useMovies } from '../hooks/useMovies';
import { Loader2 } from 'lucide-react';

export default function HomePage() {
  const [search, setSearch] = React.useState('');
  const { movies, loading, error, setFilter } = useMovies(search);

  const handleTrendingClick = () => {
    setFilter('trending');
    setSearch('');
  };

  const handleTopRatedClick = () => {
    setFilter('top_rated');
    setSearch('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Hero 
        searchValue={search}
        onSearchChange={setSearch}
        onTrendingClick={handleTrendingClick}
        onTopRatedClick={handleTopRatedClick}
      />

      <div className="container mx-auto px-4 py-8">
        {error && (
          <div className="text-red-400 text-center mb-8">
            {error}
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
          </div>
        ) : (
          <MovieGrid movies={movies} />
        )}
      </div>
    </div>
  );
}
