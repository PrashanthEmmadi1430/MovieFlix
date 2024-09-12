import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'; // Reducer for user-related state
import movieReducer from './moviesSlice'; // Reducer for movie-related state
import searchReducer from './searchSlice'; // Reducer for search-related state
import configReducer from './configSlice'; // Reducer for configuration-related state

// Create and configure the Redux store
const appStore = configureStore({
    reducer: {
        user: userReducer, // Manages the state of user data
        movies: movieReducer, // Manages the state of movies data
        search: searchReducer, // Manages the state of search queries and results
        config: configReducer // Manages application configuration state
    }
});

export default appStore;
