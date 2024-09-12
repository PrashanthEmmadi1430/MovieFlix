import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../utilis/userSlice";
import { auth } from "../utilis/firebase";
import { updateProfile } from "firebase/auth";

const Account = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // Local state for form inputs and feedback messages
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Update the form fields with data from the Redux store when user data changes
    setDisplayName(user.displayName || "");
    setPhotoURL(user.photoURL || "");
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      if (auth.currentUser) {
        // Update Firebase Authentication profile
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        });

        // Update the Redux store with the new data
        dispatch(updateUserProfile({ displayName, photoURL }));

        setSuccess("Profile updated successfully.");
      } else {
        setError("User is not authenticated.");
      }
    } catch (err) {
      // Handle errors
      let errorMessage = "Failed to update profile. Please try again.";
      if (err.code) {
        switch (err.code) {
          case "auth/requires-recent-login":
            errorMessage = "Please re-authenticate and try again.";
            break;
          case "auth/invalid-email":
            errorMessage = "The email address is invalid.";
            break;
          default:
            errorMessage = "Failed to update profile. Please try again.";
        }
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center py-12">
      <div className="w-full max-w-4xl px-6 py-8 bg-gray-800 rounded-lg shadow-lg mt-8 flex">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Account Information</h1>
          <form onSubmit={handleUpdateProfile}>
            {/* Display Name Input */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Display Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="p-3 w-full bg-gray-700 text-white rounded-lg"
                placeholder="Enter your display name"
              />
            </div>

            {/* Email Display (Read-Only) */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="p-3 w-full bg-gray-600 text-white rounded-lg cursor-not-allowed"
                disabled
              />
            </div>

            {/* Profile Photo URL Input */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Profile Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="p-3 w-full bg-gray-700 text-white rounded-lg"
                placeholder="Enter profile photo URL"
              />
            </div>

            {/* Error and Success Messages */}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Update Profile
            </button>
          </form>
        </div>

        <div className="ml-6 flex flex-col items-center">
          {/* Profile Photo Display */}
          {photoURL ? (
            <img
              src={photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-lg object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-lg bg-gray-600 flex items-center justify-center text-gray-400">
              {/* Placeholder if no photo URL */}
            </div>
          )}

          {/* Display Name Below Photo */}
          <p className="mt-4 text-gray-300 text-lg">
            {displayName || "No Display Name"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
