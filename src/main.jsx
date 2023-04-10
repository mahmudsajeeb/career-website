import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Blog from './components/blog';
import Features from './components/Features';
import AppliedJob from './components/AppliedJob';
import SingleJob from './components/SingleJob';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "singlejob/:id",
        element: <SingleJob />,
        loader: () => fetch('data.json')
      },
      {
        path: "job",
        element: <AppliedJob />
      },
       
       
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);