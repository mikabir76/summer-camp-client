import React from 'react';
import useAuth from '../../../Components/Hooks/useAuth';

const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1 className='text-7xl'>Hi, {user?.displayName}</h1>
        </div>
    );
};

export default AdminHome;