import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  title?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title = 'Video Player' }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=${window.location.origin}`;
  
  return (
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};