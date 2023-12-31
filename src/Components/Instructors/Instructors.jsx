import React from 'react';
import useAuth from '../Hooks/useAuth';

const Instructors = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1 className='text-7xl'>Hi, {user?.displayName}</h1>
        </div>
    );
};

export default Instructors;