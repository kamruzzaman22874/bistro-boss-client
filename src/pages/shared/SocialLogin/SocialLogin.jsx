import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
// import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user
                const usersInfo = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photo }
                fetch("http://localhost:8000/users", {
                    method: 'POST',
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(usersInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { state: location })
                    })
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'sign in with Google done',
                //     showConfirmButton: false,
                //     timer: 1500
                // })
                
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='flex justify-center gap-8'>
            <button onClick={handleGoogleSignIn}>
                <FcGoogle className='text-3xl' />
            </button>
            <button>
                <BsFacebook className='text-3xl' />
            </button>
        </div>
    );
};

export default SocialLogin;