import { createBrowserRouter } from "react-router-dom";
import Layout from "../Main/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
    },
  ]);

  export default router;