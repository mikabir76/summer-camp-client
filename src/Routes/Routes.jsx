import { createBrowserRouter } from "react-router-dom";
import Layout from "../Main/Layout";
import Home from "../Main/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;