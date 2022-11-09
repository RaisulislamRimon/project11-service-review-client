import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import SingleService from "../../Pages/SingleService/SingleService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "/services/:id",
        element: <SingleService />,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-iota.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
