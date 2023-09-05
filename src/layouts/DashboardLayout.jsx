import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlineBars, AiFillShopping, AiOutlineMail } from 'react-icons/ai';
import { FaCalendarAlt, FaHome, FaWallet } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { FiShoppingCart } from 'react-icons/fi';
import { FaBookMedical, FaUsers } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';
import { MdReviews } from 'react-icons/md';
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const DashboardLayout = () => {
    const { user } = useAuth()
    const [cart] = useCart()

    const [isAdmin] = useAdmin();



    return (
        <div className="grid md:grid-cols-12  md:w-full">
            <div className="h-full dashboard col-span-2 p-2 space-y-2  bg-[#D1A054] dark:bg-gray-900 dark:text-gray-100">
                <div className="text-center text-xl  text-white rounded font-bold">
                    <h2> Bistro Boss</h2>
                    <h2 className="text-white">Reastaurant</h2>
                </div>
                <div className="flex items-center p-2 space-x-4">
                    <img src={ user?.photoURL } alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">{ user?.displayName }</h2>
                        <span className="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                        </span>
                    </div>
                </div>
                <div className="divide-y col-span-4 divide-gray-700">

                    { isAdmin &&
                        isAdmin ? <>
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="dark:bg-gray-800 dark:text-gray-50">
                                <NavLink to="/dashboard/home" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <AiFillHome className="text-lg" />
                                        <span>Admin Home</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="dark:bg-gray-800 dark:text-gray-50">
                                <NavLink to="/dashboard/addItem" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <ImSpoonKnife className="text-lg" />
                                        <span>Add An Items</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="dark:bg-gray-800 dark:text-gray-50">
                                <NavLink to="/dashboard/item" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <AiOutlineBars className="text-lg" />
                                        <span>Manage Items</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <FaBookMedical className="text-lg" />
                                        <span>Manage Bookings</span>
                                        <span className="badge badge-secondary">+{ cart.length || 0 }</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">

                                    <div className="flex items-center gap-2">
                                        <FaUsers className="text-lg" />
                                        <span>All Users</span>
                                    </div>
                                </NavLink>
                            </li>
                            {/* <li className="dark:bg-gray-800 dark:text-gray-50">
                                    <NavLink to="/dashboard/booking" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                        <div className="flex items-center gap-2">
                                            <FaCalendarAlt className="text-lg" />
                                            <span>My Booking</span>
                                        </div>
                                    </NavLink>
                                </li> */}
                        </ul>

                    </> :

                        <>
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="dark:bg-gray-800 dark:text-gray-50">
                                    <NavLink to="/dashboard/home" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                        <div className="flex items-center gap-2">
                                            <AiFillHome className="text-lg" />
                                            <span>User Home</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="dark:bg-gray-800 dark:text-gray-50">
                                    <NavLink to="/dashboard/resservation" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                        <div className="flex items-center gap-2">
                                            <SlCalender className="text-lg" />
                                            <span>Resservation</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="dark:bg-gray-800 dark:text-gray-50">
                                    <NavLink to="/dashboard/history" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                        <div className="flex items-center gap-2">
                                            <FaWallet className="text-lg" />
                                            <span>Payment History</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myCart" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                        <div className="flex items-center gap-2">
                                            <FiShoppingCart className="text-lg" />
                                            <span>My Cart</span>
                                            <span className="badge badge-secondary">+{ cart.length || 0 }</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">

                                        <div className="flex items-center gap-2">
                                            <MdReviews className="text-lg" />
                                            <span>Add Review</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="dark:bg-gray-800 dark:text-gray-50">
                                    <NavLink to="/dashboard/booking" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                        <div className="flex items-center gap-2">
                                            <FaCalendarAlt className="text-lg" />
                                            <span>My Booking</span>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </>
                    }

                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li className="dark:bg-gray-800 dark:text-gray-50">
                            <NavLink to="/" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <div className="flex items-center gap-2">
                                    <FaHome className="text-lg" />
                                    <span>Home</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="dark:bg-gray-800 dark:text-gray-50">
                            <NavLink to="/menu" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <div className="flex items-center gap-2">
                                    <AiOutlineBars className="text-lg" />
                                    <span>Menu</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="dark:bg-gray-800 dark:text-gray-50">
                            <NavLink to="/shop" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <div className="flex items-center gap-2">
                                    <AiFillShopping className="text-lg" />
                                    <span>Shop</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="dark:bg-gray-800 dark:text-gray-50">
                            <NavLink to="/contact" rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <div className="flex items-center gap-2">
                                    <AiOutlineMail className="text-lg" />
                                    <span>Contact</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-10 w-full ml-8">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
