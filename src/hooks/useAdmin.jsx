import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
    const { user } = useAuth();
    const token = localStorage.getItem("access-token");

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({

        queryKey: ["isAdmin", user?.email],

        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const response = await fetch(`http://localhost:8000/users/admin/${ user.email }`,
                {
                    headers: {
                        authorization: `bearer ${ token }`,
                    },
                }
            );
            return response.json();
        },
    });
    return [isAdmin, isAdminLoading]

};

export default useAdmin;
