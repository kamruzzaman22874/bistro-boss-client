import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const {user, logOut} = useAuth()
    const [cart] = useCart()
    const [isAdmin] = useAdmin()

    const handleLogout =() =>{
        logOut()
        .then(() =>{})
        .catch(err => console.log(err));
    }
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}>Dashboard</Link></li>
        {
            !isAdmin ? <li><Link to="/dashboard/myCart">
                <span className="flex items-center px-3 py-1 rounded border-b-2 border-b-orange-600 hover:border-b-orange-500 hover:bg-black hover:text-white">
                    <FaShoppingCart className='text-lg' />
                    <div className="badge badge-secondary">+{cart.length || 0}</div>
                </span> </Link>
            </li> :""
        }

        {/* <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/shop">Our Shop</Link></li> */}
    </>
    return (
        <>
            <div className="navbar max-w-screen-xl text-white fixed bg-opacity-30 bg-black z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to="/" className="uppercase text-white px-3 py-1">
                        <p>Bistro Boss</p>
                        <p>Restaurant</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                {
                    user ? 
                        <>
                            <span onClick={handleLogout} className="border-b-2 border-b-orange-600 hover:border-b-orange-500 hover:bg-black hover:text-white px-10 py-1 rounded cursor-pointer">Logout</span></> : 
                                <Link to="/login" className="py-1 rounded border-b-2 border-b-orange-600 hover:border-b-orange-500 hover:bg-black hover:text-white px-5">
                                    Login
                                </Link>
                }
            </div>
        </>
    );
};

export default Navbar;



