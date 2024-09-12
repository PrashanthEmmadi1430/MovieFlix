import React, { useRef, useState } from "react";
import { auth } from '../utilis/firebase'; // Firebase authentication
import { Link, useNavigate } from "react-router-dom"; // React Router for navigation
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase auth method
import { BACKGROUND_IMG } from "../utilis/constants"; // Background image constant

const SignIn = () => {
  // Refs for email and password inputs
  const email = useRef(null);
  const password = useRef(null);
  
  // State for storing error messages
  const [error, setError] = useState("");
  
  // Hook for programmatic navigation
  const navigate = useNavigate();
  
  // Handle form submission
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        navigate('/'); // Redirect to home page
        setError(""); // Clear any previous errors
      })
      .catch((error) => {
        // Handle errors
        const errorMessage = error.message;
        setError(errorMessage); // Set error message to display
      });
  };

  return (
    <div>
      {/* Background Image */}
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          alt="Background"
          src={BACKGROUND_IMG}
        />
        <div className="bg-black/60 h-screen w-full fixed top-0 left-0"></div>
        <div className="w-full px-4 py-24 z-50 fixed">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form
                onSubmit={(e) => e.preventDefault()} // Prevent default form submission
                className="w-full flex flex-col py-4"
              >
                <input
                  ref={email}
                  className="p-3 my-2 bg-black/60 border rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                
                <input
                  ref={password}
                  className="p-3 my-2 bg-black/60 border rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                
                {/* Error message display */}
                {error ? (
                  <p className="rounded text-red-600 font-bold mt-2 p-2">{error}</p>
                ) : null}
                
                <button
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
                
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                
                <p className="py-8">
                  <span className="text-gray-600">New to Movieflix?</span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
