import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import axios from "axios";

const ManageItem = () => {
    const [menu, , refetch] = useMenu()

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                refetch();
                fetch(`http://localhost:8000/menu/${item._id}`, {
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
    const handleUpdate = (id) => {
        axios.get(`http://localhost:8000/menu/${id}`,)
        .then(res => {
            console.log(res.data,id);
        })
    }

    return (
        <div className="w-full">
            <SectionTitle
                subHeading="Hurry Up!"
                heading="MANAGE ALL ITEMS"
            ></SectionTitle>
            <div className="overflow-x-auto">
                <h2>Total Items: {menu.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Item Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => (document.getElementById('my_modal_3').showModal(), handleUpdate(item._id))} className="p-2 rounded text-white text-xl bg-orange-400"><FaEdit /> </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="p-2 rounded text-white text-xl bg-red-600"><AiTwotoneDelete /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                    <Modal />
                </table>
            </div>
        </div>
    );
};

export default ManageItem;