
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { AiFillDelete } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";

const AllUsers = () => {
    const token = localStorage.getItem("access-token");
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("http://localhost:8000/users", {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
    })

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:8000/users/admin/${user?._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} Made admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = (user) => {
        fetch(`http://localhost:8000/users/${user._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} remove from admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="w-full">
            <div className="p-10">
                <div className="w-7/12 mx-auto text-center py-10">
                    <p className="text-orange-500 mb-3">---How many---</p>
                    <h2 className="border-y-4 py-4 text-3xl uppercase">Manage all users</h2>
                </div>
                <Helmet>
                    <title>Bistro Boss || All users</title>
                </Helmet>
                <div className="bg-white  w-full p-5">
                    <div>
                        <h2 className="text-2xl uppercase font-semibold">Total users: {users.length}</h2>
                    </div>
                    <div className="overflow-x-auto py-2 my-3">
                        <table className="table rounded">
                            {/* head */}
                            <thead className="bg-[#D1A054] text-white">
                                <tr>
                                    <th>SL.</th>
                                    <th>Name</th>
                                    <th>Email Name</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {
                                    users?.map((user, index) => <tr key={user}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {user.name}
                                        </td>
                                        <td>
                                            {user.email}

                                        </td>
                                        <td >
                                            {
                                                user?.role === "admin" ? <span className="text-green-600 uppercase flex items-center">Admin <TiTick className="text-lg" /> </span> : <td>
                                                    < button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-white text-xl bg-orange-600"> <FaUserShield /> </button>
                                                </td>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user)} className="btn btn-ghost text-white text-xl bg-red-800"> <AiFillDelete /> </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AllUsers;

