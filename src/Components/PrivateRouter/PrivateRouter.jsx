import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth()
    if(loading){
        return <p className='text-4xl text-center '>Loading......</p>
    }

    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;