import React from "react";
import VideoTitle from "../components/VideoTitle";
import VideoBackground from "../components/VideoBackground";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import MainShimmer from "../components/MainShimmer";

const Main = () => {
  // Fetch the movies data from the Redux store
  const allMovies = useSelector((store) => store.movies.nowPlaying);
  // Show shimmer effect while movies data is loading
  if (!allMovies.length) return <MainShimmer />;

  // Flatten the nested movie arrays into a single array for easy access
  const allAvailableMovies = allMovies?.flatMap(category => category.movies);

  // Display a message if no movies are available
  if (allAvailableMovies.length === 0) return <div className="text-white text-center p-4">No movies available</div>;

  // Select a random movie to display prominently
  const randomMovie = allAvailableMovies[Math.floor(Math.random() * allAvailableMovies.length)];

  // Display a message if no main movie is available
  if (!randomMovie) return <div className="text-white text-center p-4">No main movie available</div>;

  // Destructure the relevant information from the selected random movie
  const { overview, original_title, _id } = randomMovie;

  return (
    <div className="bg-black min-h-screen relative">
    <VideoTitle
      original_title={original_title}
      overview={overview}
      _id={_id}
    />
    <VideoBackground _id={_id} />
    <div className="-mt-20 relative z-20 p-4">
      {allMovies.map((category) => (
        <MovieList
          key={category.title}
          title={category.title}
          movies={category.movies}
        />
      ))}
    </div>
  </div>
  );
};

export default Main;
