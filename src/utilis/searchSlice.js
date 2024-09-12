import { createSlice } from "@reduxjs/toolkit";

// Define the slice for search-related state management
const searchSlice = createSlice({
    name: "search", // Name of the slice
    initialState: {
        isMovieSearch:false,
        movieResults: {}, // Initial state for storing movie search results
    },
    reducers: {
        // Action to add movie search results
        addMovieResult: (state, action) => {
            state.movieResults = action.payload; // Update the 'movieResults' part of the state with new results
        },
        // Action to remove movie search results
        removeMovieResult: (state) => {
            state.movieResults = {}; // Reset 'movieResults' to an empty object
        },
        changeIsMovieSearch:(state)=>{
            state.isMovieSearch=true;
        }
    }
});

// Export the reducer to be used in the store
export default searchSlice.reducer;

// Export action creators for updating and clearing search results
export const { addMovieResult, removeMovieResult ,changeIsMovieSearch} = searchSlice.actions;
