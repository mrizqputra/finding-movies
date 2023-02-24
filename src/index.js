import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
// import App from './App';
import Login from './Login';
import Footer from './footer';
import GetMovie from './GetMovie';
import GetTV from './getTV';
import GetTVDetail from './GetTVDetail';
import Search from "./Search";
import Account from './Account';
import GetMovieDetail from './GetMovieDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Navbar />
    <Outlet />
    <Footer />
    </>,
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <><Search/><GetMovie /><GetTV/></>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/movie",
        element: <GetMovie />,
      },
      {
        path: "/movie/:id",
        element: <GetMovieDetail />,
      },
      {
        path: "/TV",
        element: <GetTV />,
      },
      {
        path: "/tv/:id",
        element: <GetTVDetail />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
