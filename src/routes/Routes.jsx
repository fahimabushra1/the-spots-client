import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Outlets from "../pages/Outlets";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainLayout from "../layouts/MainLayout";
import Menu from "../pages/Menu";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Shop from "../pages/Shop";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children: [
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/menu",
                element:<Menu/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/sign-up",
                element:<SignUp/>
            },
            {
                path:"/outlets",
                element:<Outlets/>
            },
        ]
    },
    {
        path:"/dashboard",
        element:<DashboardLayout/>,
        children: [
            {
                path:"",
                element:<Dashboard/>
            },
        ]
    },
   
])