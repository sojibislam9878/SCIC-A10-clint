import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivetRoute from "../../privetroutes/PrivetRoute";
import Dashboard from "../layouts/Dashboard";
import NotComplete from "../components/NotComplete";

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
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"/dashboard",
        element:<NotComplete></NotComplete>,
      },
      {
        path:"adminprofile",
        element:<NotComplete></NotComplete>,
      },
      {
        path:"managemembers",
        element:<NotComplete></NotComplete>,
      },
      {
        path:"additem",
        element:<NotComplete></NotComplete>,
      },
      {
        path:"manageitems",
        element:<NotComplete></NotComplete>,
      },
    ]
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
