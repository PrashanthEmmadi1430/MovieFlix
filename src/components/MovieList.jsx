import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation

const MovieList = ({ title, movies }) => {
  const navigate = useNavigate();

  // Function to handle movie click and navigate to the movie details page
  const handleClick = (movieId) => {
    navigate(`/movies/${movieId}`); // Navigate to the detailed movie view
  };

  return (
    <div className="p-4">
      {/* Section title */}
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <div className="relative">
        {/* Container for horizontal scrolling */}
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex space-x-4">
            {/* Display message if no movies are available */}
            {movies.length === 0 ? (
              <p className="text-white">No movies available.</p>
            ) : (
              movies.map((movie) => (
                <div
                  key={movie._id}
                  className="flex-shrink-0 w-36 h-60 relative cursor-pointer"
                  onClick={() => handleClick(movie._id)} // Handle click event
                >
                  {/* Movie poster image */}
                  <img
                    src={movie.poster_path}
                    alt={movie.original_title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  {/* Overlay for displaying movie title on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-white text-center text-sm px-2">{movie.original_title}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
