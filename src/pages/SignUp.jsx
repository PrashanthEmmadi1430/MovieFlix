import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utilis/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  validateEmail,
  validatePassword,
  validateUserName,
} from "../utilis/validate";
import { BACKGROUND_IMG } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";

const SignUp = () => {
  // Hook for navigation
  const navigate = useNavigate();
  // Hook for dispatching Redux actions
  const dispatch = useDispatch();

  // Refs for form inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);

  // State for error messages
  const [emailError, setEmailError] = useState(null);
  const [pwdError, setPwdError] = useState(null);
  const [userNameError, setUserNameError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get values from form inputs
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const userNameValue = userNameRef.current.value;

    // Validate inputs
    setEmailError(validateEmail(emailValue));
    setPwdError(validatePassword(passwordValue));
    setUserNameError(validateUserName(userNameValue));

    // Proceed if no validation errors
    if (!emailError && !pwdError && !userNameError) {
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
        const user = userCredential.user;

        // Update user profile
        await updateProfile(auth.currentUser, {
          displayName: userNameValue,
        });

        // Destructure user properties
        const { uid, displayName, email, phoneNumber, photoURL } = user;

        // Update Redux store with user data
        dispatch(
          addUser({
            uid,
            displayName: userNameValue,
            email,
            phoneNumber,
            photoURL,
          })
        );

        // Redirect to home page
        navigate("/");
      } catch (error) {
        setPwdError(error.message); // Set error message for display
      }
    }
  };

  return (
    <div>
      <div className="w-full h-screen">
        {/* Background Image */}
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          alt="Background"
          src={BACKGROUND_IMG}
        />
        <div className="bg-black/60 h-screen w-full fixed top-0 left-0"></div>
        <div className="w-full px-4 py-24 z-50 fixed">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit} // Handle form submission
                className="w-full flex flex-col py-4"
              >
                {/* Username Input */}
                <input
                  ref={userNameRef}
                  className="p-3 my-2 bg-black/60 border rounded"
                  type="text"
                  placeholder="Username"
                />
                {userNameError && (
                  <p className="rounded text-red-600 font-bold text- mt-2 p-2">
                    {userNameError}
                  </p>
                )}

                {/* Email Input */}
                <input
                  ref={emailRef}
                  className="p-3 my-2 bg-black/60 border rounded"
                  type="email"
                  placeholder="Email"
                />
                {emailError && (
                  <p className="rounded text-red-600 font-bold text- mt-2 p-2">
                    {emailError}
                  </p>
                )}

                {/* Password Input */}
                <input
                  ref={passwordRef}
                  className="p-3 my-2 bg-black/60 border rounded"
                  type="password"
                  placeholder="Password"
                />
                {pwdError && (
                  <p className="rounded text-red-600 font-bold text- mt-2 p-2">
                    {pwdError}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                  type="submit"
                >
                  Sign Up
                </button>

                {/* Additional Links */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>

                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Movieflix?
                  </span>
                  <Link to="/signIn">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
