import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilis/moviesSlice";
import { API_OPTIONS } from "../utilis/constants";

const useMovies = () => {
  const dispatch = useDispatch();
  const url = "https://movies-api14.p.rapidapi.com/home";

  // Function to fetch now playing movies and dispatch to the Redux store
  const fetchData = async () => {
    try {
      const response = await fetch(url, API_OPTIONS);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response and dispatch it to the Redux store
      const result = await response.json();
      dispatch(addNowPlayingMovies(result));
    } catch (error) {
      // Handle errors gracefully (optionally log or set error state)
    }
  };

  // Fetch movie data on component mount
  useEffect(() => {
    fetchData();
  }, [dispatch]); // Dependency array includes dispatch to ensure proper effect execution

};

export default useMovies;
