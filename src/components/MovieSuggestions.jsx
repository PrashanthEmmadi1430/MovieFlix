import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const MovieSuggestions = () => {
  // Retrieve movieResults and isMovieSearch from the Redux store
  const movies = useSelector((store) => store.search.movieResults);
  const isMovieSearch = useSelector((store) => store.search.isMovieSearch);

  // State for loading and noMoviesMessage
  const [loading, setLoading] = useState(false);
  const [noMoviesMessage, setNoMoviesMessage] = useState(null);

  useEffect(() => {
    if (isMovieSearch) {
      // Start loading and reset messages when a search starts
      setLoading(true);
      setNoMoviesMessage(null);

      // Set a timeout to show "No movies available" if loading takes too long
      const timer = setTimeout(() => {
        if (loading) {
          setNoMoviesMessage("No movies available.");
        }
      }, 10000); // 10 seconds

      // Cleanup the timer if the component unmounts or search status changes
      return () => clearTimeout(timer);
    } else {
      // Reset states when no search is being made
      setLoading(false);
      setNoMoviesMessage(null);
    }
  }, [isMovieSearch]);

  useEffect(() => {
    if (isMovieSearch) {
      if (movies?.contents && movies.contents.length > 0) {
        // Data fetched, stop loading
        setLoading(false);
        setNoMoviesMessage(null);
      } else if (movies?.contents && movies.contents.length === 0) {
        // No movies found, stop loading and show the message
        setLoading(false);
        setNoMoviesMessage("No movies available.");
      }
    }
  }, [movies, isMovieSearch]);

  // Check if there are any movie results
  const hasResults = movies?.contents && movies.contents.length > 0;

  return (
    <div className="p-4 bg-black">
      {/* Display loading or message based on states */}
      {!isMovieSearch ? (
        <p className="text-white text-center">Search for movies.</p>
      ) : loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : hasResults ? (
        <>
          <h1 className="text-xl font-bold mb-4 text-white">Search Results</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movies.contents.map((movie) => (
              <div key={movie._id} className="relative cursor-pointer">
                {/* Movie poster image */}
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-full h-60 object-cover rounded-lg shadow-lg"
                />
                {/* Overlay for movie title and trailer link */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                  <div className="text-center">
                    <p className="text-white text-sm px-2 mb-2">{movie.title}</p>
                    <a
                      href={movie.youtube_trailer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 text-sm underline"
                    >
                      Watch Trailer
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-white text-center">{noMoviesMessage}</p>
      )}
    </div>
  );
};

export default MovieSuggestions;
