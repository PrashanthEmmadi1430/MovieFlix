import React from 'react';
import useMovie from '../hooks/useMovie';
import { useParams } from 'react-router-dom';
import Shimmer from '../components/MovieDetailShimmer';

const MovieDetail = () => {
    // Extract the movieId from the URL parameters
    const { movieId } = useParams();
    
    // Fetch movie data using the custom hook
    const movie = useMovie(movieId);

    // Display the shimmer effect while loading movie data
    if (!movie || !movie.movie) return <Shimmer />;

    return (
        <div className="text-white bg-black">
            {/* Backdrop Section */}
            <div
                className="relative h-[60vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${movie?.movie?.backdrop_path || 'default-background.jpg'})` }}
            >
                {/* Dark gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black opacity-60" />
                <div className="relative flex flex-col items-center justify-center h-full p-4">
                    {/* Movie Title */}
                    <h1 className="text-4xl font-bold mb-2 pt-10">{movie?.movie?.title}</h1>
                    {/* Movie Overview */}
                    <p className="text-lg mb-6 text-center max-w-2xl overflow-hidden line-clamp-5">
                        {movie?.movie?.overview || 'No overview available.'}
                    </p>
                    {/* Trailer and Sources */}
                    <div className="flex flex-col items-center space-y-4">
                        {/* Watch Trailer Button */}
                        <a
                            href={movie?.movie?.youtube_trailer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-700 transition"
                        >
                            Watch Trailer
                        </a>
                        {/* Available Sources */}
                        <div className="flex space-x-4 overflow-x-auto">
                            {movie?.movie?.sources?.map((source) => (
                                <a
                                    key={source?.source}
                                    href={source?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-50 transition"
                                >
                                    <img
                                        src={source?.logo_url || 'https://via.placeholder.com/32'}
                                        alt={source?.display_name}
                                        className="w-8 h-8"
                                    />
                                    <span>{source?.display_name}</span>
                                </a>
                            )) || <div>No sources available.</div>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Movies Section */}
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-white">Similar Movies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {(movie?.similarMovies || []).map((similarMovie) => (
                        <div key={similarMovie?._id} className="flex flex-col items-center cursor-pointer">
                            <img
                                src={similarMovie?.poster_path || 'https://via.placeholder.com/200x300'}
                                alt={similarMovie?.title || 'No title available'}
                                className="w-full h-56 object-cover rounded-lg"
                            />
                            <h3 className="text-center mt-2 text-sm font-semibold">{similarMovie?.title || 'No title available'}</h3>
                        </div>
                    )) || <div>No similar movies available.</div>}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
