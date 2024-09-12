import { createSlice } from "@reduxjs/toolkit";

// Define the slice for movie-related state management
const moviesSlice = createSlice({
    name: 'movies', // Name of the slice
    initialState: {
        nowPlaying: [], // Initial state for now playing movies
        // You can add other movie-related states here if needed
    },
    reducers: {
        // Action to update the list of now playing movies
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload; // Update only the 'nowPlaying' part of the state
        }
        // You can add other reducers here if needed
    }
});

// Export the action creator for adding now playing movies
export const { addNowPlayingMovies } = moviesSlice.actions;

// Export the reducer to be used in the store
export default moviesSlice.reducer;
