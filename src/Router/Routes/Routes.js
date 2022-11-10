import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blogs/Blogs";
import EditReview from "../../Pages/EditReview/EditReview";
import Home from "../../Pages/Home/Home/Home";
import MyReview from "../../Pages/MyReview/MyReview";
import NotFound from "../../Pages/NotFound/NotFound";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";
import SingleService from "../../Pages/SingleService/SingleService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <AllServices />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/services/:_id",
        element: <SingleService />,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-iota.vercel.app/services/${params._id}`
          ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        // path: "/update",
        element: (
          <PrivateRoute>
            <EditReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-iota.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
