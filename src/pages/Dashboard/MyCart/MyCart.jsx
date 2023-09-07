import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart?.reduce((sum, item) => item?.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            
            if (result.isConfirmed) {
                refetch()
                fetch(`http://localhost:8000/carts/${item._id}`,{
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="p-10 w-full">
            <div className="w-7/12 mx-auto text-center py-10">
                <p className="text-orange-500 mb-3">---My Cart---</p>
                <h2 className="border-y-4 py-4 text-3xl uppercase">WANNA ADD MORE?</h2>
            </div>
            <Helmet>
                <title>Bistro Boss || My cart</title>
            </Helmet>
            <div className="bg-white p-10">
                <div className="flex justify-evenly font-semibold uppercase items-center text-xl">
                    <h2>Total Orders: {cart.length}</h2>
                    <h2>Total Price: {total}</h2>
                    <Link to="/dashboard/payment"><button className="btn btn-warning">Pay</button></Link>
                </div>
                <div className="overflow-x-auto py-2 my-3">
                    <table className="table rounded">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th>SL.</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}

                                    </td>
                                    <td >${item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost text-white text-xl bg-red-800"> <AiFillDelete /> </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;