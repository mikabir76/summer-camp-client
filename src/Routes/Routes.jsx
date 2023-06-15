import { createBrowserRouter } from "react-router-dom";
import Layout from "../Main/Layout";
import Home from "../Main/Home/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MySelectClass from "../Layout/Dashboard/StudentDashboad/MySelectClass";
import AllStudent from "../Layout/Dashboard/AdminDashboard/allStudent";
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
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'selectClass',
          element: <MySelectClass></MySelectClass>
        },
        {
          path: 'allStudent',
          element: <AllStudent></AllStudent>
        }
      ]
    },
    // {
    //   path: '*',
    //   element: <ErrorPage></ErrorPage>
    // }
  ]);

  export default router;