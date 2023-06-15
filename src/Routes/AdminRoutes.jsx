import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Components/Hooks/useAuth';
import useAdmin from '../Components/Hooks/useAdmin';

const AdminRoutes = ({children}) => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [isAdmin, isAdminLoading] = useAdmin()
    const {user, loading} = useAuth()
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children
    }
    return  <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;