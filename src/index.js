import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { router } from './App';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utilis/appStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
  <RouterProvider router = {router} />
  </Provider>
);


