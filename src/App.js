import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Account from "./pages/Account";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import RedirectIfAuthenticated from "./components/RedirectIfAuthenticated";

// Define the routes for the application
export const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <App />, // Root element for all routes
    children: [
      {
        path: '/', // Main page
        element: <Main />,
      },
      {
        path: '/account', // User account page
        element: <Account />,
      },
      {
        path: '/movies/:movieId', // Movie detail page with dynamic movieId
        element: <MovieDetail />,
      },
      {
        path: '/search', // Search page
        element: <Search />,
      },
      {
        path: '/signin', // SignIn page
        element:  <RedirectIfAuthenticated>
        <SignIn />
      </RedirectIfAuthenticated>
      },
      {
        path: '/signup', // SignUp page
        element:  <RedirectIfAuthenticated>
        <SignUp />
      </RedirectIfAuthenticated>
      },
    ],
  },
]);

// Main application component
function App() {
  return (
    <div className="App">
      <Header /> {/* Render the header component */}
      <Outlet /> {/* Render the matched child route */}
    </div>
  );
}

export default App;
