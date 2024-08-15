import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivetRoute from "../../privetroutes/PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <PrivetRoute><Home></Home></PrivetRoute> ,
      },
    ],
  },
  {
    path:"/registration",
    element:<Register></Register>
  },
  {
    path:"/login",
    element:<Login></Login>
  }
]);
