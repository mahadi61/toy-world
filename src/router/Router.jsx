import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddToy from "../pages/addAToy/AddToy";
import AllToys from "../pages/allToys/AllToys";
import Blog from "../pages/blog/Blog";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import MyToys from "../pages/myToys/MyToys";
import Signup from "../pages/signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Signup></Signup>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/add-toy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
    ],
  },
]);

export default router;
