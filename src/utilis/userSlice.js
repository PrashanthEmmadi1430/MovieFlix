import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for user
const initialState = {
  uid: null, // Unique identifier for the user
  email: '', // User's email address
  displayName: '', // User's display name
  phoneNumber: '', // User's phone number
  photoURL: '', // URL to the user's profile photo
};

// Create the user slice
const userSlice = createSlice({
  name: 'user', // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Action to add a user or update user details
    addUser: (state, action) => {
      return { ...state, ...action.payload }; // Merge the current state with the payload
    },
    // Action to remove a user (reset state to initialState)
    removeUser: () => initialState,
    // Action to update user profile details
    updateUserProfile: (state, action) => {
      return { ...state, ...action.payload }; // Merge the current state with the payload
    },
  },
});

// Export the action creators
export const { addUser, removeUser, updateUserProfile } = userSlice.actions;

// Export the reducer to be used in the store
export default userSlice.reducer;
