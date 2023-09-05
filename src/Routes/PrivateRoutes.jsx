import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
   const { user, loading } = useAuth()
   const location = useLocation()

   if (loading) {
      return <h2>Loading.....</h2>
   }


   return (
      user ? <div>{ children }</div> : <Navigate to={ '/login' } state={ { from: location } } replace />
   );
};

export default PrivateRoutes;
