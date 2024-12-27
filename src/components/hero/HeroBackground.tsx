import React from 'react';
import { motion } from 'framer-motion';

export const HeroBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
    <motion.img
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000"
      alt="Movie Background"
      className="w-full h-full object-cover object-center"
    />
  </div>
);