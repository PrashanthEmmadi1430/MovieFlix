import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { addUser, removeUser } from "../utilis/userSlice";
import useMovies from "../hooks/useMovies";
import { SUPPORTED_LANGUAGES } from "../utilis/constants";
import { changeLanguage } from "../utilis/configSlice";

const Header = () => {
  useMovies(); // Custom hook for fetching movies
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const user = useSelector((store) => store.user);
  
  const [loading, setLoading] = useState(true); // Track authentication status

  // Handle user logout
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Successful sign out
      })
      .catch((error) => {
        // Handle sign out error
      });
  };

  // Handle language change in the app
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  // Monitor authentication state changes
  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { uid, email, displayName, phoneNumber, photoURL } = authUser;
        // Update Redux store with user information
        dispatch(addUser({ uid, email, displayName, phoneNumber, photoURL }));
        // Redirect to home if on sign-in or sign-up pages
        if (location.pathname === '/signin' || location.pathname === '/signup') {
          navigate('/');
        }
      } else {
        // Clear user data from Redux store
        dispatch(removeUser());
        // Redirect to sign-in page if not on sign-in or sign-up pages
        if (location.pathname !== '/signin' && location.pathname !== '/signup') {
          navigate('/signin');
        }
      }
      setLoading(false); // Set loading state to false once authentication status is checked
    });

    // Clean up subscription on component unmount
    return () => unsubscribe();
  }, [dispatch, navigate, location.pathname]);

  // Prevent rendering until authentication status is determined
  if (loading) return null;

  const isOnAccountPage = location.pathname === '/account';

  return (
    <div className="flex items-center justify-between p-4 w-full z-[100] absolute bg-gradient-to-b from-black">
      <Link to="/">
        <h1 className="text-red-600 cursor-pointer font-bold text-4xl">MOVIEFLIX</h1>
      </Link>
      <div className="flex items-center">
        {user.uid ? (
          <div className="flex items-center">
            {location.pathname === "/search" && (
              <select
                className="text-white bg-black rounded-lg px-4 py-2 cursor-pointer font-medium mx-2"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            {location.pathname !== '/search' && (
              <Link to="/search">
                <button className="text-white bg-purple-700 rounded-lg px-6 py-2 cursor-pointer font-medium mx-2">
                  Search
                </button>
              </Link>
            )}
            {!isOnAccountPage && (
              <Link to="/account" className="flex items-center ml-4">
                {/* Profile Photo */}
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-gray-400">
                    {/* Placeholder icon */}
                  </div>
                )}
                {/* Display Name */}
                <span className="text-white ml-2">{user.displayName || 'No Display Name'}</span>
              </Link>
            )}
            <button
              onClick={handleLogOut}
              className="text-white bg-red-600 rounded px-6 py-2 cursor-pointer font-medium ml-4"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <Link to="/signin">
              <button className="text-white pr-4 rounded mx-2 font-medium">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="text-white bg-red-600 rounded px-6 py-2 cursor-pointer font-medium">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
