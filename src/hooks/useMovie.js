import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utilis/constants';

const useMovie = (_id) => {
  const [movie, setMovie] = useState(null);
  const url = `https://movies-api14.p.rapidapi.com/movie/${_id}`;

  // Function to fetch movie data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(url, API_OPTIONS);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse and set movie data
      const result = await response.json();
      setMovie(result);
    } catch (error) {
      // Handle errors gracefully
      setMovie(null); // Optionally set movie to null or handle error state
    }
  };

  // Fetch movie data when _id changes
  useEffect(() => {
    if (_id) {
      fetchData();
    }
  }, [_id]);

  return movie;
};

export default useMovie;
