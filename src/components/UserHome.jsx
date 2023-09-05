import { MdLibraryBooks, MdMenuBook, MdPayments } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import { AiFillShop, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import useCart from "../hooks/useCart";

const UserHome = () => {
    const { user } = useAuth()
    const [cart] = useCart
    ()
    return (
        <div className="my-8 p-5">
            <h2 className="text-3xl font-bold text-center uppercase">Welcome ! Mr. <span className="text-blue-500">{user.displayName}</span></h2>
            <div className="grid md:grid-cols-3 gap-5 w-full py-10">
                <div className="card bg-gradient-to-r from-purple-400 shadow-xl">
                    <div className="p-5 flex justify-center items-center text-white gap-5">
                        <div className="text-4xl flex">
                            <MdMenuBook />
                        </div>
                        <div className="text-2xl font-bold">
                            <p>205</p>
                            <h2>Menu</h2>
                        </div>
                    </div>
                </div>
                <div className="card bg-gradient-to-r from-orange-400 shadow-xl">
                    <div className="p-5 flex justify-center items-center text-white gap-5">
                        <div className="text-4xl flex">
                            <AiFillShop />
                        </div>
                        <div className="text-2xl font-bold">
                            <p>103</p>
                            <h2>Shop</h2>
                        </div>
                    </div>
                </div>
                <div className="card bg-gradient-to-r from-pink-400 shadow-xl">
                    <div className="p-5 flex justify-center items-center text-white gap-5">
                        <div className="text-4xl flex">
                            <BiPhoneCall />
                        </div>
                        <div className="text-2xl font-bold">
                            <p>03</p>
                            <h2>Menu</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex">
                <div className="bg-orange-400 w-1/2 h-[200px] text-center py-5 rounded-l">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                    <p className="uppercase font-bold">{user?.displayName}</p>
                </div>
                <div className="flex justify-center w-1/2 py-5 rounded-r h-[200px] border-l-4 border-orange-600 bg-fuchsia-300">
                    <div>
                        <h2 className="text-2xl uppercase font-semibold py-2">Your Activities</h2>
                        <div className="">
                            <div>
                                <h2 className="flex items-center gap-2 text-lg text-blue-600 font-semibold"> <AiOutlineShoppingCart/> Order: {cart.length || 0}</h2>
                                <h2 className="flex items-center gap-2 text-lg text-green-500 font-semibold"> <AiOutlineStar/> Reviews: 2</h2>
                                <h2 className="flex items-center gap-2 text-lg text-amber-300 font-semibold"><MdLibraryBooks/> Booking: 1</h2>
                                <h2 className="flex items-center gap-2 text-lg text-orange-600 font-semibold"> <MdPayments/> Payment: 3</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserHome;