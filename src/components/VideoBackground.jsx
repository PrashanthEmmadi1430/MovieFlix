import React from 'react';
import ReactPlayer from 'react-player/youtube';
import useMovie from '../hooks/useMovie';

// Displays YouTube trailer for a movie in the background
const VideoBackground = ({ _id }) => {
  const movie = useMovie(_id); // Fetch movie data using movie ID

  // If no movie data is available, render an empty placeholder div
  if (!movie) return <div className="aspect-video"></div>;

  const youtubeTrailer = movie?.movie?.youtube_trailer; // Get YouTube trailer URL

  return (
    <div className="relative aspect-video">
      {youtubeTrailer ? (
        <ReactPlayer
          url={youtubeTrailer} // YouTube trailer URL
          className="absolute inset-0" // Cover entire div
          width="100%" // Full width
          height="100%" // Full height
          playing={true} // Autoplay video
          loop={true} // Loop the video
          muted={true} // Mute audio
          controls={false} // Hide controls
          playbackRate={1.75} // Adjust playback speed
          config={{
            youtube: {
              playerVars: { disablekb: 1, rel: 0, modestbranding: 1 } // Player config
            },
          }}
        />
      ) : (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <span className="text-white">Video not available</span> {/* Fallback message */}
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
