import React from "react";

const MainShimmer = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Backdrop Shimmer */}
      <div className="relative aspect-video pt-[25%] px-16 bg-black">
        {/* Gradient overlay for the backdrop shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black opacity-60" />
      </div>

      {/* Multiple Movie Categories with Shimmer */}
      <div className="p-4 -mt-36 relative z-20">
        {/* Repeat this block for each movie category */}
        {[...Array(4)].map((_, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            {/* Shimmering Category Title */}
            <h2 className="text-2xl font-bold mb-4 shimmer-text bg-gray-700 w-1/6 h-6 rounded-lg" /> 
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hidden">
                <div className="flex space-x-4">
                  {/* Shimmer effect for multiple movie cards */}
                  {[...Array(9)].map((_, movieIndex) => (
                    <div
                      key={movieIndex}
                      className="flex-shrink-0 w-36 h-60 relative cursor-pointer"
                    >
                      {/* Movie Poster Shimmer with Gradient */}
                      <div className="relative w-full h-full bg-gray-700 rounded-lg shimmer-box overflow-hidden">
                        {/* Gradient Overlay for Movie Cards */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-600 via-gray-700 to-gray-800"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainShimmer;
