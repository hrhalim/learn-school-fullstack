import { 
    createBrowserRouter,
  } from "react-router-dom"; 
import Main from "../Layout/Main";  
import Login from "../Pages/Login/Login";
 
// import Dashboard from "../Layout/Dashboard";
// import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
// import Instructor from "../Pages/Dashboard/Instructor/Instructor";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        }
      ]
    }, 
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        }
      ]
    }

  ]);
  