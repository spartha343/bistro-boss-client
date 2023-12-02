import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";
import LogIn from "../pages/logIn/LogIn";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/secret/Secret";
import DashBoard from "../layouts/DashBoard";
import MyCart from "../pages/DashBoard/myCart/MyCart";
import AllUsers from "../pages/DashBoard/allUsers/AllUsers";
import AddItem from "../pages/DashBoard/addItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/DashBoard/manageItems/ManageItems";
import Payment from "../pages/DashBoard/payment/Payment";
import UserHome from "../pages/DashBoard/userHome/UserHome";
import AdminHome from "../pages/DashBoard/adminHome/AdminHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },

            // Admin routes
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
        ]
    }
]);