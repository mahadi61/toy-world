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
import ToyDetails from "../pages/toyDetails/ToyDetails";
import PrivetRoute from "./PrivetRoute";

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
        loader: () => fetch("https://toy-world-server-two.vercel.app/toys"),
      },
      {
        path: "/addToys",
        element: (
          <PrivetRoute>
            <AddToy></AddToy>
          </PrivetRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivetRoute>
            <MyToys></MyToys>
          </PrivetRoute>
        ),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivetRoute>
            <ToyDetails></ToyDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-world-server-two.vercel.app/toy/${params.id}`),
      },
    ],
  },
]);

export default router;
