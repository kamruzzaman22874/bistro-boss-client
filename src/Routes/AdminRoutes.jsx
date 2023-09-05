import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
   const location = useLocation()
   const { user, loading } = useAuth()
   const [isAdmin, isAdminLoading] = useAdmin()


   if (loading || isAdminLoading) {
      return <h2>Loading.....</h2>
   }



   return (
      user && isAdmin ? <div>{ children }</div> : <Navigate to={ '/' } state={ { from: location } } replace />
   );


};

export default AdminRoutes;

