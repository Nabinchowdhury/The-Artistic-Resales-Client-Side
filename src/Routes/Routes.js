import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main"
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";

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
            }
        ]
    }

])

