import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        enabled: !loading,
        queryKey: ['carts', user?.email],
        // queryFn: async () => {
        //     const res = await fetch(`https://bistro-boss-server-525mu0jyt-spartha343.vercel.app/carts?email=${user.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     });
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user.email}`);
            return res.data;
        },
    });
    return [cart, refetch];
};

export default useCart;