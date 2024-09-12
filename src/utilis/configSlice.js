import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for managing configuration state
const configSlice = createSlice({
    name: "config", // Name of the slice, used to identify it in the Redux DevTools
    initialState: {
        lang: "en" // Default language set to English
    },
    reducers: {
        // Action to change the language
        changeLanguage: (state, action) => {
            state.lang = action.payload; // Update the state with the new language
        }
    }
});

export default configSlice.reducer; // Export the reducer to be used in the store
export const { changeLanguage } = configSlice.actions; // Export the action creator for changing the language
