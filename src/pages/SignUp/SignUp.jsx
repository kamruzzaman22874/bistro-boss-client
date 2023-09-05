import { Link, useNavigate } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png"
import loginImg from "../../assets/others/authentication2.png"
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, userUpdateProfile} = useAuth();
    const navigate = useNavigate()

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                userUpdateProfile(data.name, data.photo)
                .then(() => {
                        const usersInfo = { name: data.name, email: data.email , image: data.photo }

                        fetch("http://localhost:8000/users", {
                            method: 'POST',
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(usersInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfull.',
                                        showConfirmButton: false,
                                        timer: 1500

                                    })
                                    navigate("/")
                                    // logOut()
                                    //     .then(() => {
                                    //         navigate("/login")
                                    //     })
                                    //     .catch(err => console.error(err))
                                }
                            })

                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.error(err));
    };
    return (
        <>
            <Helmet>
                <title>Bistro Boss| Signup</title>
            </Helmet>
            <div className="bg-cover bg-center  bg-opacity-50 p-24" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="border-4 shadow-2xl p-16 flex justify-center items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4 px-10">Signup</h2>
                        <div className="flex">
                            <div className="p-8 rounded shadow-md w-96">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            {...register("name", { required: true })}
                                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                                        />
                                        {errors.name && <span className="text-red-500 font-bold">Name field is required</span>}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Phot URL
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            {...register("photo", { required: true })}
                                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                                        />
                                        {errors.photo && <span className="text-red-500 font-bold">Photo URL field is required</span>}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            {...register("email", { required: true })}
                                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                                        />
                                        {errors.email && <span className="text-red-500 font-bold">Email field is required</span>}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            {...register("password",
                                                {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                })}
                                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                                        />
                                        {errors.password?.type === "minLength" && <span className="text-red-500 font-bold">Password field is required</span>}
                                        {errors.password?.type === "maxLength" && <span className="text-red-500 font-bold">Password field is required</span>}
                                        {errors.password?.type === "pattern" && <span className="text-red-500 font-bold">Password must have one uppercase, one lowercase,one number and one special character</span>}

                                    </div>
                                    <div className="text-center">
                                        <input className="btn border-b-2 my-3 border-b-orange-600 hover:border-b-orange-500 hover:bg-black hover:text-white w-full" type="submit" value="Please Signup" />
                                    </div>
                                    <p className="text-center text-orange-500">Already have an account ? <Link className="underline" to="/login">Login</Link></p>
                                    <div className="divider">OR Sign up With</div>
                                    
                                        <SocialLogin  />
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-none">
                        <img src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;