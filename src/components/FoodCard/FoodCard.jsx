import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth()
    const [,refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem ={manuItemId: _id, name, image, price, email: user.email}
            fetch("http://localhost:8000/carts",{
                method: "POST",
                headers: {"content-type":"application/json"},
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item food addeded cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {state:{from:location}})
                }
            })
        }
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="food" /></figure>
            <p className="absolute right-5 top-4 bg-slate-900 px-4 py-2 text-white">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-5">
                    <button onClick={() => handleAddToCart(item)} className="btn px-10 border-b-4 hover:border-b-purple-300 border-b-orange-600 hover:bg-black hover:text-white text-orange-500">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;