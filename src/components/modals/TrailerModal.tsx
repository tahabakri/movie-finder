import React from 'react';
import { X } from 'lucide-react';
import { VideoPlayer } from '../video/VideoPlayer';

interface TrailerModalProps {
  videoId: string | null;
  onClose: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden animate-modal-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        <VideoPlayer videoId={videoId} title="Movie Trailer" />
      </div>
    </div>
  );
};