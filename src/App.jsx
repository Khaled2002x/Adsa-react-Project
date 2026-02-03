import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./Components/home.jsx";
import Layout from "./Components/layout.jsx";
import Blog from "./Components/Blog.jsx";
const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "Blog",
        element: <Blog />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
