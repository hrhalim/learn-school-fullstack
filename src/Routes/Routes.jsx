import { 
    createBrowserRouter,
  } from "react-router-dom"; 
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'menu',
          element: <Menu></Menu>
        },
        {
          path:'shop/:category',
          element: <Shop></Shop>
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
          path: 'mycart',
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);
  