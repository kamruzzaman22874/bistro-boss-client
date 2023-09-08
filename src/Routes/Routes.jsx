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
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Reviews from "../components/Reviews/Reviews";
import BookingTable from "../pages/Dashboard/BookingTable/BookingTable";
import BookingsHistory from "../pages/Dashboard/BookingsHistory/BookingsHistory";

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
                path:"payment",
                element: <Payment/>
            },
            {
                path: "myCart",
                element: <MyCart />
            },
            {
                path: "userhome",
                element: <UserHome />
            },
            {
               path: "reviews",
               element: <Reviews /> 
            },
            {
                path: "bookingtable",
                element: <BookingTable />
            },
            {
                path: "bookings",
                element: <BookingsHistory />
            },

            // Admin routes 
            {
                path: "adminhome",
                element: <AdminRoutes><AdminHome /></AdminRoutes>
            },
            {
                path: "allusers",
                element: <AdminRoutes><AllUsers /></AdminRoutes>
            },
            {
                path: "addItem",
                element: <AdminRoutes><AddItem /></AdminRoutes>
            },
            {
                path: "manageitem",
                element: <AdminRoutes><ManageItem /></AdminRoutes>
            },
            
        ]
    }
]);
