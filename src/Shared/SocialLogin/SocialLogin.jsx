import React from 'react';
import google from '../../assets/google.png'
const SocialLogin = () => {
    return (
        <div className='mb-4'>
            <div className='flex justify-center items-center bg-white w-5/12 shadow-sm mx-auto p-2'>
                <img className='border-e-4' width={50} src={google} alt="" />
                <p className='text-xl font-semibold ml-2'>Login with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;