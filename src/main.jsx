import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/HomePage/Home';
import JobDetails from './Components/Featured Job/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/job/:Id",
        element:<JobDetails></JobDetails>,
        loader:({params}) => fetch(`http://localhost:3000/jobs/${params.Id}`),
      },
      {
        path: "about",
        element: <div>This is About</div>,
      },
      {
        path: "blog",
        element: <div>This is Blog page</div>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
