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
import ManageClasses from "../Layout/Dashboard/AdminDashboard/ManageClasses";
import AdminHome from "../Layout/Dashboard/AdminDashboard/AdminHome";
import InstructorClass from "../Components/InstructorClass/InstructorClass";
import INstructorCamp from "../Layout/Dashboard/Instructor/InstructorCamp/INstructorCamp";

import ErrorPage from "../Shared/Error/ErrorPage";
import PrivateRouter from "../Components/PrivateRouter/PrivateRouter";

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
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'instructor',
          element: <InstructorClass></InstructorClass>

        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
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
          path: 'instructors',
          element: <Instructors></Instructors>
        },
       
        {
          path: 'adminhome',
          element: <AdminHome></AdminHome>
        },
        
        {
          path: 'allStudent',
          element: <AllStudent></AllStudent>
        },
        {
          path: 'manageclass',
          element: <ManageClasses></ManageClasses>
        
        },
        {
          path: 'instructorclass',
          element: <INstructorCamp></INstructorCamp>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);

  export default router;