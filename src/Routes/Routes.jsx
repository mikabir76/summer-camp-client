import { createBrowserRouter } from "react-router-dom";
import Layout from "../Main/Layout";
import Home from "../Main/Home/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Dashboard from "../Layout/Dashboard/Dashboard";
// import ErrorPage from "../Shared/Error/ErrorPage";

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
            path: 'login',
            element: <Login></Login>
        },
        {
          path: 'register',
          element: <Registration></Registration>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>
    },
    // {
    //   path: '*',
    //   element: <ErrorPage></ErrorPage>
    // }
  ]);

  export default router;