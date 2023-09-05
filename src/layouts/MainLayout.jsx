import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation();
    const emptyHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
    
    
    return (
        <div>
            {emptyHeaderFooter || <Navbar/>}
            <Outlet/>
            {emptyHeaderFooter || <Footer/>}
        </div>
    );
};

export default MainLayout;