import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
// import App from './App';
import Login from './Login';
import Footer from './footer';
import Item from './item';
import List from './List';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Navbar />,
    <Outlet />,
    <Footer />,
    </>,
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <Item />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/list",
        element: <List />,
      }
    ],
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
