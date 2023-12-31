import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
    const { user, loading } = useAuth()
    const token = localStorage.getItem("access-token");
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/carts?email=${ user?.email }`, {
                headers: {
                    authorization: `bearer ${ token }`
                }
            })
            return res.json();
        }

    })

    return [cart, refetch]
};

export default useCart;
