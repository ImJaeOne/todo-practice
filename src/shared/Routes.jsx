import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
import MyPage from "../pages/MyPage";
import Layout from "../layout/Layout";
import About from "../pages/About";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import DbPrac from "../pages/DbPrac";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "post", element: <Post /> },
          { path: "mypage", element: <MyPage /> },
          { path: "about", element: <About /> },
        ],
      },
      { path: "sign-in", element: <Login/> },
      { path: "sign-up", element: <Signup/>},
      { path: "db", element: <DbPrac /> },
    ],
  },
]);

const Routes = () => {
  const todo = useSelector((state) => state.todo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
