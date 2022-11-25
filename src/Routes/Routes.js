import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Components/Layout/DashboardLayout";
import Main from "../Components/Layout/Main"
import AllBuyers from "../Components/Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../Components/Pages/Dashboard/Admin/AllSellers/AllSellers";
import MyOrders from "../Components/Pages/Dashboard/Buyer/MyOrders/MyOrders";

import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: "/dashboard/admin/sellers",
                element: <AllSellers></AllSellers>
            },
            {
                path: "/dashboard/admin/buyers",
                element: <AllBuyers></AllBuyers>
            },

        ]

    }

])

