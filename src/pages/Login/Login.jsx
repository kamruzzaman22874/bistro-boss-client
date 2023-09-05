import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png"
import loginImg from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
const Login = () => {
    const { userLogin } = useAuth()
    // const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || "/"


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login successfull.',
                    showConfirmButton: false,
                    timer: 1500

                })
                navigate(from, { replace: true })

            })
            .catch(err => console.log(err));
    }

    // const handleValidateCaptcha =(e)=>{
    //     const userCaptchaValue = e.target.value;
    //     if(validateCaptcha(userCaptchaValue)){
    //         setDisabled(false);
    //     }
    // }
    return (
        <>
            <Helmet>
                <title>Bistro Boss| Login</title>
            </Helmet>
            <div className="bg-cover bg-center  bg-opacity-50 md:p-24" style={ { backgroundImage: `url(${ bgImg })` } }>
                <div className="border-4 shadow-2xl md:p-16 md:flex justify-center items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4 px-10">Login</h2>
                        <div className="flex">
                            <div className="p-8 rounded shadow-md w-96">

                                <form onSubmit={ handleLogin }>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email "
                                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            <LoadCanvasTemplate />
                                        </label>
                                        {/* <input
                                            onBlur={handleValidateCaptcha}
                                            type="text"
                                            id="captcha"
                                            name="captcha"
                                            placeholder="Enter valid captcha"
                                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                                        /> */}
                                    </div>

                                    {/* TODO: make disabled */ }
                                    <div className="text-center">
                                        <button disabled={ false } className="btn border-b-2 border-b-orange-600 hover:border-b-orange-500 hover:bg-black hover:text-white my-3 w-full">Please Login</button>
                                    </div>
                                    <p className="text-center text-orange-500">Do not have an account ? <Link className="underline" to="/signup">Signup</Link></p>
                                    <div className="divider">OR Login With</div>

                                </form>
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={ loginImg } alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
