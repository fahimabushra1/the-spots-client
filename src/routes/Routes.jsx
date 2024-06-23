import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Outlets from "../pages/Outlets";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainLayout from "../layouts/MainLayout";

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
   
])