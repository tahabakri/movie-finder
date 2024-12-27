import React from 'react';
import { Film } from 'lucide-react';
import { motion } from 'framer-motion';

export const Logo: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex items-center gap-3"
  >
    <Film className="w-8 h-8 text-purple-400" />
    <div>
      <h1 className="text-2xl font-bold text-white">MovieFinder</h1>
      <p className="text-sm text-purple-300">Find your next favorite film</p>
    </div>
  </motion.div>
);