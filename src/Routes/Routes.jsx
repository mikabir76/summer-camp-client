import { createBrowserRouter } from "react-router-dom";
import Layout from "../Main/Layout";
import Home from "../Main/Home/Home/Home";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;