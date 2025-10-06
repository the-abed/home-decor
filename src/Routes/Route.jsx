import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import RootLayout from '../Layout.jsx/RootLayout';
import ErrorPage from '../Pages/ErrorPage';
import Wishlist from '../Pages/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/product",
            Component: Product
        },
        {
            path: "/wishlist",
            Component: Wishlist
        }
    ]
  },
]);



export default router;