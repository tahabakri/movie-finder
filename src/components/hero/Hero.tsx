import React from 'react';
import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { Logo } from './Logo';
import { SearchBar } from '../SearchBar';
import { QuickActions } from './QuickActions';

interface HeroProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onTrendingClick: () => void;
  onTopRatedClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchValue,
  onSearchChange,
  onTrendingClick,
  onTopRatedClick
}) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center mb-16">
      <HeroBackground />
      
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4">
        <div className="absolute top-8 left-4">
          <Logo />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-8 pt-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white max-w-3xl">
            Discover Amazing Movies
          </h2>
          
          <div className="w-full max-w-2xl">
            <SearchBar 
              value={searchValue} 
              onChange={onSearchChange} 
              placeholder="Search for a movie, actor, or genre..."
            />
          </div>
          
          <QuickActions 
            onTrendingClick={onTrendingClick}
            onTopRatedClick={onTopRatedClick}
          />
        </motion.div>
      </div>
    </div>
  );
};