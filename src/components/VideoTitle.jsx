import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ original_title, overview, _id }) => {
  const navigate = useNavigate();

  // Handle navigation to detailed movie view
  const handleClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className="w-screen aspect-video pt-[25%] px-16 absolute text-white bg-gradient-to-r from-black cursor-pointer z-10">
  <h1 className="text-4xl font-bold">{original_title}</h1>
  <div className="w-1/2 p-4">
    <p className="line-clamp-4">{overview}</p>
  </div>
  <div className="font-bold mt-5">
    <button className="mx-2 bg-white text-black p-4 px-12 text-xl rounded-lg py-2 hover:bg-opacity-50">
      Play
    </button>
    <button
      className="mx-2 bg-gray-600 text-white bg-opacity-20 cursor-pointer p-4 px-8 text-xl rounded-lg py-2 hover:bg-gray-200 hover:bg-opacity-15"
      onClick={() => handleClick(_id)}
    >
      More Info
    </button>
  </div>
</div>
  );
};

export default VideoTitle;
