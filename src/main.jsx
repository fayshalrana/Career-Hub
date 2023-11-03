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
import AppliedJobs from './Components/AppliedJob/AppliedJobs';
import Register from './Components/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Login from './Components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/job/:Id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`https://career-hub-server-pv4rqhpp1-fayshal-ranas-projects.vercel.app/jobs/${params.Id}`),
      },
      {
        path: "/my-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('https://career-hub-server-pv4rqhpp1-fayshal-ranas-projects.vercel.app/jobs/')
      },
      {
        path: "blog",
        element: <div>This is Blog page</div>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
