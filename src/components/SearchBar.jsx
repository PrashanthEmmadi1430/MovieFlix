import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieResult, changeIsMovieSearch, removeMovieResult } from "../utilis/searchSlice";
import { API_OPTIONS } from "../utilis/constants";
import lang from "../utilis/languageConstants";

const SearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang); // Get current language key from the Redux store
  const searchText = useRef(null); // Create a ref to access the input element

  // Function to perform the movie search
  const searchMovie = async (movieName) => {
    dispatch(changeIsMovieSearch())
    dispatch(removeMovieResult()); // Clear previous search results
    const url = `https://movies-api14.p.rapidapi.com/search?query=${movieName}`; // Construct the API URL
    try {
      const response = await fetch(url, API_OPTIONS); // Fetch data from the API
      const result = await response.json(); // Parse JSON response
      dispatch(addMovieResult(result)); // Dispatch results to the Redux store
    } catch (error) {
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()} // Prevent form submission to handle search with button click
      >
        <input
          ref={searchText} // Link input field to the ref
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].SearchPlaceholder} // Set placeholder text based on selected language
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={() => searchMovie(searchText.current.value)} // Trigger search function with input value
        >
          {lang[langKey].search} 
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
