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
 
import AppliedJob from './components/AppliedJob';
import SingleJob from './components/SingleJob';
import Blog from './components/Blog';
import { productsAndCartData } from './loaders/getCart&ProductsData';

  
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
        path: "/Singlejob/:id",
        element: <SingleJob />,
        loader: () => fetch('data.json')
      },
      {
        path: "/appliedjobs/",
        element: <AppliedJob />,
        loader: productsAndCartData
      },
       
       
      {
        path: "Statistics",
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