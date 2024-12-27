import React from 'react';
import { TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuickActionProps {
  onTrendingClick: () => void;
  onTopRatedClick: () => void;
}

export const QuickActions: React.FC<QuickActionProps> = ({ 
  onTrendingClick, 
  onTopRatedClick 
}) => {
  const buttonClass = "flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-4"
    >
      <button 
        onClick={onTrendingClick}
        className={`${buttonClass} bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500`}
      >
        <TrendingUp className="w-5 h-5" />
        Trending Movies
      </button>
      <button 
        onClick={onTopRatedClick}
        className={`${buttonClass} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500`}
      >
        <Star className="w-5 h-5" />
        Top Rated
      </button>
    </motion.div>
  );
};