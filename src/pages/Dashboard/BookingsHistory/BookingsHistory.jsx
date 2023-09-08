import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const BookingsHistory = () => {
    const [bookings, setBookings] = useState([])

    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    useEffect(() => {
        fetch("http://localhost:8000/bookings")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data);
            })
    }, [])


    const handleDelete = (id) => {
        fetch(`http://localhost:8000/bookings/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Deleted successfully done",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <SectionTitle
                subHeading="Excellent Ambience"
                heading="MY BOOKINGS"
            ></SectionTitle>
            <div className="bg-white px-6">
                <div className="flex uppercase justify-between items-center">
                    <h2>Total bookings: {bookings.length}</h2>
                    <h2>Total Price: {price} </h2>
                    <button className="btn">Pay</button>
                </div>
                {/* use table  */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Date</th>
                                <th>Guest Number</th>
                                <th>Name</th>
                                <th>Phone number</th>
                                <th className="text-center">Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, index) => <tr key={booking._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {booking.date}
                                        </div>
                                    </td>
                                    <td>
                                        {booking.guest}
                                    </td>
                                    <td>{booking.name}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.email}</td>
                                    <td>
                                        <button onClick={() => handleDelete(booking._id)} className="btn btn-ghost text-white text-xl bg-red-800"> <AiFillDelete /> </button>
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

export default BookingsHistory;