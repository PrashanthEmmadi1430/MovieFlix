import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RedirectIfAuthenticated = ({ children }) => {
  const user = useSelector((store) => store.user);

  // If the user is authenticated, redirect them to the home page
  if (user.uid) {
    return <Navigate to="/" />;
  }

  // Otherwise, render the sign-in or sign-up page
  return children;
};

export default RedirectIfAuthenticated;
