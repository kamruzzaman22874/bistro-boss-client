import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import UserHome from "../components/UserHome";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h1>Page not Found!</h1>,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/order/:category",
                element: <Order />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <Login />
            }

        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        children: [
            {
                path: "myCart",
                element: <MyCart />
            },
            {
                path: "home",
                element: <UserHome />
            },
            {
                path: "allusers",
                element: <AllUsers />
            },
            {
                path: "addItem",
                element: <AdminRoutes><AddItem /></AdminRoutes>
            },
            {
                path: "manageitem",
                element: <AdminRoutes><ManageItem /></AdminRoutes>
            }
        ]
    }
]);
