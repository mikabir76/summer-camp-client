import { createBrowserRouter } from "react-router-dom";
import Layout from "../Main/Layout";
import Home from "../Main/Home/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MySelectClass from "../Layout/Dashboard/StudentDashboad/MySelectClass";
import AllStudent from "../Layout/Dashboard/AdminDashboard/allStudent";
import AdminRoutes from "./AdminRoutes";
import Instructors from "../Components/Instructors/Instructors";
import Classes from "../Components/Classes/Classes";
import Payment from "../Layout/Dashboard/StudentDashboad/Payment";
import AddClass from "../Layout/Dashboard/Instructor/AddClass";
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
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
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
            path: 'payment',
            element: <Payment></Payment>
        },
        // Instructor
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        {
          path: 'allStudent',
          element: <AdminRoutes><AllStudent></AllStudent></AdminRoutes>
        }
      ]
    },
    // {
    //   path: '*',
    //   element: <ErrorPage></ErrorPage>
    // }
  ]);

  export default router;