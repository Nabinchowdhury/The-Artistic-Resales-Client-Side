import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Components/Layout/DashboardLayout";
import Main from "../Components/Layout/Main"
import CategoryProducts from "../Components/Pages/CategoryProducts/CategoryProducts";
import AllBuyers from "../Components/Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../Components/Pages/Dashboard/Admin/AllSellers/AllSellers";
import MyOrders from "../Components/Pages/Dashboard/Buyer/MyOrders/MyOrders";
import MyWishlist from "../Components/Pages/Dashboard/Buyer/MyWishlist/MyWishlist";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import AddProduct from "../Components/Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../Components/Pages/Dashboard/Seller/MyProducts/MyProducts";

import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SelllerRoute/SellerRoute";

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
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`, {
                        headers: { authorization: `bearer ${localStorage.getItem("AccessToken")}` }
                    })
                }
            },
            //     loader: ({ params }) => {
            //         return params.id
            //     }
            // },
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
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/myOrders",
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: "/dashboard/myWishlist",
                element: <PrivateRoute><MyWishlist></MyWishlist></PrivateRoute>
            },
            {
                path: "/dashboard/seller/addProduct",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: "/dashboard/seller/myProducts",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },

            {
                path: "/dashboard/admin/sellers",
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: "/dashboard/admin/buyers",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },

        ]

    }

])

