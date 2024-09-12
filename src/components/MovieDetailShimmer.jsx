import React from 'react';

const MovieDetailShimmer = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Backdrop Shimmer */}
      <div className="relative h-[60vh] shimmer-wrapper bg-gray-600">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black opacity-60" />
        <div className="relative flex flex-col items-center justify-center h-full p-4">
          
        </div>
      </div>

      {/* Similar Movies Shimmer */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Similar Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Movie Poster Shimmer with Gradient */}
              <div className="relative w-full h-56 bg-gray-700 rounded-lg shimmer-box overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-gray-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailShimmer;
